(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{uNIk:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var s=n("mrSG"),o=n("q1tI"),i=n("oX1k"),r=n("aupw"),a=n("LrGI"),u=n("CBcM"),d=n("9h5o"),c=n("xL1/"),l=n("4qJ4"),m=n("DU53"),p=n("pnrE"),h=n("FbcY"),_=n("WgWP"),v=n("elao"),M=n("cwxN"),I=n("WJ1O"),y=n("Q9RI"),b=n("mWkG"),f=n("KiHr"),g=n("i+8s"),k=n("e06V"),O=n("4PRO"),E=n("3uSm"),C=n("I0cs"),S=n("Edjz"),w=n("RyIQ"),x=n("jsqa"),T=n("fyrY"),D=n("NKss"),K=n("VVd7"),N=n("tqYG"),F=n("v6wc"),j=Object(d.a)(),P=Object(d.a)();function A(e){return e.subMenuProps?e.subMenuProps.items:e.items}var H=Object(c.a)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){return N.o.apply(void 0,Object(s.e)([t,F.a],e))}})),W=function(e){function t(t){var n=e.call(this,t)||this;return n._mounted=!1,n.dismiss=function(e,t){var s=n.props.onDismiss;s&&s(e,t)},n._tryFocusPreviousActiveElement=function(e){n.props.onRestoreFocus?n.props.onRestoreFocus(e):e&&e.containsFocus&&n._previousActiveElement&&n._previousActiveElement.focus&&n._previousActiveElement.focus()},n._onRenderMenuList=function(e,t){var s=0,r=e.items,a=e.totalItemCount,u=e.hasCheckmarks,d=e.hasIcons,c=e.role;return o.createElement("ul",{className:n._classNames.list,onKeyDown:n._onKeyDown,onKeyUp:n._onKeyUp,role:null!=c?c:"menu"},r.map((function(e,t){var o=n._renderMenuItem(e,t,s,a,u,d);if(e.itemType!==i.a.Divider&&e.itemType!==i.a.Header){var r=e.customOnRenderListLength?e.customOnRenderListLength:1;s+=r}return o})))},n._renderMenuItem=function(e,t,s,r,a,u){var d,c,l=[],m=e.iconProps||{iconName:"None"},p=e.getItemClassNames,h=e.itemProps,_=h?h.styles:void 0,v=e.itemType===i.a.Divider?e.className:void 0,M=e.submenuIconProps?e.submenuIconProps.className:"";if(p)c=p(n.props.theme,Object(C.d)(e),n.state.expandedMenuItemKey===e.key,!!Object(C.a)(e),!!e.href,"None"!==m.iconName,e.className,v,m.className,M,e.primaryDisabled);else{var I={theme:n.props.theme,disabled:Object(C.d)(e),expanded:n.state.expandedMenuItemKey===e.key,checked:!!Object(C.a)(e),isAnchorLink:!!e.href,knownIcon:"None"!==m.iconName,itemClassName:e.className,dividerClassName:v,iconClassName:m.className,subMenuClassName:M,primaryDisabled:e.primaryDisabled};c=P(H(null===(d=n._classNames.subComponentStyles)||void 0===d?void 0:d.menuItem,_),I)}switch("-"!==e.text&&"-"!==e.name||(e.itemType=i.a.Divider),e.itemType){case i.a.Divider:l.push(n._renderSeparator(t,c));break;case i.a.Header:l.push(n._renderSeparator(t,c));var y=n._renderHeaderMenuItem(e,c,t,a,u);l.push(n._renderListItem(y,e.key||t,c,e.title));break;case i.a.Section:l.push(n._renderSectionItem(e,c,t,a,u));break;default:var b=n._renderNormalItem(e,c,t,s,r,a,u);l.push(n._renderListItem(b,e.key||t,c,e.title))}return o.createElement(o.Fragment,{key:e.key},l)},n._defaultMenuItemRenderer=function(e){var t=e.index,s=e.focusableElementIndex,o=e.totalItemCount,i=e.hasCheckmarks,r=e.hasIcons;return n._renderMenuItem(e,t,s,o,i,r)},n._onKeyDown=function(e){n._lastKeyDownWasAltOrMeta=n._isAltOrMeta(e);var t=e.which===l.a.escape&&(Object(m.a)()||Object(p.a)());return n._keyHandler(e,n._shouldHandleKeyDown,t)},n._shouldHandleKeyDown=function(e){return e.which===l.a.escape||n._shouldCloseSubMenu(e)||e.which===l.a.up&&(e.altKey||e.metaKey)},n._onMenuFocusCapture=function(e){n.props.delayUpdateFocusOnHover&&(n._shouldUpdateFocusOnMouseEvent=!0)},n._onKeyUp=function(e){return n._keyHandler(e,n._shouldHandleKeyUp,!0)},n._shouldHandleKeyUp=function(e){var t=n._lastKeyDownWasAltOrMeta&&n._isAltOrMeta(e);return n._lastKeyDownWasAltOrMeta=!1,!!t&&!(Object(p.a)()||Object(m.a)())},n._keyHandler=function(e,t,s){var o=!1;return t(e)&&(n._focusingPreviousElement=!0,n.dismiss(e,s),e.preventDefault(),e.stopPropagation(),o=!0),o},n._shouldCloseSubMenu=function(e){var t=Object(h.a)(n.props.theme)?l.a.right:l.a.left;return!(e.which!==t||!n.props.isSubMenu)&&(n._adjustedFocusZoneProps.direction===a.a.vertical||!!n._adjustedFocusZoneProps.checkForNoWrap&&!Object(_.o)(e.target,"data-no-horizontal-wrap"))},n._onMenuKeyDown=function(e){if(!n._onKeyDown(e)&&n._host){var t=!(!e.altKey&&!e.metaKey),s=e.which===l.a.up,o=e.which===l.a.down;if(!t&&(s||o)){var i=s?Object(_.h)(n._host,n._host.lastChild,!0):Object(_.e)(n._host,n._host.firstChild,!0);i&&(i.focus(),e.preventDefault(),e.stopPropagation())}}},n._onScroll=function(){n._isScrollIdle||void 0===n._scrollIdleTimeoutId?n._isScrollIdle=!1:(n._async.clearTimeout(n._scrollIdleTimeoutId),n._scrollIdleTimeoutId=void 0),n._scrollIdleTimeoutId=n._async.setTimeout((function(){n._isScrollIdle=!0}),250)},n._onItemMouseEnterBase=function(e,t,s){n._shouldIgnoreMouseEvent()||n._updateFocusOnMouseEvent(e,t,s)},n._onItemMouseMoveBase=function(e,t,s){var o=t.currentTarget;n._shouldUpdateFocusOnMouseEvent&&(n._gotMouseMove=!0,n._isScrollIdle&&void 0===n._enterTimerId&&o!==n._targetWindow.document.activeElement&&n._updateFocusOnMouseEvent(e,t,s))},n._onMouseItemLeave=function(e,t){if(!n._shouldIgnoreMouseEvent()&&(void 0!==n._enterTimerId&&(n._async.clearTimeout(n._enterTimerId),n._enterTimerId=void 0),void 0===n.state.expandedMenuItemKey))if(n._host.setActive)try{n._host.setActive()}catch(e){}else n._host.focus()},n._onItemMouseDown=function(e,t){e.onMouseDown&&e.onMouseDown(e,t)},n._onItemClick=function(e,t){n._onItemClickBase(e,t,t.currentTarget)},n._onItemClickBase=function(e,t,s){var o=A(e);n._cancelSubMenuTimer(),Object(C.c)(e)||o&&o.length?e.key!==n.state.expandedMenuItemKey&&(n.setState({expandedByMouseClick:0!==t.nativeEvent.detail||"mouse"===t.nativeEvent.pointerType}),n._onItemSubMenuExpand(e,s)):n._executeItemClick(e,t),t.stopPropagation(),t.preventDefault()},n._onAnchorClick=function(e,t){n._executeItemClick(e,t),t.stopPropagation()},n._executeItemClick=function(e,t){if(!e.disabled&&!e.isDisabled){var s=!1;e.onClick?s=!!e.onClick(t,e):n.props.onItemClick&&(s=!!n.props.onItemClick(t,e)),!s&&t.defaultPrevented||(n.dismiss(t,!0),n._focusingPreviousElement=!0)}},n._onItemKeyDown=function(e,t){var s=Object(h.a)(n.props.theme)?l.a.left:l.a.right;e.disabled||t.which!==s&&t.which!==l.a.enter&&(t.which!==l.a.down||!t.altKey&&!t.metaKey)||(n.setState({expandedByMouseClick:!1}),n._onItemSubMenuExpand(e,t.currentTarget),t.preventDefault())},n._cancelSubMenuTimer=function(){void 0!==n._enterTimerId&&(n._async.clearTimeout(n._enterTimerId),n._enterTimerId=void 0)},n._onItemSubMenuExpand=function(e,t){n.state.expandedMenuItemKey!==e.key&&(n.state.expandedMenuItemKey&&n._onSubMenuDismiss(),t.focus(),n.setState({expandedMenuItemKey:e.key,submenuTarget:t}))},n._onSubMenuDismiss=function(e,t){t?n.dismiss(e,t):n._mounted&&n.setState({dismissedMenuItemKey:n.state.expandedMenuItemKey,expandedMenuItemKey:void 0,submenuTarget:void 0})},n._getSubMenuId=function(e){var t=n.state.subMenuId;return e.subMenuProps&&e.subMenuProps.id&&(t=e.subMenuProps.id),t},n._onPointerAndTouchEvent=function(e){n._cancelSubMenuTimer()},n._async=new v.a(n),n._events=new M.a(n),Object(I.a)(n),Object(y.a)("ContextualMenu",t,{getMenuClassNames:"styles"}),n.state={contextualMenuItems:void 0,subMenuId:Object(b.a)("ContextualMenu")},n._id=t.id||Object(b.a)("ContextualMenu"),n._focusingPreviousElement=!1,n._isScrollIdle=!0,n._shouldUpdateFocusOnMouseEvent=!n.props.delayUpdateFocusOnHover,n._gotMouseMove=!1,n}return Object(s.c)(t,e),t.prototype.shouldComponentUpdate=function(e,t){return!(!e.shouldUpdateWhenHidden&&this.props.hidden&&e.hidden)&&(!Object(f.b)(this.props,e)||!Object(f.b)(this.state,t))},t.prototype.UNSAFE_componentWillUpdate=function(e){if(e.target!==this.props.target){var t=e.target;this._setTargetWindowAndElement(t)}this._isHidden(e)!==this._isHidden(this.props)&&(this._isHidden(e)?this._onMenuClosed():(this._onMenuOpened(),this._previousActiveElement=this._targetWindow?this._targetWindow.document.activeElement:void 0)),e.delayUpdateFocusOnHover!==this.props.delayUpdateFocusOnHover&&(this._shouldUpdateFocusOnMouseEvent=!e.delayUpdateFocusOnHover,this._gotMouseMove=this._shouldUpdateFocusOnMouseEvent&&this._gotMouseMove)},t.prototype.UNSAFE_componentWillMount=function(){var e=this.props.target;this._setTargetWindowAndElement(e),this.props.hidden||(this._previousActiveElement=this._targetWindow?this._targetWindow.document.activeElement:void 0)},t.prototype.componentDidMount=function(){this.props.hidden||this._onMenuOpened(),this._mounted=!0},t.prototype.componentWillUnmount=function(){this.props.onMenuDismissed&&this.props.onMenuDismissed(this.props),this._events.dispose(),this._async.dispose(),this._mounted=!1},t.prototype.render=function(){var e=this,t=this.props.isBeakVisible,n=this.props,r=n.items,d=n.labelElementId,c=n.id,l=n.className,m=n.beakWidth,p=n.directionalHint,h=n.directionalHintForRTL,_=n.alignTargetEdge,v=n.gapSpace,M=n.coverTarget,I=n.ariaLabel,y=n.doNotLayer,b=n.target,f=n.bounds,k=n.useTargetWidth,O=n.useTargetAsMinWidth,E=n.directionalHintFixed,C=n.shouldFocusOnMount,x=n.shouldFocusOnContainer,T=n.title,D=n.styles,K=n.theme,N=n.calloutProps,F=n.onRenderSubMenu,P=void 0===F?this._onRenderSubMenu:F,A=n.onRenderMenuList,H=void 0===A?this._onRenderMenuList:A,W=n.focusZoneProps,B=n.getMenuClassNames;this._classNames=B?B(K,l):j(D,{theme:K,className:l});var L=function e(t){for(var n=0,s=t;n<s.length;n++){var o=s[n];if(o.iconProps)return!0;if(o.itemType===i.a.Section&&o.sectionProps&&e(o.sectionProps.items))return!0}return!1}(r);this._adjustedFocusZoneProps=Object(s.a)(Object(s.a)({},W),{direction:this._getFocusZoneDirection()});var R,U=function(e){return e.some((function(e){return!!e.canCheck||!(!e.sectionProps||!e.sectionProps.items.some((function(e){return!0===e.canCheck})))}))}(r),Z=this.state.expandedMenuItemKey&&!0!==this.props.hidden?this._getSubmenuProps():null;t=void 0===t?this.props.responsiveMode<=S.a.medium:t;var V=this._target;if((k||O)&&V&&V.offsetWidth){var q=V.getBoundingClientRect().width-2;k?R={width:q}:O&&(R={minWidth:q})}if(r&&r.length>0){for(var z=0,G=0,J=r;G<J.length;G++){var Y=J[G];if(Y.itemType!==i.a.Divider&&Y.itemType!==i.a.Header)z+=Y.customOnRenderListLength?Y.customOnRenderListLength:1}var Q=this._classNames.subComponentStyles?this._classNames.subComponentStyles.callout:void 0;return o.createElement(w.a,Object(s.a)({styles:Q,onRestoreFocus:this._tryFocusPreviousActiveElement},N,{target:b,isBeakVisible:t,beakWidth:m,directionalHint:p,directionalHintForRTL:h,gapSpace:v,coverTarget:M,doNotLayer:y,className:Object(g.a)("ms-ContextualMenu-Callout",N&&N.className),setInitialFocus:C,onDismiss:this.props.onDismiss,onScroll:this._onScroll,bounds:f,directionalHintFixed:E,alignTargetEdge:_,hidden:this.props.hidden}),o.createElement("div",{"aria-label":I,"aria-labelledby":d,style:R,ref:function(t){return e._host=t},id:c,className:this._classNames.container,tabIndex:x?0:-1,onKeyDown:this._onMenuKeyDown,onKeyUp:this._onKeyUp,onFocusCapture:this._onMenuFocusCapture},T&&o.createElement("div",{className:this._classNames.title}," ",T," "),r&&r.length?o.createElement(u.a,Object(s.a)({className:this._classNames.root,isCircularNavigation:!0,handleTabKey:a.b.all},this._adjustedFocusZoneProps),H({items:r,totalItemCount:z,hasCheckmarks:U,hasIcons:L,defaultMenuItemRenderer:this._defaultMenuItemRenderer},this._onRenderMenuList)):null,Z&&P(Z,this._onRenderSubMenu)))}return null},t.prototype._isHidden=function(e){return!!e.hidden},t.prototype._onMenuOpened=function(){this._events.on(this._targetWindow,"resize",this.dismiss),this._shouldUpdateFocusOnMouseEvent=!this.props.delayUpdateFocusOnHover,this._gotMouseMove=!1,this.props.onMenuOpened&&this.props.onMenuOpened(this.props)},t.prototype._onMenuClosed=function(){this._events.off(this._targetWindow,"resize",this.dismiss),this._tryFocusPreviousActiveElement({containsFocus:this._focusingPreviousElement,documentContainsFocus:this._targetWindow.document.hasFocus(),originalElement:this._previousActiveElement}),this._focusingPreviousElement=!1,this.props.onMenuDismissed&&this.props.onMenuDismissed(this.props),this._shouldUpdateFocusOnMouseEvent=!this.props.delayUpdateFocusOnHover,this.setState({expandedByMouseClick:void 0,dismissedMenuItemKey:void 0,expandedMenuItemKey:void 0,submenuTarget:void 0})},t.prototype._getFocusZoneDirection=function(){var e=this.props.focusZoneProps;return e&&void 0!==e.direction?e.direction:a.a.vertical},t.prototype._onRenderSubMenu=function(e,t){throw Error("ContextualMenuBase: onRenderSubMenu callback is null or undefined. Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.")},t.prototype._renderSectionItem=function(e,t,n,r,a){var u,d=this,c=e.sectionProps;if(c){var l,m;if(c.title){var p=void 0,h="";if("string"==typeof c.title){var _=this._id+c.title.replace(/\s/g,"");p={key:"section-"+c.title+"-title",itemType:i.a.Header,text:c.title,id:_},h=_}else p=c.title,h=this._id+(null===(u=c.title.text)||void 0===u?void 0:u.replace(/\s/g,""));p&&(m={role:"group","aria-labelledby":h},l=this._renderHeaderMenuItem(p,t,n,r,a))}return c.items&&c.items.length>0?o.createElement("li",{role:"presentation",key:c.key||e.key||"section-"+n},o.createElement("div",Object(s.a)({},m),o.createElement("ul",{className:this._classNames.list,role:"menu"},c.topDivider&&this._renderSeparator(n,t,!0,!0),l&&this._renderListItem(l,e.key||n,t,e.title),c.items.map((function(e,t){return d._renderMenuItem(e,t,t,c.items.length,r,a)})),c.bottomDivider&&this._renderSeparator(n,t,!1,!0)))):void 0}},t.prototype._renderListItem=function(e,t,n,s){return o.createElement("li",{role:"presentation",title:s,key:t,className:n.item},e)},t.prototype._renderSeparator=function(e,t,n,s){return s||e>0?o.createElement("li",{role:"separator",key:"separator-"+e+(void 0===n?"":n?"-top":"-bottom"),className:t.divider,"aria-hidden":"true"}):null},t.prototype._renderNormalItem=function(e,t,n,o,i,r,a){return e.onRender?e.onRender(Object(s.a)({"aria-posinset":o+1,"aria-setsize":i},e),this.dismiss):e.href?this._renderAnchorMenuItem(e,t,n,o,i,r,a):e.split&&Object(C.c)(e)?this._renderSplitButton(e,t,n,o,i,r,a):this._renderButtonItem(e,t,n,o,i,r,a)},t.prototype._renderHeaderMenuItem=function(e,t,n,i,r){var a=this.props.contextualMenuItemAs,u=void 0===a?x.a:a,d=e.itemProps,c=e.id,l=d&&Object(k.d)(d,k.c);return o.createElement("div",Object(s.a)({id:c,className:this._classNames.header},l,{style:e.style}),o.createElement(u,Object(s.a)({item:e,classNames:t,index:n,onCheckmarkClick:i?this._onItemClick:void 0,hasIcons:r},d)))},t.prototype._renderAnchorMenuItem=function(e,t,n,s,i,r,a){var u=this.props.contextualMenuItemAs,d=this.state.expandedMenuItemKey;return o.createElement(T.a,{item:e,classNames:t,index:n,focusableElementIndex:s,totalItemCount:i,hasCheckmarks:r,hasIcons:a,contextualMenuItemAs:u,onItemMouseEnter:this._onItemMouseEnterBase,onItemMouseLeave:this._onMouseItemLeave,onItemMouseMove:this._onItemMouseMoveBase,onItemMouseDown:this._onItemMouseDown,executeItemClick:this._executeItemClick,onItemClick:this._onAnchorClick,onItemKeyDown:this._onItemKeyDown,getSubMenuId:this._getSubMenuId,expandedMenuItemKey:d,openSubMenu:this._onItemSubMenuExpand,dismissSubMenu:this._onSubMenuDismiss,dismissMenu:this.dismiss})},t.prototype._renderButtonItem=function(e,t,n,s,i,r,a){var u=this.props.contextualMenuItemAs,d=this.state.expandedMenuItemKey;return o.createElement(D.a,{item:e,classNames:t,index:n,focusableElementIndex:s,totalItemCount:i,hasCheckmarks:r,hasIcons:a,contextualMenuItemAs:u,onItemMouseEnter:this._onItemMouseEnterBase,onItemMouseLeave:this._onMouseItemLeave,onItemMouseMove:this._onItemMouseMoveBase,onItemMouseDown:this._onItemMouseDown,executeItemClick:this._executeItemClick,onItemClick:this._onItemClick,onItemClickBase:this._onItemClickBase,onItemKeyDown:this._onItemKeyDown,getSubMenuId:this._getSubMenuId,expandedMenuItemKey:d,openSubMenu:this._onItemSubMenuExpand,dismissSubMenu:this._onSubMenuDismiss,dismissMenu:this.dismiss})},t.prototype._renderSplitButton=function(e,t,n,s,i,r,a){var u=this.props.contextualMenuItemAs,d=this.state.expandedMenuItemKey;return o.createElement(K.a,{item:e,classNames:t,index:n,focusableElementIndex:s,totalItemCount:i,hasCheckmarks:r,hasIcons:a,contextualMenuItemAs:u,onItemMouseEnter:this._onItemMouseEnterBase,onItemMouseLeave:this._onMouseItemLeave,onItemMouseMove:this._onItemMouseMoveBase,onItemMouseDown:this._onItemMouseDown,executeItemClick:this._executeItemClick,onItemClick:this._onItemClick,onItemClickBase:this._onItemClickBase,onItemKeyDown:this._onItemKeyDown,openSubMenu:this._onItemSubMenuExpand,dismissSubMenu:this._onSubMenuDismiss,dismissMenu:this.dismiss,expandedMenuItemKey:d,onTap:this._onPointerAndTouchEvent})},t.prototype._isAltOrMeta=function(e){return e.which===l.a.alt||"Meta"===e.key},t.prototype._shouldIgnoreMouseEvent=function(){return!this._isScrollIdle||!this._gotMouseMove},t.prototype._updateFocusOnMouseEvent=function(e,t,n){var s=this,o=n||t.currentTarget,i=this.props.subMenuHoverDelay,r=void 0===i?250:i;e.key!==this.state.expandedMenuItemKey&&(void 0!==this._enterTimerId&&(this._async.clearTimeout(this._enterTimerId),this._enterTimerId=void 0),void 0===this.state.expandedMenuItemKey&&o.focus(),Object(C.c)(e)?(t.stopPropagation(),this._enterTimerId=this._async.setTimeout((function(){o.focus(),s.setState({expandedByMouseClick:!0}),s._onItemSubMenuExpand(e,o),s._enterTimerId=void 0}),r)):this._enterTimerId=this._async.setTimeout((function(){s._onSubMenuDismiss(t),o.focus(),s._enterTimerId=void 0}),r))},t.prototype._getSubmenuProps=function(){var e=this.state,t=e.submenuTarget,n=e.expandedMenuItemKey,s=this._findItemByKey(n),o=null;return s&&(o={items:A(s),target:t,onDismiss:this._onSubMenuDismiss,isSubMenu:!0,id:this.state.subMenuId,shouldFocusOnMount:!0,shouldFocusOnContainer:this.state.expandedByMouseClick,directionalHint:Object(h.a)(this.props.theme)?r.a.leftTopEdge:r.a.rightTopEdge,className:this.props.className,gapSpace:0,isBeakVisible:!1},s.subMenuProps&&Object(f.a)(o,s.subMenuProps)),o},t.prototype._findItemByKey=function(e){var t=this.props.items;return this._findItemByKeyFromItems(e,t)},t.prototype._findItemByKeyFromItems=function(e,t){for(var n=0,s=t;n<s.length;n++){var o=s[n];if(o.itemType===i.a.Section&&o.sectionProps){var r=this._findItemByKeyFromItems(e,o.sectionProps.items);if(r)return r}else if(o.key&&o.key===e)return o}},t.prototype._setTargetWindowAndElement=function(e){var t=this._host;if(e)if("string"==typeof e){var n=Object(O.a)(t);this._target=n?n.querySelector(e):null,this._targetWindow=Object(E.a)(t)}else if(e.stopPropagation)this._targetWindow=Object(E.a)(e.target),this._target=e;else if(void 0===e.left&&void 0===e.x||void 0===e.top&&void 0===e.y)if(void 0!==e.current)this._target=e.current,this._targetWindow=Object(E.a)(this._target);else{var s=e;this._targetWindow=Object(E.a)(s),this._target=e}else this._targetWindow=Object(E.a)(t),this._target=e;else this._targetWindow=Object(E.a)(t)},t.defaultProps={items:[],shouldFocusOnMount:!0,gapSpace:0,directionalHint:r.a.bottomAutoEdge,beakWidth:16},t=Object(s.b)([S.b],t)}(o.Component)}}]);
//# sourceMappingURL=vendor.office-ui-fabric-react~bd582b2e.c667f282ca782a23cc90.bundle.map