import React, { useState, useEffect, useRef } from 'react';
function renderFrame(state, cohort, CDPCopy, plugin) {
  return MyIframeComponent(state, cohort, CDPCopy, plugin)
}
function MyIframeComponent({ state, cohort, CDPCopy, plugin }) {
  const [iframeUrl, setIframeUrl] = useState('');
  const [iframeHeight, setIframeHeight] = useState('auto');
  const [cssVars, setCssVars] = useState('');
  const iframeContainerRef = useRef(null);
  const iframeRef = useRef(null);

  const componentId = plugin?.componentId || '';
  const isMobile = cohort?.isMobile;
  const isOnline = cohort?.isOnline;
  const thumbnailURL = state?.thumbnailURL?.source?.original?.url || './build/FPO-interactive.png';

  // Ensure the correct URL prefix
  const setValidPrefix = (url) => {
    if (url.indexOf('//') === 0) return url;
    if (url.indexOf('http://') === 0) return url;
    if (url.indexOf('https://') === 0) return url;
    return '//' + url;
  };

  // Handle iframe resizing and event publication
  const processIframeSize = () => {
    const iframeContainer = iframeContainerRef.current;
    const innerIframe = iframeRef.current;

    const iframeContainerScrollHeight = iframeContainer?.scrollHeight;

    // Use CDPCopy to call event (assuming CDPCopy has an event method)
    CDPCopy.event('iframeContainerResize').publish({
      totalScrollableHeight: iframeContainerScrollHeight,
      componentId,
    });

    if (innerIframe?.clientHeight <= 400) {
      iframeContainer.style.height = 'auto';
      innerIframe.style.height = '400px';
    }
  };

  // Set CSS variables
  const renderCssVariables = (theme) => {
    const themeVars = `
      ${toMaybeVarString(theme.bodyFont, 'body-font')}
      ${toMaybeVarString(theme.titleFont, 'title-font')}
      ${toMaybeVarString(theme.primaryColor, 'primary-color')}
      ${toMaybeVarString(theme.textColor, 'text-color')}
      ${toMaybeVarString(theme.successColor, 'success-color')}
      ${toMaybeVarString(theme.errorColor, 'error-color')}
      ${toMaybeVarString(theme.surfaceColor, 'surface-color')}
      ${toMaybeVarString(theme.backgroundColor, 'background-color')}
    `;
    setCssVars(themeVars);
  };

  // Helper function to generate CSS variables
  const toMaybeVarString = (maybeVal, cssVarName) => {
    return maybeVal ? `--${cssVarName}:${maybeVal};` : '';
  };

  // Handle link click (track external link clicks)
  const handleClick = (url) => {
    CDPCopy.event('link.click.event').publish({
      type: 'ExternalLink',
      href: url,
    });
  };

  // Handle iframe resize for plugin container
  const resizePluginContainer = (height) => {
    // Event publication for SPF
    CDPCopy.event('pluginResize').publish({
      pluginHeightPx: height,
      componentId,
    });
  };

  // Handle initial rendering of the iframe
  useEffect(() => {
    if (state?.url) {
      let url = setValidPrefix(state.url);
      setIframeUrl(url);
    }

    // Setup theme and CSS
    if (state?.style?.cssUrl || state?.style?.customCss) {
      renderCssVariables(state.style || {});
    }

    // Initialize title
    document.title = state?.activityTitle || '';

    // Handle iframe resizing
    const resizeObserver = new ResizeObserver((elements) => {
      const element = elements[0];
      resizePluginContainer(element?.contentRect?.height);
    });

    if (iframeContainerRef.current) {
      resizeObserver.observe(iframeContainerRef.current);
    }

    return () => {
      if (iframeContainerRef.current) {
        resizeObserver.unobserve(iframeContainerRef.current);
      }
    };
  }, [state]);

  // Handle mobile-specific iframe behavior
  useEffect(() => {
    if (isMobile) {
      const iframeContainer = iframeContainerRef.current;
      resizeObserver.unobserve(iframeContainer);
      iframeContainer.style.height = 'auto';
      resizeObserver.observe(iframeContainer);
    }
  }, [isMobile]);

  const Thumbnail = (
    <div className="thumbnail-container">
      <img src={thumbnailURL} className="thumbnail-image" alt="Thumbnail" />
      <span className="link-icon" onClick={() => handleClick(iframeUrl)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 36 45">
          <path d="M35,10a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H27a1,1,0,0,0,0,2h5.59L18.29,16.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L34,3.41V9A1,1,0,0,0,35,10Z" />
          <path d="M7,36H25a7,7,0,0,0,7-7V15a1,1,0,0,0-2,0V29a5,5,0,0,1-5,5H7a5,5,0,0,1-5-5V11A5,5,0,0,1,7,6H21a1,1,0,0,0,0-2H7a7,7,0,0,0-7,7V29A7,7,0,0,0,7,36Z" />
        </svg>
      </span>
    </div>
  );

  return (
    <div className={`iframe-container ${state?.style?.customCss || ''}`} data-id={componentId} ref={iframeContainerRef}>
      {state?.activityLabel || state?.activityTitle ? (
        <h4 className="component-label-section">
          {state?.activityLabel && <span className="component-label" data-id={`${componentId}-activityLabel`}>{state.activityLabel}</span>}
          {state?.activityTitle && <span className="component-title" data-id={`${componentId}-activityTitle`}>{state.activityTitle}</span>}
        </h4>
      ) : null}

      {state?.instructions && <div className="component-instructions" data-id={`${componentId}-instructions`}>{state.instructions}</div>}

      {!isMobile ? (
        <iframe
          ref={iframeRef}
          className={state?.style?.customCss || state?.cssClass}
          src={iframeUrl}
          title={state?.title || ''}
          allowFullScreen
          onLoad={processIframeSize}
        />
      ) : (
        <div className="thumbnail-wrapper">{Thumbnail}</div>
      )}

      {(state?.captions || state?.credit) && (
        <figure className="component-figure">
          <figcaption>
            {state?.captions && <div className="component-caption" data-id={`${componentId}-captions`}>{state.captions}</div>}
            {state?.credit && <div className="component-credit" data-id={`${componentId}-credit`}>{state.credit}</div>}
          </figcaption>
        </figure>
      )}
    </div>
  );
}

export default MyIframeComponent;
