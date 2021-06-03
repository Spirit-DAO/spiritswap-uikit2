import React, { isValidElement, cloneElement, Children, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, typography, variant as variant$1, layout, background, border, position, flexbox } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space, typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    TOGGLE: "toggle",
};

var _a, _b;
var scaleVariants = (_a = {},
    _a[scales.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a[scales.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a[scales.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b[variants.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b[variants.SUBTLE] = {
        backgroundColor: "farmBackground",
        color: "text",
    },
    _b[variants.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b[variants.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b[variants.TOGGLE] = {
        backgroundColor: "toggleBackground",
        color: "text",
    },
    _b);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  /* border: 0;\n  border-radius: 0.5rem;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset; */\n  box-shadow: 2px 1000px 1px #212230 inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  border-radius: 0.5rem;\n  //color: ", ";\n\n  border: solid 3px transparent;\n  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),\n    linear-gradient(90deg, #42d784, #60d5dc);\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n  ", "\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  /* border: 0;\n  border-radius: 0.5rem;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset; */\n  box-shadow: 2px 1000px 1px #212230 inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  border-radius: 0.5rem;\n  //color: ", ";\n\n  border: solid 3px transparent;\n  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),\n    linear-gradient(90deg, #42d784, #60d5dc);\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n  ",
    "\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#fff" : "#0ad9e4");
}, function (props) {
    return !props.disabled
        ? ""
        : " \n    box-shadow: 2px 1000px 1px rgb(66,64,55) inset;\n    color: rgb(113,113,97);\n    background-image: none;\n    ";
}, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), layout, space);
var templateObject_1$2;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants.PRIMARY,
    scale: scales.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  background-image: none;\n  width: ", ";\n"], ["\n  padding: 0;\n  background-image: none;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return React.createElement("img", __assign({}, props, { width: "220px", height: "50px", src: "/images/mobile-logo.png" }));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M222.46,134.29s-11-48.07-55.48-65.87S60.16,41.12,18.62,72,33.46,209.66,70.84,214.4,167,197.79,212.08,240.51,228.32,151.63,222.46,134.29Z", transform: "translate(-4 -51.89)", fill: "#9c9b9b" }),
            React.createElement("path", { d: "M189,127.17C174.2,91.56,106.45,73.76,66.69,89.78s8.75,83.08,21.81,92.58c12.71,9.25,57.11,19,68.39,15.43S192.86,136.59,189,127.17Z", transform: "translate(-4 -51.89)", fill: "#706f6e" })),
        React.createElement("g", null,
            React.createElement("path", { d: "M293.54,134.29s11-48.07,55.48-65.87S455.84,41.12,497.38,72,482.54,209.66,445.16,214.4,349,197.79,303.92,240.51,287.68,151.63,293.54,134.29Z", transform: "translate(-4 -51.89)", fill: "#a7a5a5" }),
            React.createElement("path", { d: "M327,127.17c14.76-35.61,82.51-53.41,122.27-37.39s-8.75,83.08-21.81,92.58c-12.71,9.25-57.12,19-68.39,15.43S323.14,136.59,327,127.17Z", transform: "translate(-4 -51.89)", fill: "#868686" })),
        React.createElement("g", null,
            React.createElement("path", { d: "M259.41,482.28c109.57,0,242.08-80.54,214.87-192.9C465,251.11,457.8,207,457.8,207A139.36,139.36,0,0,0,318.45,67.65s-37.52,5.5-59.58,5.5-59.58-5.5-59.58-5.5A139.36,139.36,0,0,0,59.94,207s-7.21,44.1-16.48,82.37c-27.22,112.36,105.3,192.9,214.87,192.9Z", transform: "translate(-4 -51.89)", fill: "#f2f2f2" }),
            React.createElement("path", { d: "M258.73,73.15c-22.07,0-59.44-5.5-59.44-5.5A139.36,139.36,0,0,0,59.94,207s-7.21,44.1-16.48,82.37c-27.22,112.36,105.3,192.9,214.87,192.9h.4Z", transform: "translate(-4 -51.89)", fill: "#fff" })),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M148.37,279.69c-5.75,1.59-13.51-3.11-15.1-8.86s1.74-13.31,7.7-13.6c7.9-.4,13.34,3.42,14.93,9.17A10.8,10.8,0,0,1,148.37,279.69Zm.1-17.76a3.34,3.34,0,1,0,3.11,3.34A3.24,3.24,0,0,0,148.47,261.93Z", transform: "translate(-4 -51.89)", fill: "#585857" }),
                React.createElement("path", { d: "M356.34,266.4c1.59-5.75,7-9.57,14.93-9.17,6,.29,9.28,7.86,7.7,13.6s-9.35,10.45-15.1,8.86A10.8,10.8,0,0,1,356.34,266.4Zm13.87-1.13a3.12,3.12,0,1,0,3.11-3.34A3.22,3.22,0,0,0,370.21,265.27Z", transform: "translate(-4 -51.89)", fill: "#585857" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M306.69,402.75c0-30.05-48-4.59-48-23.52,0,18.93-48-6.53-48,23.52s21.47,47,48,47S306.69,432.8,306.69,402.75Z", transform: "translate(-4 -51.89)", fill: "#bdbcbc" }),
                React.createElement("path", { d: "M306,397.28c-5.74-21.28-47.3-.43-47.3-18,0,17.45-40.76-2.83-47.12,17.45-.54,1.72,16,15.08,47.23,15.08S306.46,398.86,306,397.28Z", transform: "translate(-4 -51.89)", fill: "#cdcccc" }),
                React.createElement("path", { d: "M258.75,379.47c0-.08,0-.15,0-.24,0,18.93-48-6.53-48,23.52s21.47,47,48,47h0Z", transform: "translate(-4 -51.89)", fill: "#b3b3b3" }),
                React.createElement("path", { d: "M258.75,379.49c0-.09,0-.17,0-.26,0,17.45-40.76-2.83-47.12,17.45-.54,1.72,16,15.05,47.14,15.08Z", transform: "translate(-4 -51.89)", fill: "#c3c2c2" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M258.84,235.15a53.48,53.48,0,0,1,22.07,4.75c25.79,11.62,38.15,43.21,30.1,71.78l-.22.8a51.8,51.8,0,0,0-1.41,21.42h0a42.25,42.25,0,0,1-1.36,19c-6.9,21.14-25.75,36-47.55,36h-3c-21.8,0-40.65-14.84-47.55-36a42.39,42.39,0,0,1-1.35-19h0a52,52,0,0,0-1.41-21.42l-1.38-4.91c-3.24-11.5-3.52-23.9.17-35.25,7.11-21.82,24.41-37.17,48-37.17Z", transform: "translate(-4 -51.89)", fill: "#4d4d4c" }),
                React.createElement("path", { d: "M258.73,235.15H254c-23.59,0-40.89,15.35-48,37.17-3.69,11.35-3.41,23.75-.17,35.25l1.38,4.91a52,52,0,0,1,1.41,21.42,42.39,42.39,0,0,0,1.35,19c6.9,21.14,25.75,36,47.55,36h1.26Z", transform: "translate(-4 -51.89)", fill: "#585857" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$u = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { d: "M48,55.29a28.44,28.44,0,0,1-39.78-.7l-.79-.83A28.43,28.43,0,0,1,8.88,14C19.3,4.14,56.83,1.43,63.07,1.05L64,1s0,.32-.1.89C63.13,8.09,58.37,45.42,48,55.29Z", transform: "translate(0 -1)", fill: "#36b397" }),
        React.createElement("path", { d: "M63.84,1.91,2.14,60.31l-.79-.84L63.05,1.08,64,1S63.92,1.32,63.84,1.91Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M38.31,23.87c-.57,1.31-1.17,2.33-1.34,2.26a5.63,5.63,0,0,1,.74-2.52L43.18,10.9c.57-1.31,1.17-2.33,1.33-2.26s-.16,1.2-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M29.63,32.08c-.57,1.31-1.16,2.33-1.33,2.25A5.61,5.61,0,0,1,29,31.82l8.37-19.44c.56-1.31,1.17-2.33,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M21,40.29c-.56,1.31-1.17,2.33-1.33,2.26A5.51,5.51,0,0,1,20.36,40L32,13.08c.57-1.31,1.17-2.34,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M12.29,48.5c-.57,1.31-1.17,2.33-1.33,2.26s.16-1.21.73-2.52L25.33,16.57c.57-1.31,1.17-2.33,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M39.72,25.36c-1.35.5-2.39,1-2.33,1.2S38.6,26.46,40,26l13-4.77c1.34-.49,2.39-1,2.32-1.2s-1.21.1-2.55.59Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M31.05,33.57c-1.35.49-2.39,1-2.34,1.21a5.78,5.78,0,0,0,2.56-.6l19.87-7.29c1.34-.49,2.39-1,2.33-1.21a5.62,5.62,0,0,0-2.56.6Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M22.37,41.78C21,42.27,20,42.82,20,43s1.22-.1,2.56-.59L50.15,32.28c1.33-.5,2.39-1,2.33-1.21a5.67,5.67,0,0,0-2.56.59Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M13.71,50c-1.35.49-2.4,1-2.34,1.21a5.59,5.59,0,0,0,2.55-.6L46.29,38.71c1.34-.49,2.39-1,2.33-1.2a5.64,5.64,0,0,0-2.56.6Z", transform: "translate(0 -1)", fill: "#125f4f" })));
};

var Icon$x = function (props) {
    return React.createElement("img", __assign({}, props, { width: "24px", height: "24px", src: "/images/price-token.png" }));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M3.64,15.33a1.67,1.67,0,0,1-1.83-1.07c-.19-.7.21-1.62.94-1.66a1.66,1.66,0,0,1,1.81,1.12A1.31,1.31,0,0,1,3.64,15.33Zm0-2.15a.39.39,0,0,0-.38.4.4.4,0,0,0,.38.41A.4.4,0,0,0,4,13.58.39.39,0,0,0,3.66,13.18Z", fill: "#585857" }),
                React.createElement("path", { d: "M28.89,13.72a1.66,1.66,0,0,1,1.82-1.12c.72,0,1.12,1,.93,1.66a1.66,1.66,0,0,1-1.83,1.07A1.31,1.31,0,0,1,28.89,13.72Zm1.69-.14a.38.38,0,1,0,.75,0,.38.38,0,1,0-.75,0Z", fill: "#585857" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M22.86,30.27c0-3.65-5.82-.56-5.82-2.85,0,2.29-5.82-.8-5.82,2.85A5.47,5.47,0,0,0,17,36,5.47,5.47,0,0,0,22.86,30.27Z", fill: "#bdbcbc" }),
                React.createElement("path", { d: "M22.79,29.61C22.09,27,17,29.56,17,27.42c0,2.12-4.95-.35-5.72,2.12-.06.2,1.94,1.83,5.74,1.83S22.84,29.8,22.79,29.61Z", fill: "#cdcccc" }),
                React.createElement("path", { d: "M17,27.45v0c0,2.29-5.82-.8-5.82,2.85A5.47,5.47,0,0,0,17,36h0Z", fill: "#b3b3b3" }),
                React.createElement("path", { d: "M17,27.45v0c0,2.12-4.95-.35-5.72,2.12-.06.2,1.94,1.82,5.72,1.83Z", fill: "#c3c2c2" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M17.06,9.93a6.54,6.54,0,0,1,2.68.57c3.13,1.41,4.63,5.25,3.65,8.72l0,.09a6.52,6.52,0,0,0-.17,2.6h0A5.13,5.13,0,0,1,23,24.22a6.16,6.16,0,0,1-5.78,4.37h-.36a6.14,6.14,0,0,1-5.77-4.37A5.14,5.14,0,0,1,11,21.91h0a6.18,6.18,0,0,0-.17-2.6l-.17-.59a7.51,7.51,0,0,1,0-4.28,6.09,6.09,0,0,1,5.83-4.51Z", fill: "#4d4d4c" }),
                React.createElement("path", { d: "M17,9.93h-.58a6.09,6.09,0,0,0-5.83,4.51,7.51,7.51,0,0,0,0,4.28l.17.59a6.18,6.18,0,0,1,.17,2.6,5.14,5.14,0,0,0,.17,2.31,6.14,6.14,0,0,0,5.77,4.37H17Z", fill: "#585857" })))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Box = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$4;

var Flex = styled(Box)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$5;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  //border-radius: 16px;\n  border-radius: 0.5rem;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  //border-radius: 16px;\n  border-radius: 0.5rem;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$6, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$7, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  //background-color: ", ";\n  display: inline-flex;\n  border-radius: 0.5rem;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  //background-color: ", ";\n  display: inline-flex;\n  border-radius: 0.5rem;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$8;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants.TOGGLE : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", colorKey: variant === variants.TOGGLE ? "textSubtle" : "primary" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$9;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  /* border-radius: 32px; */\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  /* border-radius: 32px; */\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$a;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardHeader = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var CardFooter = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$d;

var StyledCardRibbon = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$e;

var scales$1 = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "24px";
        case scales$1.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 0.5rem;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 0.5rem;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$1.MD,
};
var templateObject_1$f;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#161f33" : "#E6FDFF");
}, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#FFFFFF" : "#161f33");
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$g, templateObject_2$3;

var bunnyFall = keyframes(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArrays(Array(count)).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$q, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$h, templateObject_2$4;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$1;
var style = (_a$1 = {},
    _a$1[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$1[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$1[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$1[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$1);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$i;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
});
var templateObject_1$j;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$k, templateObject_2$5;

var scales$2 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$2.MD : _b;
    switch (scale) {
        case scales$2.SM:
            return "32px";
        case scales$2.LG:
            return "48px";
        case scales$2.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$2.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$l;

var GridLayout = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$m;

var GridLayout$1 = styled(GridLayout)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$n;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "24px";
        case scales$3.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "12px";
        case scales$3.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$3.MD,
    m: 0,
};
var templateObject_1$o;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 0.5rem;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 0.5rem;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$p;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$q;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$v, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$r, templateObject_2$6;

var ProgressBunnyWrapper = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$s;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$B, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var Icon$J = function (props) {
    return React.createElement("img", { src: "/images/pageloader.png" });
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M103,31.17V31c0-11.63-8.41-22.27-21-22.27-10,0-15.87,7.22-17.86,14h0c-2-6.76-7.81-14-17.86-14-12.64,0-21,10.64-21,22.27v.18c-.07,2.53,0,28.27,38.9,49.26h0C103,59.44,103.06,33.7,103,31.17Z", transform: "translate(-25.17 -8.72)", fill: "#d56799" })));
};

var float = keyframes(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon$K)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 40px;\n  animation: ", " 3s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 40px;\n  animation: ", " 3s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var FloatingPanIcon = styled(Icon$J)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 40px;\n"], ["\n  position: absolute;\n  top: 40px;\n"])));
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React.createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$t, templateObject_2$7, templateObject_3$2, templateObject_4$1;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$u, templateObject_2$8, templateObject_3$3, templateObject_4$2, templateObject_5;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale$2("handleHeight"), getScale$2("handleLeft"), getScale$2("handleTop"), getScale$2("handleWidth"));
var Input$1 = styled.input(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale$2("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale$2("toggleHeight"), getScale$2("toggleWidth"));
var templateObject_1$v, templateObject_2$9, templateObject_3$4;

var scales$4 = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input$1, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales$4.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "0.5rem",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$w, templateObject_2$a, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 20, 40, 0.8);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 20, 40, 0.8);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$x;

var ModalWrapper = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$y;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

styled.text(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n"], ["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n"])));
styled.tspan(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n  letter-spacing: 0em;\n"], ["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n  letter-spacing: 0em;\n"])));
var IconContainer = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
// const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
//   const textColor = isDark ? "#FFFFFF" : "#432918";
//   return <img {...props} width="220px" height="50px" src="/images/logo.png" />;
// };
var Logo = function (_a) {
    _a.isDark; var isPushed = _a.isPushed, props = __rest(_a, ["isDark", "isPushed"]);
    return (React.createElement(IconContainer, null,
        React.createElement("img", __assign({}, props, { src: "/images/spiritswap_logo.png", alt: "", width: "80", height: "116" })),
        isPushed ? (React.createElement("span", { className: "desktop-icon", style: { color: "#52D784", marginLeft: "20px", fontSize: "20px" } },
            "Spirit",
            React.createElement("span", { style: { color: "#60D5DC" } }, "Swap"))) : (React.createElement(React.Fragment, null))));
};
var templateObject_1$z, templateObject_2$b, templateObject_3$6;

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "24px", height: "24px", viewBox: "0 0 576 617", "enable-background": "new 0 0 576 617", style: { marginRight: "8px" } },
        React.createElement("image", { id: "image0", width: "576", height: "617", x: "0", y: "0", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAJpCAYAAABFOY3IAAABfWlDQ1BpY2MAACiRfZE9SMNAGIbf\nptaKVhzsIOKQoTpZEBVx1CoUoUKoFVp1MLn0R2jSkKS4OAquBQd/FqsOLs66OrgKguAPiJubk6KL\nlPhdUmgR48HdPbz3vS933wFCvcw0q2MM0HTbTCcTYja3IoZf0QkBIVp7ZGYZs5KUgu/4ukeA73dx\nnuVf9+foVfMWAwIi8QwzTJt4nXhq0zY47xNHWUlWic+JR026IPEj1xWP3zgXXRZ4ZtTMpOeIo8Ri\nsY2VNmYlUyOeJI6pmk75QtZjlfMWZ61cZc178hdG8vryEtdpDiGJBSxCgggFVWygDBtx2nVSLKTp\nPOHjH3T9ErkUcm2AkWMeFWiQXT/4H/zurVWYGPeSIgkg9OI4H8NAeBdo1Bzn+9hxGidA8Bm40lv+\nSh2Y/iS91tJiR0DfNnBx3dKUPeByBxh4MmRTdqUgTaFQAN7P6JtyQP8t0L3q9a15jtMHIEO9St0A\nB4fASJGy13ze3dXet39rmv37AbeZclyUAVzCAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA\n6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAH\ndElNRQflBgIFCAv21IzRAAAVfHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAGiBrZpnkhs5toX/\nYxWzBLgLsxzYiLeDt/z5TpKs6ZLU3eqYqQpVUjSZwDXH3KQ7//9/1/2LH8u1uGy1lV6K5yf33OPg\nQfOvn/H8DT4/f58fHsb3s9+ed6W/X4g8lTim1wutvI7h8/z7A59jGDyyP5yorfcL8/sLPb+Osf1w\notdlfdKK9Hi/T9TfJ0rx9UJ4n2C8tuVLb/WPW5jndXx//hUG/jn9yZ+YfOLw4/8r0dvGdVKMJ4Xk\n+RtTfi0g6V9wafCgPH8jb9STetyev/19MgLyqzh9/Twr+iEr53y9+dvzX49+SEoqr+cdT3wPZvk6\n/vL5YD88/z6he0L8hyun9XXlb8/H+EnD9yDr3727uXvPa3cjF0Ja3pv6bOV5xBsnIU/Pxwq/lX/G\n4/r8dn6bo3oX19p++cnvCj1E0nJDDjuMcMN5jisslpjjiZVjjItE6bmWauxxJe9IZtZvuLGmnjb5\nimmR3sSz8Wst4blufy63QuPCO/DOGDhZ4BPR6c//4vdPT3SvSj4E315xoixYV1RTsAxlTn95FykI\n91NH9gT48/vjj/KayKA9YW5scPj5OsW08K4t1VF6Ep14o3F8JTnU/T4BIeLaxmJCIgO+hGShBF9j\nrCEQx0Z+BidqNE2cpCCYxc0qY06pkJwWdW0+U8Pz3mjx9TSYRSKMxqqkpqdBrjLARv3U3KihYcmy\nmRWr1qzbKKnkYqWUWgR+o6aaq9VSa22119FSy81aabU113obPfYEOFovvfbWex+Diw7OPPj04A1j\nzDjTzNNmmXW22edYlM/Ky1ZZdTW3+ho77rTBiV123W33PU44lNLJx0459bTTz7iU2k03X7vl1ttu\nv+Mra8E9bRd++v39rIVP1uKTKb2xfmWNj9b6OUUQnJhyRsZiDmS8KgMUdFTOfAs5R6fUKWe+R7rC\nIqs0JWcHZYwM5hOi3fCVu/9k7lveXM7/Vd7iJ3NOqftfZM4pdX+SuZ/z9ousbbHN8sk9GVIbKqg+\n0X684bQR2xCp/emRy6W64h2njLO8OS7Va2Cr4Ms42+4Vd7XjiYSNekGvTZAgknvu2GfPUddofrV6\nh7+nGtthiy7NmWLfdVS/dz9lIwam7cEZ9g4nrUA0+HRvt1IkI85c4m2WTqh5ldsAzXxvdYOauIs4\n1jYGV75h5l4rHMD+uGa9Jxg54s2nCUbB+JzZfcqrczbjpFTHdGWX2ogZ4Z3acK+70CCc3c6ou3cA\nTYusm7SEu/3ItjL1Q8X2a+DuvCR9uTjPbQkIH6GPRRm1rYQAGTmma0ELKhNg39eoh7ZGvqMfm5w9\nUxK1eZqlD5d7Sen0GXMPrIwy8tSz3Z16uK0FW2cCP+VY2HlMf/wQ/AebVHcva53WFkrAscW9yg7Z\nQl7DjyfD/p8fXeyrtY1yGJEL1JLEnqvHMnclKBTWshgtb1rjtm0nJ5CMMkJhjLRtbmpypuGIRlJB\n9242oMJM/abW+bx2b/WGCGVCw2WfRebqiQavVdIT9pm7zJXuwyKn5gjdGY3b6tm9ZtqZnk/09Vlz\n85k0joCnkD5aHA2G5IGd4Ssq0E7deYHZXCO3Gwe9NaqxOoict7YBGeQ42mGvS7SQDVyDa55w+h+P\nzoM+XO8EekRRaMOu9RjqonHUDWfeHOMsnLr0mc9p7wPyAJi6i3CSY0cbUKQNaXcQBv3G3kg/3QuI\nsSfgpx3plAA8bUCugz2eTbcyz/Tj2F1mxxe3E4ByPS0XPShDHZ88Ww7rEM8R9gLjdlwg3siLtk2N\n+ObRKvXFZkeZ81Dw2aWVJjGmNa7vVuikGmi9RvWXyaZnf5IaDtoJDTVOe2FJSd9ryf2quJDbk6hC\nBZ3mZbU7WiV2K+6rxM/DbiddibIpG7SHQBzdqX68InslGkxNiLELE6RB0i09j5FcrZoaeMezTwS4\naEtk/qlhcvntVqmr+0rrU6PsiZpkXXONvvbagij1GKTRI9DwSrZY68cqcH9SFp9jAHMiTHqt3Ua4\nVoUBdr50PldnhwCE3bSra+0ujlx4bBIzw5y2WlgLrRhWbvOwviPCQE8CiLQKsEH20h68z0o19ua7\nU44SnBDIB8XcQdh+VrUCbfrT00wbeNKL/dxIUSBZV4d0zkilnQqnwVrhuEX/BIMBzhqVrvkL4niO\ntKqfGVrbQHsHONPYE7J0Nj1bWS0bOb1b22hclMRmBG0riz720r+DeggXcEhskH0FmBbG5TyAN0zb\njZU2oTndM1euEEcFXs+g8muhmWvK1MwMRDZFzrMA4rLedXkojwUEd0fTh1lB5ESSaa8xcYC2Ei0G\n9ASdlPPth2HZCl5rYlzTGkvxuNASQAJPulbGHvyB1RfsWUnxIdjImtmjV5VmPkvjlyCJUesATSFQ\nJIqFSu4AAJpzuyKaQz1TkEVMRzixAYb82QUQI3yhZ4BkUA6b2r02TWU+VFn+bpY2ES/dxbLuiTBA\nm3jBW4OKyddR2trDwFQEg/WL4hChQJRpISL6iYQgRUwQtFQBTwedeGhK/UZvsGZ2xJpDRRNhmSDk\ns9YrsD0+xYGcoTMvMV60cS9C+XZdKucYiUiyav1WIItMpUCUiiRYRNks8LbvXRB066xgEErMyAyj\nmQGghm6ozvxkeWCDIkP3o6EAbz60MicrBg7S1Aghz7oypNUugHGSQU2btgColKjj0isMyiT8UYPf\ngDAtZaBr3TBPYEvzQFUQOJWvKtmlvBtlg765oLS9owM5wVXFA8/gC7VDYeAcRqWdZgFFKkgdkbTF\nLiow3DLWQYoDgOCw4jCwosjGZGtNNs6pBB4Vb0jzFFB9XMqCBbD8SzYRsaQs0lI4edCEqHvpeJWx\ni+dsMrFRRVRmNboSaDcVD851nkIkbu7Uad7EgHLtQGOiwDLydaPQRmdXBVmDnY07z6EaAMAE1rWP\ntNpF6bwXaX2fB+lMQ4/3kdQFtD/ohB91GFPIng+jelKDWNGIwLOaAiBEp0CS5dluBJXrLUgHCaeF\nLIKMLB5rs+TlKKJJnmkvttE6nVBQ8pElNGKCFc6oItYJTUp51vMgeqX6zqnrTqQ74tG6wwa1t5Yl\nowm8QM4DJRQhAgyQAmYXBEqwiQesp1JvC1akObAvEDU2sk7HxRALfJKKRCjTFDQ5j6DPGtKaLAIn\nAwohojLtGNgf1YqAAmHpGPZ60dvNvQGUTl5lsuPGEongpLIEm9VPDNAO3T/UezriN1sfUor+GKFC\nouAUqlsgPr19Kf/MZS7oirACE7d4HFgE82nKU5Db4cEGCLNCUHq0+8POaAWaFlieEVBmH+Ng1zKd\nSUYLcHZKuSFBzuCleFZ9j2Q9q5RFDsguUVKLZn8dsp5qg4QAKHQqUEV+Dl1MAXAm4ovcQXYQnh0W\n1p1HL5UwJ4AHVJisEpgNQ5U0W8PjBSphejm0MzxegrSECaihvE0tcvGOrYKEAjlfO6YyggaYibAc\nqLik2MgxJUBS55zg4DE6GZo8YSJ1It0JHWERkK5rJgWPGqZ+EQhq3Z4cdcuaATCu04n+KTqhScsC\nmhT8UdvWsTbp4XUR10b0toNTpfNxtZD+M4gi+Qi4LiuAb1XhcyFxDoo5R/Ce1oK15wtvhfn1Zz6e\nDqg6fu3eqiQ5LVxy6A0xTb0jIEDcK4CEuW5BkCQ8tuFsrop+48ThPUnA4BrEOyBmYC5RkKTJXhro\nWBe71Kg1E+U8yza8ADkKrNqgmI6QNJ+AzLmercWBdmmaC+ZADWvrNLW2hjzC8Wap+JMf3PIK/W2+\n1K2PGSfPqxnuaHpqbGJIAJQS4qPdprTbutpoy/slRg+6A04nX6U1LTrCuRnKDSFPTUZfJibhWyl0\ncBkcQWnQAn1F3+kajZeXX+puFRBXJ4AHAFYLwW7sAqhymM3isWgsAGMpJ7Ph8tiF71O2DKl3qVdr\ngJtPdDImuSQ8B29Dm0zNpXLfTtsHX4oVS92gjU8DdLDliUKxcDRGIBwqC2xPCELwhiJINFrEtO7u\nYHhE5ZJi932yP0MKNmkAZAziZAjZL0ANDwYZ4ExuoYEhGfxMRSlfuBENea6uRaqGx5FpDFL8ofyA\nEogWh2HAK7kpIBRghsrSTAb50GTuMrpJ2sC9MgocNs/SQDZ0NaxB4QPMgU47ja4vfolIEcD0S86n\nYFoRF2wZUJKkz46dwtBsATM/YNxEcUYwt4C9mtIEmSNkIeGVv0mfye8SLdGssaO2CjECuge9HukF\nJG2HGHnN0vbtcXtwF9br4nDh662xijxs2VsWGJnAOkI/CEO3JLmrvGtAguKe0KkNUf6kDPbP8mSi\n54Y2RMegejADpVG8D1FqJqkH7qHMBxhgv5OpG4BpPBMbaitjfyddDW6vBof1e9E+dwNBWAsYQvUr\nvZ9dHendpCWc1D5WpGXoAUbGLJIiwTaZfwq2wt+1UHIgP/qmHGQ2AXWzEuEKCePpJoZ+aCxle7Oz\nlHq2LUKseJG7UC/oeB9RwRutfTUHZBcoGTw64H/8livwMeAilqAhQEDg0kV9UW4pGX4IFh20TQYq\ne0XSkQXg/h0oFubyjyJD1Vifk1PToRcFibhwafCWap0XshgSfyBEfS0TAeum1klfQJJoMTLMJ6NG\nXxFAoFEQGlKhY8BfAy0KBUmt0OAaRVAU6G5C2GlaGLb6DQahoS69YKCBvWeiz7CByHXAbSFsoVLT\ncBDLd96CCX7WA6fdIE86lKr0E9Z94SFaAZQNkmsLXrvCs6uBCOIGxgeCBSMHPUz8lC6Hk3jjRsYU\nfxntCw1Sgg8Qx701BKgP88ncxfpz5bl36bEi7DgJTwGcFT2PF/vozsb6Ozf4dP/fvOHbkatS0A+F\nLokSMghjgZYnAyOzyetAWmWT09ox/b3gVZEORIq2l0cJ9IpmCJ7FIgwO9UvbvasIMFOw3xL1v+w3\np4b7k377R0f3F7MDnP7SgBs7PASiUHiL0uip5Dyr1H+rh9fRGc2hVZD0WzMjRDPwA4+SY5xBvLoR\nk5CNaNMNrdFaECyuMNLwYXiZalzVi08dashv48I4F816EezGS/QuaZlvadYkzb6Exy8j5iSf0D+T\nFqX5oEsukqHndFPUCBf1JB4QytT1eF6/6RZp8znShlte5eZ+s97+9ui+PUEN+YWuaZ9ImRomEQoi\ntuLZcRo1JqWMIMRAzJIeC4yImJCZZsPiFnhKlpM2TQPAXw39sLcGDdEGSYLA2BrWn+xopgwDI5MP\n/vVUlzdUCs0VuZAvEYTjwH5j/kYRE2FVIcpBcEFiLqd7uBWF0+n7oyVcE/j7PoBpPAElnDpGzls0\nSE4FDnGPjkegorQapHNZ0U6OuMhKLu6CfDMKxpExjzENchKBZCGUg5aEeZBxzXcWLrhl+yWxZgav\nw6lN81x6IaBKhJPNaXBxnvA+c9fUzz/sjffR/eYbQySpwK3XyHgdRPQlkxErPPEM02+Mn8kA9SYl\nh3Gzwr7rRA1pPLo37h+ZEjvOgxdx85h1Gh81MMt8LKZuC7XlYqZkFEKsE1rlpjHoLYwCNSOjN9Fz\nB7WZcCodB1gTib1IXtxmRI9yzTxgRHfA6bcc6PCRpH7qGiSZTD01dBAUHfeBkOwZEVixgVNj44GH\nQxoimK5u+YCcyBBewT2vw85wbdgZiJyiRhLCeVTfeb4jgRRHCrRIrYJ3RtX12yXpIBrHniEfuvDl\n8P9q9v0PskazLFDC9jM5g8liBVnwicXEjryDsC0qNkcEXFvU0aPWQQhHfFFcGGNUh0gp0QBsEPM3\nfWtnsxHsFWoFs79hb4CjI8UAo33kRFHPdE8dLj2lj9rcAb2CPKbFNfbEgAJdU983iTD5q7wnl62H\n8n/sBFrClvCQDC9HgQQ8CkZKQ9mp4Z4GqlAPmL3pOZwqRZP4uGahKKF2EJVkqpUzPZAXIxlsLsDu\nYaBOpEAQVlH3NXIuKbRB/O0zULf/RLLqFpsYGDE9w0Cd4ArcWtAXkr/NFl53dYs0QdboaOjrAXDm\nbCixF2rFLS8SYwH++wkIQfYjceMGlYbobhj/kCumPUpxQK4NfaYxUJ/PBKnJPE40OYhoSwKa/wIx\nd0hqjevwQaXrNpru/NAQL0EC5v5D4HZfTyBWkPwknxShaORDgVqwMQ594wLl6CnkTY8S04sBpXtv\nw51gKcmYA4oDKrbRFyCRBrjTDrmzekB3VIO+kmT1raEwCevXt8b+cDsjjYe1QsW9ZQ1vRgVi6Pwi\nFM0eCUcT4qvQ2td0fzKiVVk6FqxEV3X7UiS00giycVJ1QfcBSCCNjrjZWLvcfd/4RwTRyRppY+O5\nLHgrJdhbcwP0Qu1U3d1mMUVSETTooAf9bapJ0qu86gtCcK++A8QrMs9pza/9ud+/R9ilhlPG0Wlc\nq7uC+UhtJk39qlsZ2Q0W4uMTevQZn6LmOs2vkRUVfj7IizKudDNmVzeLk7C3JN2Va20kJ7sILoEb\nJ0PTGHHaQk5GwzC6VhmTpeulaEBFbB7AlQuFxPRVHUqX4DkQeltS+b12AZ3+7q3QpHFgRqOYRvVA\nCN51QM+aOMHL8Cc2fKPD66u/NG2bRUMeXCdgFDOdRyVO8kTfoGlN3E/b4VV1BxjrBUHL/tN2yKdO\nfh7rPiqhOLr78MySL9s/NRSSyGXJeEKUdlc0tKMktpYIP5i+KERGvG5LJJyaJX0PILyYHxdB0B4e\nSNFLP3zG+W6BaOYhmj0+8u492/+unMY5PcSUXkidS55BY5WnoIx2kzxWRYLzbF0DvjgLMSixytk8\nikKGeGYsPgDTrT+wkc9Ys1Ov/jakbdzOUEYXA1LRrFDhxqyxzzjx8khHagsX2I22vsRSyg2bxlUB\n97L5f2ZDyed2Kcitb/8Q74S0QX4JzEZoBmjj6Za+cqHwaXqDKnyN8ghr1/tyqQtqAPMbTDvTgxBy\ncNI6Gj9af89sevtdpep+foFi3rR/Bdrofo+IDxXwBxXodA2D8HwX5NZyCbtWDmO40rCZ5BJ9QaWc\n1Umv5naBZwc1WELE5Fx9K+K8eqbdTTvOCVIeVR/Co8P9uKKTECd44ClXgYxvmqBCyXGFsylfWNpv\nzFlpKOALR4d1Q0PUaMyc8Yg9tOC8aA0Vs8BghOpzg+kQWjFm3AsQL1CBxiSz6QZahRIF52Apy6KN\nqRmAfjtkqUQaTuW0dZDBPlauAdQ9900fH8vaZFXxtT7zxL5TPA9NwIDP6xaSa5G2qF0aSndLnzmo\n7gr3W6Nu1ViS5VgU0TPVwErqrtqG/RdAgXVHEFDwVTdYyAk8vDat0aRWNseFjlnCIEAtGVWI9CVA\nOPSyMQOL4gO1UQg1sldkhdyRWUDzLw0WEA+srCdNw59y2PoGwu/gkxNAaZLh/g0A/VCu9GH0swAA\nVjtJREFUeNrt3Xd4lfXdx/HfGdk7ZJIEwl5hhL1EEBQQcCJ7iTIERalba2tb694KMmUv6wYRFGUj\ne88kjAxWyN7JWc8f6lOrCAGS873vc96v6/Kq9Xqenveh1ny4p1IAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAKDaGKQDAFdn9PUw+PeID1BK+SqlgpVSZqVUmFLKpJQKUkp5hE5oHTq8YcPp0q1KKTX3\nsy1jSrZllCmlypVS+UqpCqVUgVLKopTKseWXlRVvSS+Q7gSAG8EAAq6TR1ygt8Fs9FZKeSulPI0B\nXj4RT3eKVUrFKKUilVK1lFKRBi9z2IiEJj2ke6vSoj2H1iulziqlcpRSGUqp8xVn8s/nzNmXpn4e\nTr/+UWpJL6hwWO0O6WYA+C0GEFAJBi+TMfzxTk3Uz6MmVilVb9yoHk9Ld+nB3C+2vmEvrEhXSp1S\nSqXlf3rsVHlSdrF0FwD3xgACfuHfI97fGOgVrZSK9qwdVGvCpN6LpJvcwbw1O8YXrU89pZS6pJRK\nL/w2Jc9RYeOIEYBqxQCC2/GIC/Q2epmDlFIBNSa1qWeuGdBCKdVmZKtmg6XboNTiw8e+dVjte5VS\nJzJf2rzbUWYrUEoV2QrLC60Xi+3SfQBcAwMIbiHk/pZhnrGBrZVSbYcM6TLJ3+QRI92Ea7Ms/dRb\nxZvS9iulDme+vPWAw8Z1RQCuHwMILsXo72kI6F03VCnV2Bzm12Di1NvnSTehen3410/vUA7HydK9\nF05WnM4rl+4BoA8MIOiaMcDT7BETWCPgtrpRft1qdTJ4mboOb9BwuHQXnG/5+dRt1uyS3ZaMgk3Z\nM/YeVkpdqDidW+got3HaDMAfMICgSyHDm0d5Ngzt4VkrsMeoTq3GSfdAm+at3fmaLa9sa8n2jB8K\nvz1ZIt0DQDsYQNCFwAENoswRfgkPPTnge+kW6Nu0v33WzZpZfLhoQ2qudAsAOQwgaJI5zNfLHOUX\nEzw0oY130/DbhzdpNEa6Ca5lybETc4o3p31R+N3Jow6r40L58awy6SYAzsMAgnYYlCF8ascwUw2f\nPl5NwvqNaNqY29LhNHM/2zKy/ET2mtxFB7OVQ3GHGeDiGEAQF9i/Qb3QB1rdPLxJ47nSLYBSSi3Y\nvO+hovVn1hdvSD1pOVdole4BUPUYQHA6c5ivySMmICbo3iatvBOjRgxv0OA+6SbgcpafP/Otrciy\nNPOVLdtsuWXnyo9xmgxwFQwgOIfRYPCsFWSuMbFNY8/6IeNGJDR5RDoJuFYff7mt/8V/b17nKLXy\ngldA5xhAqFamUB9TYP8G9XzaRA+4v3f7N6V7gKqQb6vYv+S1bx+uOJ23q3hzWoV0D4BrxwBClTP6\nmA1eTcODfdtEtw0a0mz40Jrxo6WbgOqycOfBsVnv7dxgyy5NqziTZ5PuAVA5DCBUGYOH0ejTtmZI\n6NhW94y+KXGWdA/gTMvPn3mzYHXKkqwPdh1xlFkt0j0ArowBhBvmWS/E5N+tdoJ/77rDRrZq9pR0\nDyDtozdXDbReKv6h4KukPOkWAJfHAMJ182oSFhA8qGnrxP7NnmkTENZHugfQmmVpp56+8MKGz8sO\nZ56xF1u4nR7QEAYQro3RYDD6enhG/rVrr/sGtJsTYPKMkk4CtG7hTwfeypl/4KPSPedT7UUVDCFA\nAxhAqDTPOsGBQQOb3DX+gV4LpFsAvZq9aH2X/P8c3VGelMMF04AgBhCuyrtpWETQfU17972n7asx\nXn41pXsAvTtbUXxizcp9k/OWHdlRdjizSLoHcEcMIPwpU5C3T/gznQf2vb3VP2t6+cVL9wCupthu\nyfxkzZ5BF/+xebstv6xcugdwJwwg/IFn7SCfoPua3jb+wV5fSrcA7mL2wvW35X9ydEN5Sg630ANO\nwADC//NuGu4VNLBJ11FDun7laTT5SfcA7ibXWn728692DcpbfmRP2aFMjggB1YgBBGX0MZsj/tat\naeKtjV5o7R82ULoHcHeXLKUHlkz+ZETp7vPH7SXcPg9UB5N0AGQF9KkXHfFc16fu79VuabSnb1Pp\nHgBK+Zk8ojoOaDXpTPsQT0eFLbk8KTtfuglwNRwBclMetYJCYqb1HTy8QYOPpFsAXNmy1FNPZr66\ndWHR+jOZ0i2Aq2AAuRlTDR/PkGEJrQL6N3hpWO16t0r3AKi82QvX98uZtXeDNaukRLoF0DsGkBvx\naR0VPXXpuAyDUkbpFgDXb+aM75rnzNp7xF5icUi3AHrFNUBuwLdTbEDkCzfd+9Dj/bcZGL2A7rVt\nW2/S6VaBypZdesqSls/1QcB14IehCzMFexv9e8Y3fPjf9x2TbgFQPRZu29//wgsbfrCcLSyTbgH0\nhCNALsoj2t8nbsEdox8YeNNa6RYA1adlXNSwtB4REQYv84nSvRdypHsAveAIkAuK/Hu3tg8OvXmX\ndAcA55r72ZaJ+f85uqh0/0UukgauggHkQnzaRAeEPdr+nlHtW8yXbgEgI8tSdmLxw58MKt174Yi9\nsJw3zgN/ggHkInxaRtaesPT+rX4mjxjpFgDyFu0+9FD6/V/PdljsjCDgMhhAOmcK9PKKfrPX7aO7\ntf5cugWA9kx/5atWuQsOHpDuALSGAaRjQfc2CQ8Z2fzx4Y0bPS3dAkC7Fu05PPTc499/ab1QxJ1i\nwC+4C0ynAnrXbfLIG0POtAgL6yrdAkDbWtaMGJjWPcKveP2ZnfbCCkYQoDgCpDsecYGesTP6DRpW\nr/4i6RYA+jP38623Xnjux3XSHYA0jgDpiFeD0OCY6X3/Naxu/delWwDoU+smtUaldQvPsWQUHrdk\nFJRL9wBSOAKkE2FT2tefMKl3snQHANdQbLOcnTlyQevSved5wzzcEgNIByJfuOnOB4d3/1K6A4Dr\nWbjzYNdzU9Zut+WVcbs83AqnwDTMJzHKN2Zan1FjerZbKt0CwDW1jIkce7KhT3rx5vTjjjKrRboH\ncBYGkEZ5Nwv3if3o9ueH1a73pnQLANfWqnb0HacTg4Ic5bZ15ck5dukewBk4BaZB3i0iaz3+yfhU\n6Q4A7mfaP79onrf08GHpDqC6cQRIQ0yBXoaof/doffcTt34bYPYMlu4B4H7a39xk0uH83M22SyWp\n9qIKh3QPUF04AqQhMdNv7zrmljabpTsAYOnplLvSR3+90ppZzCkxuCSOAGmA0dfDHDuz352ju7Ve\nK90CAEop1TwkdEj6bVEVxZvS9tnyyiqke4CqxgASZgry8op6uceoMd3bLJFuAYDfah4Y0jOte0Rg\n0brTO+2FFaXSPUBVYgBJMhmMNd+69an7e7V7TzoFAC6neWBI+9RuYbEmf8+tpXvOF0v3AFWFa4CE\nGH3MnjU/7Pvi6C6tnpVuAYDKmPufzU0vvLDhmHQHUBU4AiQgaGCTGjXfuvX1EQlNpkq3AEBltW5W\ne/KJQNvKkp3nLigbN4hB3zgC5GQBfev5THlnWIl0BwBcr1mzvu+e9d6OTQ6bgxUE3eIIkBMF9m/g\nP+XtoZxDB6BrbdrUG3MiTO0r3pB6QroFuF4MICcJGtikxiOvDsqT7gCAqtA6ofaQE0H2QyU7ziYr\nm4NnBUF3GEBOEHB7fd9HXhucL90BAFWpTcs6g4+ZylJKd507ouycDoO+MICqWWC/Bn6c9gLgqtq0\nqXf3iVB1sXhD6i7pFuBaMICqUdDAJjUeeY3TXgBcW+uE2v2SQhwXSrafPcDpMOgFA6ia+Pes4zvl\nrSGc9gLgFlq3iO9/zFSWUrqb02HQBwZQNTB4GM2Rz3b9V8taUV2kWwDAWdq0qXf3iRDH+eKNqbul\nW4CrYQBVMVOQl0/0G7c+Nfrm1n+VbgEAZ2vdPL5/Uqi6WLItfb+yczoM2sUAqkJGH7M5+pWeo8f0\naveOdAsASGndPL7/MY/yw6W7zx/ndBi0igFURQxmoyF2xu2DR3dvM1+6BQCktWlT774TwbbdxRvT\nkqRbgMthAFUBU5CXIfqtW3uM7tb6a+kWANCK1s3jhyWFqZ0lW9JPKjsHgqAtDKAqEP1qz7b339Z+\ni3QHAGhN64T44cc8yj8v3XM+kxeoQkuM0gF659Mysu6w3m03S3cAgFaNH3frgfCnOjeR7gB+iyNA\nN8C7eUTo459MOGs2GM3SLQCgZW1axE8+lJu7qOxQZq50C6AUR4Cum0/rqIDYGbe/IN0BAHoROqbF\nu+Yo/xDpDkApjgBdt9iZ/R4ZGlf3b9IdAKAXzYNCGqV1jwgq3pC60V5QXiHdA/fGALoOkX/vNmJM\n9zYzpDsAQG+aB4e2Tbsl0lG8KW2rLa/MJt0D98UAukZhU9o3HD+254/SHQCgV80DQ7qldY9Iy1t2\nZB+3x0MK1wBdA+9m4ZETJvU+Id0BAHo3NLbOrIDb63eW7oD7YgBVkketoIDot259TboDAFzFI68N\n2hIyskVb6Q64JwZQJZjDfA1xc/pPGBZfb7R0CwC4kknP37kreFhCjHQH3A8DqBJqPNKuw9Badd+Q\n7gAAVzT5b3dnGMxGfh7BqbgI+iqCBzVtMPGRvgekOwDAlZ1uG1xcvCF1t6PMyp1hcAoG0BX43Vw7\ncMrbQ89JdwCAq2sZE3nryUa++4s3pR13lFulc+AGOOR4BaGjWzwg3QAA7mL0TYmfBfSr30i6A+7B\nIB2gVRHPd+04bmSPn6Q7AMDdvD18jn/pnvPF0h1wbRwBugzfdjVj+w1qv0y6AwDc0cRFY/Z71g3x\nlu6Aa2MA/Y53y0hTj4/ueqmml1+8dAsAuCNfo7l+8OCm/aQ74NoYQL8TfF+TQa38a/C8HwAQNG70\nLZ9Gv96rtXQHXBcD6DdCx7aKfmDgTUulOwAASo29o9Mej5oBftIdcE0MoF+Yw329gwY2eVa6AwDw\nX7HzBjxkjvI3S3fA9fAcoF/Ezu43fESzJq9IdwAA/qt5cOhtB89nbi87cDFFugWuhQGklAoentDg\nwSE3/yDdAQD4o3Y3NR5+pDh/cen+i7nSLXAdbv8cIIPJaHjuyPN26Q4AwJW9nPBvo8Nqd0h3wDW4\n9TVAxgBPQ+z8AfdIdwAAri5u0Z2DTMHebv8bd1QNtx5APq2iYke1a/GpdAcA4OpGJiYs92kb3VC6\nA67BbQeQwWQ01pjQepJ0BwCg8h58b/A6nzbRntId0D+3HUCRL3brObJt82ekOwAAledn8ogNHtxs\nuHQH9M8t7wLziAv0e+TVQcekOwAA1y6xUdydR63F80p3n8+XboF+ud0RIFOItzF2Tv+h0h0AgOsX\ndG/jpz1qBfHCVFw3tzsCFHRno1oP3NXlR+kOAMD1ax4U0u5UU789+Z8fPy7dAn1yqyNApho+XsFD\nmj4p3QEAuHEj2yR84X9LfJx0B/TJrQaQX9daHYY3aTxZugMAUDVCH0ycYvQx82wgXDO3OQXm276m\n96PTR/IuGQBwIS2jIzof86pYXbI1/ax0C/TFLY4AGTxNhuChCYOkOwAAVW/8/T13+HevHSrdAX1x\niwHkERdY4/6+HRZIdwAAqkfohDZ3GLxMnApDpbnFAIp4uvMY6QYAQPUZmdhsnn+P+DrSHdAPlx9A\noQ+0ShjdrfUb0h0AgOoV8XTnKdIN0A+Xvgja6O9pGDF76Gd+Jo9a0i0AgOqVEBDc8XB+7rdlBzO5\nIBpX5dJHgELHtGwU7unTVboDAOAck56/a4dHzQA/6Q5on8sOIFOIj+eEh/vwvi8AcDMRz3bpI90A\n7XPZARR6f8sG0g0AAOcb2avtMp/WUeHSHdA2lxxAnnWCvQJur/+YdAcAwPlMBoNH8NCEgdId0DaX\nfGZCjUltb5s4pe9a6Q53t/xC6mdlhzKPKqX2K6WSsqbtPmc9X2hRSlmVUg6llO2Xf/09g1LK/Mu/\nmpRSpvAnO8WbgrwbKaUSx9za7mnp7wb3smDj3pmOCtsepVRy6aHME/krjhSrn//+tf/yh+1P/l9N\n6uffaJqUUibfDjGBgQMaNlJKJXjEByUOb9BwlPR3c2Uz3l0dmz1jDxdE47JcbgCZgrzMdb4dtnxw\naOy90i3uZtnZMyuVUitzZu05VJFWkGHNLL5YcTLXUtWf49M22tvgYYpQSsVGPNuloynIq+eQyNq3\nS39/uIaN+RcPnSsqXVN+PGt97uJDp5VS50p3nyt0WOyOG/4P/w1ztL/RMz44RClV069LXMOAvvVv\nGRoTP0n6+7uS5RdT/3rmrk9eteWW2W78Pw2uxuUGUI2H2tw88dHbN0h3uJMZ73870JpZvD3/02Mi\nv9MyBngaggc3i/ZqEnbL2H4dF0n/ekCfFu48+HjxprRNRd+fOlSRml8u0eB/S7yXZ92Qdg890X+j\nctFLFJxt+itf1cldcPCMdAe0x6UGkCnIy+uZHU+VSXe4g/nrdo3Mnrl3bcWp3Fx7scUq3fMro5+H\nOaBP/VC/rnEDB/du87Kv0Rwk3QTtWnrm5NsFK5MW5s4/cMJhsZc7KmxVepTnehl9PYxGPw/viOe6\nJpoj/EaPbJMwTrpJr5YkJb2bMW7VU9aLxVV+NBr65lIDKPzxjs3Gj7v1sHSHq1qWcfrznLn7Z1Sc\nzNldsvNcrnTP1Xg1CQsPHty0Y5PbmzzWJTDiFukeaINDKceC9Xsez523f5XlfNFJS3qBXbrpSkxB\nXl4+baIbRDzTZeDQWnX/Lt2jR9P+/lnHvBVHd0h3QFtcZgB51gn2iJ3T//2hMXUmSre4oumvfd0l\nb+mRHY5yq+7OpXvWC/EIurdJt/Fje66TboGsj1dtfzh/xZHlJbvOZUu3XI/gwU3jQu5vNWxYfL1X\npVv0ZEV2+tyULvMflO6AtrjMAKoxuW2niY/03Sbd4WpmvP9tx5y5+/Y4ym2aOc11vQxeZnPUP2/u\nPfyODiu8DCaeFOtGlqWempr+wMr5lvOF+crm0MRprutl8DAZ/G+rEx0yrPmjI9skPCXdoxcz3lvd\nPvujPbukO6AdLvEuMFOojyHq5Vv+kuAb1FG6xVUsPnBk/Lq/fD2q4Oukk8rm0PQpgkqz2e1F604n\nHzySNudUU79TzUNC+0snoXotO3t6/paZW0ZfenvHSktGQanS9fT5hd2hKpJzCot+PLMpOc7j2wZ1\nIgZ4Ghn0V5NSz0sVfH58raPcpruj2KgeLnEEKHRcYoOHHu+fJN3hKj54+pM6BV+dOCPdUd1CRjRv\nHDqxzT+GhMUNkm5B1Vu078idZx9avcaWV1Yh3VKdfBKjvIIGNX3ggbu7TJNu0brpr37dLHf+gaPS\nHdAG3R8BMngYjaGjWj7cql5Md+kWvZu/fs/dqwfMG15+LEvzFzhXhbKDmVlF605/fSLQdjSxcRxP\njXURFoc95/3R8+Kz3t+511Gmv2vWrpX1QpGt6Mczu4+UF8xPjjLGNA8JbSbdpFVJEQafovWpa+1F\nFS7/9wWuTvdHgLwahoY+8fVkXV7QqBWFtoqLcyct71G2/8JxW365K5wkuGah4xLbP/R4f+4S0bk5\nSzaMzlt+5NPy5JwS6RYJHtH+QXEL7pwytFbdf0q3aNW0v3/eOW/FkZ+kOyBP90eAIl+4aUhi/dg7\npTv07MOhc2NKd5w96yh3398Ule69cHb/yXMfJceYQ1tEhreW7sG1m/fN9psvPL/+a1tOqds+78Ve\nVFFevClty+GC3INt29cfLN2jRaea+Tly5x1YKd0Bebo+AuTbISZ86oKxmdIdejVvzc4xOXP2Li47\nfMl9l8/vGMxGY62ld08e0aLp+9ItqJxlaac+z//yxJTs6bt559NvBPStHz/lnaGnpTu0aMZ7q9tl\nf7Rnt3QHZOn6Ues1JrXtJN2gV7Nmfd/3/FPrljB+/pfDardnTFw9Y9HuQ6OlW3B1yzPTZqePXTmB\n8fNHhd+mnJn2j8/rS3doUcjIFkONAZ5m6Q7I0u8AMhoMHjUD7pfO0KM5yzYOuPT29jWOCv0/26c6\n2HJKLece+27p4oNHe0u34M8tz0ybmz726yctGQVZ0i1albfsyMlpL34eI92hNYNDY/8SNLBJlHQH\nZOl2AIWOadllaFydu6Q79GbmR2tbXfzHplXSHVpnzSqxpg767LvFB4/eLN2CP1qWdurJtGFfPFyR\nkpsv3aJ1ecuPnHt/6jJP6Q6tCbq78WRztL9ufwbixunyv3yDl8nYeVKXsdIdejNz5nfdsj/ac1C6\nQ08yJqzevGj3ob7SHfiv5RdTZ6WPXfmhJaOAFx9XUuG3KZZpL34eJt2hJcMbNnzGq25IHekOyNHl\nAAq+r2lgS/9QTn9dgznLNg7IemfHZq287VovbLmljnNTv/t+8YEjQ6Vb8Otpr5VPMX6uXd7yI9nT\nXvy8lnSHlgTd2/g26QbI0eUA8k6Muku6QU9mzvhuBKe9rp/1UoktbdRXnyw+cHScdIs7W5Z26su0\n4V88W3GS017XK2/5kfT3py4Lke7QilF9O3zgnRARIN0BGbobQN7NwoPH9us4T7pDL1bkZDyR/+mx\n/0h36J2j3GbPmPDNokW7D70l3eKuClYmPWpJL7gk3aF3hd+m5E37++ddpTu0wGQwmIIHNR0g3QEZ\nuhtAIaNaNJVu0JOMCd98YMkocOl3ITmLLa+sPOvDXa9Id7ijj7/a1i3rg11p0h2uIm/Fka2LDx7l\ntK5S6oFBNy0x1fDxku6A8+luAHm3iOR/tJWwo+DSgbcGzYwtO5TJ+KlCJdvPZk978fPa0h3uZM7y\nTQ+ef/qHzdIdrubslLWfLT2Z8jfpDi2IfKEbv7F2Q7oaQEF3N4odVqfew9IdenBkY8rksoOZPByu\nGuR9cjR99sL1vH7FCXIs5fvzVhxZKt3hiqwXiizpo7/ilK5SyhzmM84U6OUh3QHn0tUAMkf4dZdu\n0IOFOw6+cPFfm3dKd7gsu8OR98mRb5ZfSpsmneLqFoxf2r/8WFapdIersmaVlMxZscntn6g/sm3z\nh3xaR/HUbDejmwFk8DCZJk7tt0i6Qw/yFh96zV5Q7rYvhHSGipRc24Xn178q3eHKFu05fHfJTxkc\nxaxmF/++cfuS5OS/SHdIi3i+K8/7cjO6GUDhj3fkce6VMOPd1b0Kvz/F+HGCkp3nzs5evKGfdIcr\nWn4pbVHGxG++ke5wFxdf3LhoRU7GaukOSUYfjxEeMQH+0h1wHl0MIIPZaDBH+d0n3aF1y86fmVaw\nKnmjdIe7cJRZHdnTd/8o3eGKchcdesdeWMGQd5LSPeezCtekvCzdIWlwWFxi0N2Ne0l3wHl0MYC8\nEyJC7+/T4U3pDq0r+CrpPUtGAS84dSJbTmnZzGlrmkt3uJJlaaeeLlpz8oB0h7vJfGXrT9IN0iY8\n3OcLo4+Zt8S7CV0MIK+GoU2kG7Ru3rc7/pI9bddJ6Q53lDPvwJHMitIt0h2uImPcqo8r0vLt0h3u\nxmGx22d+uKaVdIe08Cc7x0o3wDl0MYBCRrW4Q7pB63Jm753jsNj5oSHAXlTh+HzGhkekO1zBx99s\nn2Q5V5gt3eGu8r86cWh5Ztp06Q5J5ki/uwweRoN0B6qf5geQd4uI4H7xtSdKd2jZgi37nio7mlUo\n3eHOCr9NObgs4/Qb0h16l7/8yFKHxc4Le4VY0gvsBSuTZkl3SBrTs+073i0jw6Q7UP20P4CaR3QM\nMnvysroryF10iHd9Cas4nWcvXJ0yU7pDzxZs2vtkya5zvOhUWP7nx48uz0r/QLpDknfjsBbSDah+\n2h5ABoMhZESL26QztGxJSvJbxRtTz0h3QKnchQczpBv0LHfJ4VXSDVCq4mSupWjtyY+lOySFjGk5\n2OjnwWkwF6fxAaQMw+rUmyqdoWVF359aIt2An1mzSspnzvjuVukOPVqWenJaxem8JOkO/CzzjZ+O\nSDdIGhpbZ1zQwCZR0h2oXpoeQBHPduki3aBlyzPTPi34KokfGhqSM3PPepvDwaMIrlHBquT5Fu78\n0gxHmdUy44NvR0h3SPJuEtZHugHVS7MDyOBpMpoj/PpLd2hZyU8ZqyrO5BVLd+C/7KVW24rUU89L\nd+hN3rIjJ6Qb8L+sF4s3SzdIGntXl48NHiaTdAeqj2YHkFejGpH3927/lHSHlhWuPfmFdAP+KOut\n7d9LN+jJwh0Hn7UXVxRJd+B/5X96LG1Z2qm50h2SAnrXDZVuQPXR7ADybh5RR7pB64o3p/FDQ4Ms\nF4uOnSsvTpbu0IvS3efW2Uut3PquQWWHMr+UbpDkd1Mttz4N6Oo0O4CCBzftLd2gZXOWbhzPgw+1\nqexgZtm6PcnzpDv0wOZw2PK/OHFQugOXl7fiqFufmrz5toQxXvVDg6U7UD00OYB8WkX5DqhXhyfr\nXkHFmbzd0g34c4VrTn4r3aAHn+aenWbJKKiQ7sDlVaTlpy1JSvpKukNKPZ/AFkZ/T16N4aI0OYC8\nGtVoGWj2DJHu0LKKU3lufZuq1hVvSU+XbtCD0gMXf5RuwJ+zXigqrziZ+510h6TIv910u3QDqocm\nB1DouMT20g1atvR0yofFW9L4XbOGOaz2YodSnKK8ivz/HOUFvhpnvVSyU7pBkjHAs68pyMtDugNV\nT5MDaGhsnXelGzTuJ+kAXJk1s7hs9uzvn5Tu0AGenq1xWe/tPCbdIGloXN3uAf0b8moMF6S5AeST\nGBUo3aB1F1/cxMMP9WG/dICWLdi6f37Rj2fypDtwVW7/YE+fxMie0g2oepobQEF3N+ZvtKtwWO1Z\n0g24OmtWCad3rsTu2COdgEqwO6w/FV5aLJ0haWz/Tq8po4F3g7kYTQ0gc5S/0addzZukO3SgQDoA\nV5e74GCqdIPGMRB1wF5qse2ftWOHdIe0wAEN46QbULU0NYBMId5hvPz0yuZ9s31R6Z7zOdIdwI26\n+LcNPP9HP9z+rkbfDjV5NZOL0dQA8qgZUFO6QescDgdHFeASHHYHdzLqR6Z0gLSRd3d61bN+iJ90\nB6qOpgZQjUlt20g36MB56QCgirj9xbU64vYDyNNgCjD6eERLd6DqaGoAKaX6SAfoABdA68j89Xsm\nSzdoGANIJ8qPZXHaXSkV9VL31tINqDqaGUD+vepEj2jWeKB0hw5wBEhHCr4+4fa/c74CBpBOFG9J\nz1127kyKdIcG8I5KF6KZAWQK9m4k3aAThdIBQBXhSdnQlSENG472bV8zTLoDVUMzA8i3Y0yidANQ\nDUqlA4AqkicdIM1kMJg864ZwGsxFaGYAje3f6W3pBqAaFEkHAFWE07lKqbBH2nWUbkDV0MQAMngY\necImAEDzBteI+4d0A6qGJgZQxHNd20o3ANUkSDoAqCIx0gFa4dspNkS6ATdOEwNIKcUAgqvylA4A\nqggPAfxF4O31u0s34MaJDyBztL+n30212kl36AgP4tIRg6eZ07t/ziwdgMoxeJgMvAr0v3w7x/bw\niAkwSXfgxogPIFOAZ9DQ2Dr3S3foSIB0ACrvkdcGrZBu0DDxf/6gckLGtIgaEh1fX7pDK4bG1HnE\nFOjFaTCdE/8HkGfdEJ6pcG3ipQOAKsLpQf3wlw7QGs96IRHSDbgx4gModGyrutINOsMpMLgKToHp\nR6R0gNaE3N+qmXQDboz4AFJK3SwdoCdeDWvEmKP8PaQ7UGlcOfEn/LrV5hSCftSSDtCgW6QDcGNE\nB5A5ws9kDPTiCdDXYHjDhvd5xAQES3fg6jzjg72kG7Qs4La6jaUbcHUGk9HgWSektnSH1oxo1nhi\nwO31OTWoY6IDyK9LbOSw+Hq9pH8RdIjfOetA0L2N46UbNC5BOgBXZ/A2mx64p8vL0h1aZPT1aCDd\ngOsnfQqsnvQvgE7xcD194Af8lXEESB+4VuvP8RJvHRMdQF6NasRL/wLoUcRTndpIN+DKDN5mg2d8\ncAvpDi0bfVPicL8ucVxcq3FejWr4Sjdo1dh/3vWKdAOun+gAGjem50LpXwA9MgZ6dZVuwJWZQ318\nxtza7m/SHVpn8DJxca3GhYxs3ly6Qat8jeZ46QZcP+lTYLgOg+LrDvZpGcnvyrSNB1ZWgn/POpwG\n177u0gFa5t+9dqB0A66P2ADyaliDx4hfJ7PBaPZuGcn70zQs/JnOXBtQCf494vtJN+DP+SRGBdzf\nt8OL0h1a5ndz7ZbSDbg+YgMo6L4mcdJfXs+Chyfw/jSNMnibDeYw39ulO/RgcGjsiMA7GnI0U6PM\n4b7c/n51XJOpU5KnwHj+zw0YVrvemwYPI0fRNMj/plohI1snPC3doReetYM6Szfg8sKf6MRvtK7C\nJzEq0Rzmy2tddEhyAPFivRsU8VzXGOkG/JFXs3Du/roGEyb3+d4U6sOt1hrjGR9sNPp73ivdoXXD\nGzcaZQr14dEkOiQygDyi/c0Bfeo1lP7yemcO973b4GniVQsaM2Jcj2nSDXpjruHDhaQa49+jdoPB\nobFco1U53PSgQyIDyODj4TckvNaD0l9e78b0aveud9MwngqtIX5d4wL8TB5NpTv0Juzxjh2kG/Bf\nBrPR4N+zzh3SHXoR0Lsuj3PQIalTYH7SX9xVeDeP4AI8jTB4mw3BwxLulu7QI49I/zHmCD8f6Q78\nzCcxymdk2+avS3fohd9NtRjwOiQygMxhvhwurCIhI1uMNAZ6cTG0BpiCvHzG3NJ2gXSHHg1v0miQ\nX9c4HrinEUGDm3aUbtAZrvvTIZEBFPZY+5rSX9xVDK1Vd2Rg/wacctGAgL71eR7IDQh7rMNA6QYo\n5REb6O/dPGKSdIeeeMQGNvBuHsHjHHRG6hQYL4msQpP/dvdB6QZ3Z47y9wq6t/F46Q49GxJR68nQ\ncYncHSos4La6rYfVrsfdX9dgcGhsO6/6odHSHbg2UgOogfQXdzWh41vzYElB/t1rtx3eoOEY6Q69\nCxnZ4gGjvyendIWYgr09g4cnjJPu0CkeGqkzUgOorvQXdzVBdzd+1CPa30O6w12FTWk/VbrBFQyJ\nqPVM0F2NGPNCAu9o2G1oTJ0R0h06FSEdgGvj9AEU2K+B/8jWCTxboooNq1Pvcf9b63IngpMZvMyG\nmA/79BscGsspgyoSNLDJ8+YIP2/pDnfj276m16Tn7vxeukOvHn7lvmXSDbg2zj8CZDSES39pVxU8\nLOEvpmBvbiV2Iq8GIcFjerVbJd3hSoY3bvSg3021ukh3uBOjj9kYOrYVIx5uReIUWKj0l3ZVw+Lr\n3R3zYZ97pDvcSY3J7bhzqRo8/O+B6/y6xjHmncSrYY2ao7u3WSLdATgTA8jFjGzbfLFPm2geM+AE\n4X/p2G5MjzazpDtcVfDQhL/wwt/q51k/xKPmB31ekO5wBT6JUV7SDag8iQHEqxuq2SOLxh71jA/m\nadvVyBzu69d/dOf50h2ubEzPti+FTe3IIzOqWdBdje8YElGLRzhUgYB+9bkTTEecfxH0XY04OlHN\nPIzGoOChzXiPTzUx+nkYY2f1f6Cmlx8PoKxmgX3rveRZNyRMusNVBd3duMb4B3t9Kt3hQngnmI44\nfQCN7tLqHekv7Q7Gjb5lafTrPbkrrBpEv9azy/Amjd6T7nAHQ6Lj+z/w1bjvvBqHcSqsinknhAc9\n/Mp9WdIdLoZHvOiI1HOA4ARj7+i83SMmgN89V6HA/g2ajOnVbpN0hzsJ9fBKDL6vyUhlNBikW1yF\nqYaPR/iTnR+W7nBBPMNKRxhALi724wEvedQM8JfucAX+t8QHP/LmkKPSHe7oweHd54UMT+Bda1Uk\ndnrfe0d1aPGSdIer8etaK9oc7ssDaXWCAeTihtWuN6HWkrue9qwbwt0JN8AY4On56PSRudId7mzS\n83ftC3u4HW+Mv0GR/7y504iWzXhoXzUYFl/vAWOgl6d0ByqHAeQGhkTH/zXu4wFTPOIC+e/7OhgD\nPH0i/96NV11owISH+xwMe7gdd9pcJ//utVs/MKjbVukOF8dTzHWCH4huYkhU7dfj5gy41yMmgItJ\nr4HBbDRFvnjzlLH9O70q3YKfTXi4z5mQkS2CpDv0xq9zbLOJ04dvMSjFtVTVi19fnXDqAIp4pgsX\n5AoaWrvuJ3GL7hrlWTeE4VsJBrPRFDOt79/G9uvI+NGYSc/fmVdjclseqVFJvh1jGj/28f2HvYwm\nnq4N/MLZPwj5XZuwoTXjP46bO2CSR60gzlNfgTHA0yfqtZ5PjL659d+kW3B5Ex/pezZsSvv60h1a\n59+9duup88cek+4AtIYjAW5oSHTtD+Lm9H/YIyaA3w1ehv+tdf1ipvX9B0d+tG/CpN7JISNb1FIm\nbpH/PYOXyRD9Rq+bJ04fzjU/wGUwgNzU0Fp134pbeNc7nnWDa0i3aIn/LfHhj34wvGhU+xZPSreg\nciY9f2dqjQltbpXu0BJTkLc5bsGdg8cO6LTBy2jiolzgMhhAbmxoTPyEiV9POB754s1NDV5mt/57\nwRzlbwwe0qzjo9NHZkq34NpNnNJ3bd0fR07xrBfi9j/sfTvEhNT8oPdzI1txqztwJW79Qw9KBZg9\nwx4c0u1I+NQOt5uCvNzyAV5GPw+P2Fn9Bk9+8Z6fpFtw/YbWjH8vbk7/l7yahEVJt4gwGgzBg5vF\nTV0wNmdU+xb/kM4BtI4BBKWUUuPG3LLymR1PVfi2r+lWp8SCBjaJrbXk7reGN2y4VLoFN25IdPzj\nT3zx0PmYD/vcJt3iTJ71Qjwinu58z+R/3JMm3QLoBQMI/2PqwgeyYmf372uq4ePSpxK8GoR6hz/e\nccjDLw1MH9640SPSPahaY3q1W1tv0+iXA3rXc+m3cxu8zUa/brXqxc27Y9a40bfwVnfgGjj1oXh+\nXWuFtmlVZ4r0l8aVtaodPfxMh5AQ5XAcs2QUFjjKbQ7ppqpi8DabIp7u3Dh8aoeXRndr/W/pHlSf\nBL+gm9r3bf7YqUa+B0t3nUu1l1is0k1Vya9LXFDk37sNmfBQ7x8T/IJaSffgZ9uW7nzDlltWIt2B\nq3PqraMRz3SpN27MLSnSXxqVtyzt1OO5Sw8vyZ1/4KJ0y43yu7l2ZPDQZlPGdG/znHQLnG/Oso1d\n85Yd2V6elG2TbrkRRj9Pc+jYlr0nTO6zSroFf/RGvw/DK07mZkl34OoYQKiUFTkZT2S+vOXT4m0Z\nabacUl0dEfLvXrth6MQ2/Ue2avaWdAvkffz1tpvzlh3ZWbrvQpl0y7XwrBMcGNC3fqfbxnX5V12f\nwHbSPbg8BpB+MIBwTRYfOfZs3rIjy4q+P3Xell9eId3zZ8wRfl6h4xJre8YHDx19U+KL0j3QFrty\nVCz8bnffi//evNuWVVLosDk0OeqNfh5Gn9bRISGjWnTyrBM8eWhsnT7STbgyBpB+MIBwXZaeOTmr\ncM3Jr4s3pa0r3Xu+XLrnV0H3NvH3iAvsNWHibV9It0Af5izdOMV6sWhV9sy9p6VbfuVRK8gYdE/j\nhr5toweObNv8X9I9qDwGkH4wgHDDbA570ay3Vw+ypOYfLVx3Ok3Znfe7aXOEn8mnVWSs/211m43s\n12Gph8HI++ZwXYpslswv9h5/OnfRwYPlJ3OPV5zMdeqFrH5d4oJMoT71xr02cLG30dRE+tcD14cB\npB9m6QDon8lg9H/o8f6rlVJq4Y4DC5RdbS1YmbSzZMfZc0qpUlteWam92HLDF56aaviYjN5mX6WU\nX8jIFlFejWp0NYX5dBveoOF90r8G0D9/k0fEyHbN56l2zdWyc2fWWVLzt9ryy3ZceuOng0qpYofV\nXma9WHzD1w0ZPE0Gc7ivl1LKz7N2UGDouNbNlFI9R3Vq+Zj0rwHgThhAqFKjOrQcrZQarTq1/P+/\ntnDb/g/KjmalKKXOKKXOKaVycucfyLBmlfzpNUS+7WP8/brVCldKRSqlYpRS8QF968UPjanzsPR3\nhOsbWjO+l6qpeimllOrT4f//+qw56/6mfv77+KxSKr38WFZ+wTfJV3x9SvgTnWKVUgHq57+P65sj\n/eLGDujEnYiAME6BAcANcFz2T5VSv/zzldfUuxdOgekHR4AA4AYYLvunALTO2a/CYHABAABxzh5A\ncdJfGAAAwNkDiJevAgAAcQwSAADgdhhAAADA7TCAAACA22EAAQAAt8MAAgAAbocBBAAA3A4DCAAA\nuB0GEAAAcDsMIAAA4HYYQAAAwO0wgAAAgNthAAEAALfDAAIAAG6HAQQAANwOAwgAALgdBhAAAHA7\nDCAAAOB2GEAAAMDtMIAAAIDbYQABAAC3wwACAABuhwEEAADcDgMIAAC4HWcPILP0FwYAAHD2AIqS\n/sIAAADOHkCe0l8YAACAa4AAAIDbYQABAAC3wwACAABuhwEEAADcDgMIAAC4HQYQAABwOwwgAADg\ndhhAAADA7TCAAACA22EAAQAAt8MAAgAAbocBBAAA3A4DCAAAuB0GEAAAcDsMIAAA4HYYQAAAwO0w\ngAAAgNthAAEAALfDAAIAAG6HAQQAANwOAwgAALgdBhAAAFXHSzoAlcMAAgCg6nhIB6ByGEAAAFQR\ng9noI92AymEAAQBQRSL/3i1eugGVwwACAKDqNJUOQOUwgAAAqDp1pQNQOQwgAACqiEe0fyvPeiHe\n0h24OgYQAABVZEh0fGfvpuEx0h24OgYQAABVK1Y6AFfHAAIAoAr5dauVIN2Aq2MAAQBQhcYO6PSh\ndAOujgEEAEAVM/p68PNV4/gvCABwQxy/+wNKhU1p31y6AVfGAAIAXDMGz5V5xAXeZvQxG6Q78OcY\nQACASrva6OEn/s/G9Gz7ujnCz1e6A3+OAQQAuKrKHO1h/PxBiHQA/hwDCABwRZU5zcX4+aPwpzv3\nkG7An2MAAQAuq7LX+DB+Ls8c5tvP6G02SXfg8hhAAIA/qOzFzYyfPzeiRdPBfrfEN5DuwOUxgAAA\n/+9yR33+bAwxfq4u4tkuPaUbcHnOHkBh0l8YAHB5lxs+DnX5ocP4qZwh4bU+NAV5cRpMg5w9gAKl\nvzAA4I8cv/vzX//974eOQTF+rlXo+NbtpRvwR5wCAwA39vtTXr/988uNH1y78Q/02uZRM8BDugP/\niwEEAG7qStf2MH6qljncN1q6Af+LAQQAbqiyFzZzyqtqhE3tcI90A/4XAwgA8AcMn6o1qmPLd/x7\n1qkl3YH/YgABgJvhlRYyakxs3Vu6Af/FAAIA/P8RH8ZP9RnRvOks/+61faQ78DMGEAC4GcNl/oBz\nBA9NeNDow+sxtIABBACAk4y+ufX7Xo1qREp3gAEEAIBT1Xi43WjpBjCAAABwqtFdE18Of7JTW+kO\nd8cAAgDAye4bfdMSc7gvT4cWxAACAMDJQsxeDYOHJtwi3eHOGEAAAAiYMKn3moDb63NBtBAGEAAA\nQkJGtnjMGODlJd3hjhhAAAAIGZnY7Jmol7p3k+5wRwwgAAAE3d+7/XfezSNqSne4GwYQAADC7lo0\ndLF3QgSvyXAiZw+gq72DDwAAt1PPO7BHjYfb3quMBt5M4iTOHkCnpb8wAABaNKZ7m0XhT3Ti1ngn\n4RQYAAAaMX5sz3XhT3SsJ93hDhhAAABoyPgHb00xh/sGSHe4OgYQAAAaEzfvjjc8agb4SXe4MgYQ\nAAAaM6x+gwkxM27/q0fNAE/pFlfFAAIAQIOGN2z4TOysfmNNwd5m6RZXxAACAECjhtVv8FHcorvG\nekT78+b4KsYAAgBAw4Y3aDAzZla/yR4xnA6rSgwgAAA0bniDhu/Ezur/IKfDqg4DCAAAHRhWr/60\nuEV3TjJH+XN3WBVgAAEAoBPDGzR8L3Z2vxc9YgKCpVv0jgEEAICODG/Q8InY2f3fM0f5B0m36BkD\nCAAAnRlWt/6opzdMzQub2qGxdIteMYAAANCpCRNuOxbxXNf7pDv0iAEEAICOjRvV45O4jwc86t0i\nklNi14ABBACAzo3q3Ord5rMHzAuf2qGBdIteMIAAAHABtwVF3z1+wm1JMdP63msM8PSW7tE6kzM/\nzK9rrbZtWtXpL/2lAQBwVa3q1hyU2rlGiKPcesKaWZznKLNKJ2kSR4AAAHAxIxKaTH7ktcEpcfPv\nGGSu4cMrNC6DAQQAgIsa3qjR8qe3PlEe8UznbtItWsMAAgDAxY0b03NjrSV3/9u3Xc14o5+nUy9/\n0SquAQIAwA20rBlxU6d7Wj92qplfkb2wYl/FmTy3vjiII0AAALiR0V0TX3/0o5El8V8OmhTQt35N\n6R4pDCAAANzQ8MaNpk15Z+jZ2ivuGefTtmZNdzs1xikwAADcWIuoiAGd7mn9+KmmfhW2wvIky5n8\nYukmZzA7+fNOSX9hAADwR6NvSnxJ3ZT4klJKzV64vlf+F8e3lR/LKpXuqi7OPgJUr02rOiOlvzQA\nAPhzbVrWGZXWK6pT4O31laPUWmDNLilylFrt0l1VydlHgAAAgA4MCYu7RYWpW9QbTdTiI8emlx25\ntCx3/sEdFadyLdJtVcHgzA+LeKbLbePG3LJW+ksDAIDrN/3lr3pbL5XsLvw2JUe65XpxBAgAAFyT\nSc/duVYppZZMODGtdP/Fr/I/PZZsOV943pZdWi7dVlkcAQIAADds8aGjy8uTclZbLxRtyfpw9xnl\ncDikm66EI0AAAOCGjWjedIhqroYopZSa3EctPnD0r/lfnVhVsvPs4YqUXJt03+85+y6wiDat6jwg\n/aUBAED1ahEVfkv7m5tMTL8tOs4zJiCpdNe5XIfVrpmjQs4eQF5tWtWZIv2lAQCAcyT4BiW2bhE/\n+VRjv/PWSyWHLGcLNXE0iFdhAACAaje6e+uPpi4YW+bbvmZt6RalGEAAAMCJJi+4/4Rft1qtpDuc\nOoAKViVlSn9hAAAgx9Ng9Br44cCvfDvGNpXscOoAKjt8qVDyywIAAHmxnn61ps6//4hvh5goqQZO\ngQEAABFTF4w979etVpDEZzOAAACAmLDJ7QYZzEanPphZKQYQAAAQNKJl01kBfes3cvbnMoAAAICo\n8Cc7PeEZH+zUTeLUByEqpdSJAFt6m1Z17nT25wIAAG1K8AtqfcxUtrp4Y+pZZ32m048AlR2+xK3w\nAADgfzw49OYdnrWDfJ31eRKnwBhAAADgDzwbhDZ01mdJDKBzAp8JAAA0LvTBxFEGT5NT7ghz+gAq\nT8rOXJ6ZttXZnwsAALRtZKtmU/171XHKu8KcP4BOZFdYMgoOO/tzAQCA9nk1qtHGGZ8jdRv8KaHP\nBQAAGjZhwm2fOuNzpAbQDqHPBQAAkBlAma9uc9p9/gAAQF9qTGpbv7o/Q2QA2YsqCiQ+FwAAaJ/R\nz6NWtX+G0HcrFPpcAACgfdV+J5jIAKo4lVs69z+b/y7x2QAAQPN8qvsDxF6Gai+z7pP6bAAAoGmR\n1f0Bkm+DPyD42QAAQLtyq/sDxAbQpTd/Spf6bAAAoGnF1f0BYgPIUW5zSH02AADQtKzq/gDJU2Dq\n45U/PSr5+QAAQJPOVPcHiA6gkm3pRyU/HwAAaE/ZkUtHqvszRAeQUuq08OcDAACNKVydUlHdnyE6\ngEoPZKYtv5C6SbIBAAC4H9EBVHEq12LNLN4m/YsAAAC04YMnV7R2xudInwJTlvNFW6QbAACANthy\nS08443PEB1D2tF1J0g0AAEDewl2HxhZvSS9xxmeJDyClVLZ0AAAAkHfxhQ2rnfVZ4gOoIq0gb953\nO9+T7gAAAHI+XrX9acu5wmp/AOKvxAeQo8xqt2WX/iTdAQAA5OQtOjjbUWGzOevzxAeQUkqV7Dq3\nXroBAADIWLB53/DSAxer/QWov6WJAVS4OiVTugEAAMjIXXBgpbM/UxMDCAAAuKcP//ppYvGW9EJn\nf65mBtCHf/10iHQDAABwniXJyUOKN6QekPhszQwgpdRx6QAAAOAcS0+nzMwY+/Vn1qwSh8Tna2YA\nlew8l7Ts3Jnd0h0AAKD6ZU/f8y/rpRKr1OdrZgBZ0vJLbbll66Q7AABA9Zr50dqEgpVJZyUbNDOA\nlFKq4nTuZukGAABQfWZOW9M1+6M9x6Q7NDWAcubu5zogAABc1JwlGx7M+mDXVkeFzS7doqkBpJTi\neUAAALigxUeOP3TxX5vnSnf8yiQd8Fv2gnJLSrxncWKD2FulWwAAQNVYkZ3+2IWnf5hrvVAsdtHz\n75mlA37LUWFzWC8Wcx0QAAAuJGP8Nx+WHbnktPd8VYbWToGpzFe3bpduAAAAN+5ISe77bw2aadba\n+FFKY0eAAACAa1ielf7oucnfzio7mKm58aOUxq4B+lVSuOFM64Tad0l3AACAazd70fpHs97YNr3s\n8KUK6ZY/o8kjQOVHs/ZINwAAgGs3a/b3Qy+9tX25dMfVaPIIUMWp3Oz0W6O6NQ+tES/dAgAAKmfG\n+992zf5o91pld4i83+taaO4iaKWUspdabQ6r/QfpDgAAUDmzF/zYMnv67q0Oi138IYeVockBpJRS\nRetO814wAAA0bmlK8pxp//yiZuYrWw9Kt1wLTV4DpJRSRRtSz6jJ0hUAAODPLD2V8mTayC+n2XLL\nSqVbrpUmrwFSSil7iaX0dIJ/aMu4qPbSLQAA4H9Nf/mrvlnv7VxqzSzR7J1eV6LZI0D2ogqb5ULR\nN0qph6VbAADAzxZu2/9m7tLDrxatO50t3XIjDNIBV2L08/B4ds8zulyWAAC4khVZ6UsLfzj9TubL\nW/Y7ym2aeafX9dLsESCllLKXWnX/CwwAgJ6tzT+/Pu2LY2/nf3F8ffmJ7GLpnqqi6SNASikVM73v\n8DG3tF0s3QEAgLuZ+dHaHvmfHd9uySgok26papo+AqSUUsVb07eqW9pKZwAA4Bbmr9/zkjWzeNGl\nN346bS+qsEj3VBfNHwEyR/iZai2/58uhNeP7S7cAAOCKlp07840tr2zRpVe3bSvdf+Gso8Kmi4cZ\n3gjNHwGyZhbbHCWWz5RSDCAAAKrQx19ve6b8WNa3eZ8cO2wvrnD50fNbmh9ASil18R+bNqtFDaQz\nAADQvUX7j/zTklHwn6y3tidbMosrlE377+2qDroYQLbC8gzpBgAA9GjZ2dObHBW2NcVb0n8sXHPy\nZMWp3Gxbbplbjp7f0vw1QL+Kfq3nvWPv7PypdAcAAHow75vtk0r3X9xa8PWJo7b8ch4r8zu6GUAG\nb7Pnc/ufLZfuAABAixZs3PuiNbv0x4t/2/CTUsrusOrjrexSdHEKTCmllNVuXZGdPm1wjThekQoA\ncGsrstM3WHNKN1nPFe3Knr77hFLqfHlSdrG91Or2p7YqSzcDyGG127Nn7v1CPccAAgC4n/nf73qy\n+KeMA0qp5NLd59LLk3Js0k16ppsBpJRS5ck5W6UbAACoTnM/2/KuUuq4Uupw4bcph4q3phcqh+LI\nThXTzTVAv4qd0/+B0V0T50h3AABQWUtPJm90VNhTlVInlVIWpdRZpVRF5mtbT9kLK0qVUsVKqWKH\nxVZcnpRTJN3rDnR1BEgppbI/2vOD6poonQEAwBXNeG/1SFt2aZJSKqngm+R8e7GFozgaorsjQEop\nFf3WrY+N7dfxHekOAAB+tTQl+bWSPec/zf/02L6yQ5lcn6NxuhxAnvHBoU+ueSRbugMA4N52F2Xv\nPrQx+f3s2Xs32HLKzlkzixk+OmGSDrge9sKKspR6XmmJ9WPvlG4BALinuZ9tGZ30yqbnchce3GXL\nKi3gFJe+6PIIkFJK+XaI8Z66YGypdAcAwL3MWbJhWPasvZ9bLxbzcF4d0+URIKWUspwttJ5uGXi0\nVe3o+6RbAACub0ly0vTNH2wclj199yZ7sYVTXTqnu7vAfit75t4f1U3cEQYAqF4Lfzpw97mp362x\n5ZWVSbegauj2CJBSSlnPFZaerO+9KbF+7GjpFgCA68mxlqd+NGJ+YvaMPdsdZVZeKOpCjNIBNyrr\n3R0/STcAAFzPoeLceQseWNK+dO/5M9ItqHq6PgKklFK2vHLrybpeexIbxA6TbgEAuI4lYxZ3KN19\nvlC6A9VD90eAlFIqb/mRNdINAADXMHvh+nH/bvwvQ+neCxbpFlQflxhAJTvPWT94YnkX6Q4AgL7N\nmv39qEtv/bRAugPVT/enwH5lzS69dKZ9SGiLyPB20i0AAP2Z+8nmhy+9tvVjh8XOLe5uwCWOACml\nlC27tCxvxRHeDwYAuGbL0k9NvfC3DdMcNoddugXO4TJHgJRSypKaX5Bxe4xH86CQm6RbAAD68GP+\nhVdOPvH925azhdzm7kZc5giQUkrZiy3W3MUHZ0l3AAD0Y//kVa+X7DzLq5XcjEsdAVJKqbIDF/PO\nDaqTn+AX1Ee6BQCgbW8Pn1OrdM/5TOkOOJ9LHQH61fmn1n2yqyjroHQH9M3xmz8AuJ75P+7uWbrn\nfLp0B2S43BEgpZSyZBQWltQNKklsHHe3dAv06bejxyAdA6DKLdi095kLz/64wlFm5aJnN+WSR4CU\nUirzjW2fSTdAf35/xIfxA7im80/98L4tt4wHHboxlx1AtuzS4llz1/WQ7oB+/P5UF+MHcE0fPvtJ\noi2vjIue3ZzLDiCllMpbcXRLid16QboD+sP4AVzTkhNJL+Z/cWK/dAfkufQAsqTlW5eu2HqHdAf0\nw6AYP4Aru/TWTzOkG6ANLnkR9G+VbE2/cDoxyNoyLuoW6RZoG8MHcG0zP1o7IP+To/ukO6ANLn0E\nSCmlHFa7PXvW3vnSHQAAORaHvTh3wcEfpDugHS4/gJRSquzAxbMLdxwcL90BAJDx8bTvenPhM37L\nLQaQvcTiyFt2eJF0BwDA+b7LP/9p9sy9P0l3QFvcYgAppVThmpNlH721qq90BwDAuU7O2D3NYbHx\nwEP8D7cZQEopVbj21MZlqafmSXcAAJxj6emTXxWuO7VdugPa41YDyJKWX1qwKukf0h0AAOcoWJn0\nriW9oEy6A9rjVgNIKaWyZ+7N+HjlT09JdwAAql/+Z8e47R2X5XYDyFFhs+UtOTxTugMAUL0Wbtv/\nlL2gokC6A9rkdgNIKaVK918oWLBxL0+IBgAXlrv08Ap7qcVx4/9JcEVuOYCUUur8U+vWLT56fIF0\nBwCg6iWX5u8qWnc6TboD2uW2A8iWX16at/jQG9IdAICqt+E/e6dLN0Db3HYAKaVU0frUo0tSkidJ\ndwAAqlbJrnM7pRugbW49gGy5pY6MB1byhGgAcDH2/PLT0g3QNrceQEopZb1YXDRn6cZ+0h0AgKqx\ncNv+Z0t2nuW9X7gitx9ASimV//mxtSuy09+V7gAA3LiSHWfXSTdA+xhASqmyw5ds5x7//n3pDgDA\njStYmczdX7gqBtAvyg5fSl2wae8I6Q4AwA0rlg6A9jGAfmEvqrBnjP9miXQHAOD6LTl2/A17cQXX\n/+CqGEC/89Gbq9pKNwAArk/xlvRjtvxyu3QHtI8B9DuFa07uW5qSPFW6AwBwXU5JB0AfGEC/Y8ko\nsJ977Lt50h0AgOuSLB0AfWAAXUZ5Sk7+jPe/bSXdAQC4Njlz91+QboA+MID+RPb03QekGwAAlVdo\nsxTa8sq4/geVwgC6grcGzghbkZOxQboDAHB1BqWs0g3QDwbQFZQdvpRdtDH1RekOAMDVGQ2GMukG\n6AcD6CoyX97y08Jt+/8l3QEAAKoOA+gq7IUVFbmLD70q3QEAAKoOA6gSin48U/LRm6t6SHcAAICq\nwQCqpMLVKZuWHD/xnHQHAAC4cQygSrKcK7RfeH79LOkOAABw4xhA16DsyKXsj95clSDdAQAAbgwD\n6BrlzNl3RLoBAPBHduXwkm6AfjCArsNb984IWJt/fqV0BwDgNxzKLJ0A/WAAXYeyI5eKjj625knp\nDgDAf/mbPAK9GoZ6SHdAHxhA16nscGbKvG+2D5XuAAD8V+CAhrHSDdAHBtB1shdW2M4//cMK6Q4A\nwP9oKR0AfWAA3QCH1e5475ElUdIdAICfedYPbWf0MfOzDVfF3yQ3qOj7Uxc/fP7TntIdAAClxvRo\n85wpxMdTugPaxwCqAsWb0zYvOX5iqnQHALi7hbsOvmQrKK+Q7oD2MYCqgDWz2JI28svp0h0A4O7K\n9l/cZi+qsEt3QPsYQFXEXlhRMXP62kbSHQDgzqzZpdulG6APDKAqlPX+zqSZ09feJd0BAO6o2G69\nlDv/QK50B/SBAVTFClYmrVp+IZXrgQDAyT7deoh/9qLSGEBVrOJ0ni1j/Ko5a/PPr5ZuAQB3kv/Z\nsV3SDdAPBlA1KE/KKTo1e89j0h0A4C6WpZ1aUHY0K0W6A/rBAKomOXP2JX/81TaeDwQATlCwKvlj\nS1o+d3+h0hhA1ejivzZvXrjjIOekAaCa5X95/JB0A/SFAVSN7EUVltwFB2ZJdwCAK1v404Gptpyy\nfOkO6AsDqJoV/Xim5N1xCyKlOwDAVeUtO7yYhx/iWjGAnKB4c1rmhy981lm6AwBczZLk5LcLvzuV\nJd0B/WEAOUnxptQdi48eHyTdAQCuJPuj3YulG6BPJukAd2EvtjgKVyYnpXapUdYiIpy7wwDgBi3a\nc/jNS69tWyjdAX3iCJAT2Uss1ozx37y/rzj7W+kWANC7rA92zpVugH4xgJzMllNavHP+7oelOwBA\nzxZu2/962eFLJ6U7oF8MIAFZH+w8Nf2VrxpLdwCAXuUuPfyGvajCIt0B/WIACclbfDjpozdX9ZPu\nAAC9WZKU9FjRutPc+YUbwgAS4rDZHTlz9q1efiH1cekWANCTnJl7l0o3QP+4C0xYyZb0fWk9IlVC\nQHA36RYA0LqZH67pnrvk0FHpDugfA0iYLafUWrI1fV9az8iaCf7BLaV7AECrlmelv5H5r82L7YUV\nVukW6B+nwDSgPCUnL2PcqqelOwBAy86OX/WG5WxhmXQHXAMDSCPKk3IufLzqp2bSHQCgRQs27Lmj\n7GjWJekOuA5OgWlIyea0rKRQtbZ1s9oPSLcAgFYsSUp6I2PcN7McFjsvPEWVYQBpiMNqVyXbM84l\nx5r3JzaMGyLdAwBasPG1dQPLDl8qkO6Aa2EAaYzDancUfXfq+Mk6XhmJDWPvkO4BAEnvTVrUqHDN\nyVTpDrgeBpBGFW1KO5IUqrJbN6vdR7oFACQsSU66J/PlrVulO+CauAhaoxxl1orsWXtnSXcAgIQl\nx048cXbC6m+kO+C6GEAaZskoKH33gfke0h0A4ExLjp94OWP8qumWc4UV0i1wXQbpAFydf4/4GuOm\nDT3oazTXlG4BgOq0NCV5YeqQz8fbiyrKpVvg2jgCpANF689kz56yvK10BwBUpyXHji/IGLdqKuMH\nzsARIB3x6xJX87G5Y85KdwBAVVty/MTcjPHfPGHNLM6TboF7YADpjH/32vEPTh+6y8/oESbdAgBV\nYUly0ry0oV9MthdVlEq3wH1wCkxnijaknpkzZcXN0h0AUBWWHD3+Ssb4b/7C+IGzcQRIp/y6xDV9\nbO6YI9IdAHC9lpw4MTFj/DcLrBeLecEpnI4BpGN+N9duOWnGiB2eBqOXdAsAXIt5a3beduGv63+w\nF1Xwfi+IYADpnH+vOu0f/XDEDukOAKisD55a0bzg66TD0h1wbwwgF+DbObbp1I/v53QYAE1bsGnv\n33OXHH69eGMqp7wgjgHkIvxuqtVi0qyROzkdBkBrlmemfVW4JuWfl17/ab/DaueUFzSBAeRCOB0G\nQGuWnjk58fzj3/+n7MilHOkW4LcYQC7Gr3Nc08c+5u4wALKWpiS/lPPx/jn5nx9PlW4BLocB5IL8\nusbVf2zOmGTpDgDuZ+GOg//KXXxoevH6MxcdVrtDugf4MwwgF+Xfq06DSR8MO+BhMPpItwBwbcsv\npO60F1Usynxt2+qyAxfTbAXlVukm4GoYQC7Mr2tczGNzxmRIdwBwXTPeW923YGXyFktGQZF0C3At\nGEAuzq9zbMBjH99fIN0BwDXM/XzLa0qp1XlLD+8sO5pVruwOTnNBlxhAbsC/V52oyR8MO242GIOk\nWwDow/HSvNQ9qRd3K6UOFm9J31m45uQZZbNfKjuWlS3dBlQFBpCb8Lupltdjs0fz8DEAl/Xx19se\nK91zIUMpdV4pdaE8Kfti6b4LxdJdQHVhALmZqH/3mPLAvV3fk+4A4Hzzf9z9li2r9LBS6pjlXOHR\n7Bl7CqWbACkMIDdj9PXwCn+m8x0PDur2iXQLgOqxNPXkF/aiiv1l+y/uyvv02CmlVJFSKtdyJq/U\nXmrlmh1AMYDcksHDaIx+o1ef+/t0+Ea6BUDVmDXvh/EVJ3OPKqWOF29MzbVeKuGVE8AVMIDcWNTL\nPRIeuKfrIekOANdu7hdbH7ZeKFqf9d7Oo9ItgB4xgNyY0dfD4NkgNC7mgz4fDImodYd0D4A/t/jA\n0UVlJ7K+yFt0aJ9S6mJ5ck6pdBOgZwwgKK+GNWrEzb/j1cGhsQ9KtwD4X0uOHn8ge/a+nwq/TTkm\n3QK4EgYQlFJKedYN8Yqd0/+BoTXjp0m3AO5u+aW0dwu+OL7o0ts79kq3AK6KAYT/Z470Mwf2a9D/\noacGfCHdArijRXsOv1K8OW1O/lcnMqzniyqkewBXxgDCH9SY3Lb9xEf67pDuANzJB0+uaFiwMilZ\nugNwFwwgXFbQvU1Cgoc0fWtE86b3S7cArmpFdvqs/M+Ov3Hp7e0p0i2Au2EA4U+Zgrx8Y2b2mzSy\nVbM3pFsAVzPjvdW35X9+fLP1YjGvqAEEMIBwReZIP4+a7/buNTKx2WrpFsAVLElKejN72u63C9ee\nPC/dArgzBhAqxa9rXK3H5oxJle4A9GzW7O975y48+IP1UolNugVwdybpAOiDJa0gf9+x9HeTaxrz\nWkZH9JLuAfTmgydXNMmdf2CHvcTCu7gADWAAodIqTueVF64+uTM51rQ9sWHccOkeQA/OlBWuXPzC\nVzcVfJWUJt0C4L8YQLgmDqvdXvTdqeSjtuIFKXU8gxL8gxOlmwCtWrBl31+33r5wUvnx7BLpFgD/\niwGE61K6+3xeydb0dclxHimtakffKd0DaM28NTvuP//49zMcVjtvZQc0iAGE62bLKbUUrEzaf8xY\n9l1gQnibGh7eUdJNgBbM/37XmIsvbFhmL7ZYpFsAXB53gaFKmEJ9fGNn9Zs0IqEJzwyCW1uwZd+4\njPHfzFV2Bxc7AxrGESBUCUep1VL4TfKOk3W91jSrGz3MZDB4SDcBzjZvzY4Hz/3l+/nKwmkvQOsY\nQKgyDovdUfhtSsbBk+fmnm4dlJPgF9RTuglwloU7D75w4ckfZtmLLbzEFNABBhCqXEVKblHuvANb\njlqK1p5s6BOT4BvUQLoJqG4bX1vXr+xoFq+1AHSCAYRqU7rnfEbxlvSvk8LU8Vb1Yu6W7gGqy/tT\nl4UXrj1ZIN0BoPIYQKhWtuzSisJvUw4cM5d/ebKOp3eCb1Ar6SagKk37x+cdC744kSzdAeDacBcY\nnMYc7usZdE/jWydO7bdKugWoCkuSk4ZkjP/mP9bzRVz0DOgMR4DgNPYSi610z/nkfcfS308KU7kt\nYyN5pxh0a0ly0vT04V++a8sutUq3ALh2DCA4XcXpvLKidad37NmRsjy8d90WoWav2tJNwLXa9M76\ngaX7LuRIdwC4PgwgiHBU2OyW9IKslE2nFh61F29t3Tx+pHQTUFmzZn8/OGfu/m3SHQCuH9cAQRNM\nQV5eES/cdOfY/p1WSLcAV7I8M+29jLErny5PySmXbgFw/RhA0BTvZuE1Q8a2um9sv47vSrcAl/PW\nfTPjyw5lpkp3ALgxnAKDplgvlRQWfXdqx+GCvI+bd2lwh9lgDJVuAn61YOPeqbmLDn2vbLznC9A7\njgBBswxmoyF4WEJE0L1NHh3eqOGz0j3AexMX+hdtSC2W7gBw4zgCBO2yO1TZgYvFRevPbNh/6tyK\nlDqeec1DQrtJZ8E9Ldp/ZOClN7cfkO4AUDU4AgTdMPqYDYF3N244+W93H5dugXtZkpy0MmP8NyOs\n54t43QXgIhhA0KWQUS2CggY2eXB4w4ZvSrfA9X302tcdcuYd2CndAaDqMICgW+YIP6M5wjcqZHTL\nPs17NJjSzj+spXQTXM+KnIzPTvdZOsJWUM6b3gEXwjVA0C17scVhzSwpLPr+1L6z29OWHFOlu1s3\nqz1YuguuZcvsrVOLt6SfkO4AULU4AgSXYgr1MYQ92r6uZ3zw5FEdWkyV7oG+Lc9K/+pk1/l3SXcA\nqHocAYJLcZRaVfGG1NziH8/8sHtnytyUul6HjliLg5oHBMdLt0F/Nr7+w1/KDl9Kke4AUPU4AgSX\n51EryC+wf4MOE6f0/UG6Bfry7vgFocWb0nKlOwBUPQYQ3IpPq0jfwAEN+/l2ir17WN36Q6V7oF0L\nNu4dkjHhG95NB7goBhDckjncz8e/V3xc4J2NejepHzWirX+N9tJN0Ja37p0RXnbkUpZ0B4DqwQCC\n2/NpFenlUTu4ddjDbXsNjav7T+keyJv/4+5/nvvL9/90lFlt0i0AqgcDCPgNg8loCH+6c4I50q/3\n/b3bvyHdAxkzp6+tl/X+zlPSHQCqDwMIuAyDt9ngEe3v79c5Li7g9npdlMl4+8hWze6S7kL1y7WW\nn5zZ9f0Gtrwy3vgOuDAGEFAJBrPRGNC7XkPP+iEJEx7q/R/pHlSfmTO/G5j1zo7PpDsAVC8GEHCd\nakxs09Ic6dfxwaE3z5BuQdV57+HFNYvWnT4v3QGgejGAgBvkERforZQKChnRPMarcVgPcw2fm4fV\nbzBAugvXbtGewy9nPLjyr/ZSK6e/ABfHAAKqmDnCz+TTOipaKVUv4rmuiQPCaj7rZzRHSHfh6uZ9\nt6vtuSlr9kh3AKh+DCDACfy61TL7tquZoJRq5ds5LnFEs8ZTpJvwR6/1eCfQer6oULoDQPVjAAFO\nZgr0Mhn9PPzNEX5+Naa0j1NKdTf5e7YZ0bLpfdJt7mz6v7+qm7f00BmHzcHpL8ANMIAADTD6e5p8\nO8aEKaXiPGoG1O766E13lTvsCe38w1pJt7mDGe+tbpz90Z4T0h0AnIcBBGhY8LCEMHO4bzPvFpHt\nR3dp9bp0j6tZfODoM3nLDn+U/+WJAukWAM7FAAJ0wOhjNhgDvLwMZqNf5IvdGiileno3C+88uEbc\n7dJterRo16H3c+btn1Gy81ySvaiC110AbogBBOiUd9MwX3Okf23PusHxofe3aqWU6jY4LK6PdJdW\n7SnK3pRUULg081+bN5RsP5tiL7UwfAA3xgACXEjIqBYBxgDPJkqpphMf6TtPukfa8ktpr+ctP7JX\nKbUpb+nhC7ZcXm8B4GcMIMBFmYK9jcpo8FRKeXo3DvMPHpEQr5RKUEo1MPp41B7VqaXL3HW2aM+h\nT2355UlKqQOWjMIT2TP2pCulypTVXm4rKOdID4A/YAABbsjgbTb6tqsZqJQKVUoFKqX8vVtEhAQP\nahqjlKqplIpUSsUopYKUUjEGD5NxcGhsbWc2Lr+YelopVaqUOqeUuqCUuqiUOlvwTfK5kp/OXlRK\n5SulCpRS2aX7LhRyLQ+Aa8EAAnBV5jBfz6CBTaJ++bdRSinPX/48TCnl+7v/c1/187Ay/u6vW9XP\nQ8b+m7/mUErlKKWKf/n3eUqpAltBeWne0sOXpL83AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAD4X/8HUMpRbV8+vtIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDYtMDJU\nMDg6MTQ6MjIrMDM6MDBUoTkvAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA2LTAyVDA4OjE0OjIy\nKzAzOjAwJfyBkwAAABp0RVh0ZXhpZjpCaXRzUGVyU2FtcGxlADgsIDgsIDgS7T4nAAAAEXRFWHRl\neGlmOkNvbG9yU3BhY2UAMQ+bAkkAAAAhdEVYdGV4aWY6RGF0ZVRpbWUAMjAyMTowNjowMiAwMjow\nODowObyEvQsAAAATdEVYdGV4aWY6RXhpZk9mZnNldAAxOTBMjvPCAAAAFHRFWHRleGlmOkltYWdl\nTGVuZ3RoADYxN/+pm2IAAAATdEVYdGV4aWY6SW1hZ2VXaWR0aAA1NzYPzqKmAAAAGnRFWHRleGlm\nOlNvZnR3YXJlAEdJTVAgMi4xMC4yNAF9QtsAAAAkdEVYdGV4aWY6dGh1bWJuYWlsOkJpdHNQZXJT\nYW1wbGUAOCwgOCwgOCAb9FMAAAAcdEVYdGV4aWY6dGh1bWJuYWlsOkNvbXByZXNzaW9uADb5ZXBX\nAAAAHnRFWHRleGlmOnRodW1ibmFpbDpJbWFnZUxlbmd0aAAyNTZQcDADAAAAHXRFWHRleGlmOnRo\ndW1ibmFpbDpJbWFnZVdpZHRoADIzODnkcJUAAAAodEVYdGV4aWY6dGh1bWJuYWlsOkpQRUdJbnRl\ncmNoYW5nZUZvcm1hdAAzMTZbUp8FAAAAL3RFWHRleGlmOnRodW1ibmFpbDpKUEVHSW50ZXJjaGFu\nZ2VGb3JtYXRMZW5ndGgANTE1NLzdiKcAAAAqdEVYdGV4aWY6dGh1bWJuYWlsOlBob3RvbWV0cmlj\nSW50ZXJwcmV0YXRpb24ANhIVihoAAAAgdEVYdGV4aWY6dGh1bWJuYWlsOlNhbXBsZXNQZXJQaXhl\nbAAz4dfNWgAAABt0RVh0aWNjOmNvcHlyaWdodABQdWJsaWMgRG9tYWlutpExWwAAACJ0RVh0aWNj\nOmRlc2NyaXB0aW9uAEdJTVAgYnVpbHQtaW4gc1JHQkxnQRMAAAAVdEVYdGljYzptYW51ZmFjdHVy\nZXIAR0lNUEyekMoAAAAOdEVYdGljYzptb2RlbABzUkdCW2BJQwAAAABJRU5ErkJggg==" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React.createElement("path", { d: "M 386 203C 387 203 388 203 388 203C 388 203 395 212 395 212C 267 248 209 304 209 304C 209 304 224 296 250 284C 326 250 386 241 411 239C 415 238 419 238 423 238C 466 232 515 231 566 236C 633 244 705 264 779 304C 779 304 723 251 603 214C 603 214 612 203 612 203C 612 203 709 201 811 277C 811 277 913 462 913 689C 913 689 853 792 697 797C 697 797 671 767 650 740C 743 714 778 656 778 656C 749 675 721 688 697 697C 661 712 627 722 594 728C 526 740 464 737 411 727C 371 719 336 708 307 697C 291 690 273 682 255 673C 253 671 251 670 249 669C 248 668 247 668 246 667C 233 660 226 655 226 655C 226 655 260 711 350 738C 329 765 303 797 303 797C 146 792 87 689 87 689C 87 462 189 277 189 277C 284 206 375 203 386 203C 386 203 386 203 386 203M 368 467C 327 467 296 502 296 545C 296 588 328 624 368 624C 408 624 440 588 440 545C 441 502 408 467 368 467C 368 467 368 467 368 467M 626 467C 586 467 554 502 554 545C 554 588 586 624 626 624C 666 624 698 588 698 545C 698 502 666 467 626 467C 626 467 626 467 626 467" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "M255.7,446.3c-53.3,0.3-106.6-0.4-159.8-3.3c-17.3-1-34.6-2.5-50.3-11c-10.5-5.7-18.6-13.6-23.7-24.8   C13.3,388.6,10.6,369,9,349c-3.4-41.3-3.6-82.6-1.8-123.8c0.9-21.9,1.6-44,6.8-65.5c2-8.4,4.9-16.6,8.8-24.4   c9.2-18.3,25.2-27.4,44.5-31.2c16.2-3.2,32.8-3.1,49.3-3.8c55.9-2.3,111.9-3.5,167.9-2.9c43.1,0.5,86.3,1.6,129.4,3.8   c13.3,0.7,26.7,0.9,39.4,5.6c17.2,6.4,30,17.2,36.9,34.7c6.7,16.8,9.3,34.2,10.7,52.1c3.9,48.6,4,97.2,0.8,145.8   c-1.1,16.4-2.2,32.8-6.5,48.9c-9.7,37-32.8,51.5-66.7,53.8c-36.2,2.4-72.5,3.7-108.8,4.2C298.4,446.5,277,446.3,255.7,446.3z    M203.2,344c48.4-26.5,96.2-52.7,144.8-79.3c-48.7-26.7-96.5-52.8-144.8-79.3C203.2,238.7,203.2,291,203.2,344z" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-60 -30 600 600", width: "24px", color: "text" }, props),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React.createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", width: "24px", color: "text" }, props),
        React.createElement("path", { d: "M12,23.87H12a.51.51,0,0,1-.42-.57c.75-4.65,3.07-8.39,7.53-12.12a.49.49,0,0,1,.7.06.51.51,0,0,1-.06.71c-4.26,3.56-6.48,7.12-7.18,11.51A.5.5,0,0,1,12,23.87Z" }),
        React.createElement("path", { d: "M12,23.87a.51.51,0,0,1-.47-.31,19.08,19.08,0,0,0-1.53-3,7,7,0,0,1-6-2.3c-1.9-2-2.66-4.67-1.89-6.73a.46.46,0,0,1,.31-.3c2.09-.7,4.77.16,6.67,2.12s2.65,4.68,1.88,6.74a.37.37,0,0,1,0,.11,20.14,20.14,0,0,1,1.51,3,.5.5,0,0,1-.27.65A.46.46,0,0,1,12,23.87ZM3,12.13a5.85,5.85,0,0,0,1.75,5.46,6.24,6.24,0,0,0,4.62,2.06,17.2,17.2,0,0,0-3.73-3.9.5.5,0,0,1,.59-.81,18.54,18.54,0,0,1,4,4.2,6.12,6.12,0,0,0-1.84-5.07A5.88,5.88,0,0,0,3,12.13Z" }),
        React.createElement("path", { d: "M15.11,18.37a5.43,5.43,0,0,1-1.72-.27.51.51,0,0,1-.31-.3c-.88-2.34,0-5.42,2.13-7.67S20.4,6.9,22.78,7.69a.47.47,0,0,1,.31.29c.88,2.35,0,5.43-2.13,7.67A8.41,8.41,0,0,1,15.11,18.37Zm-1.17-1.15c2,.53,4.48-.36,6.3-2.26s2.6-4.43,2-6.39c-2-.53-4.48.36-6.3,2.26S13.33,15.26,13.94,17.22Z" }),
        React.createElement("path", { d: "M8.84,10a.51.51,0,0,1-.5-.5V7.81a.51.51,0,0,1,.5-.5.5.5,0,0,1,.5.5V9.46A.5.5,0,0,1,8.84,10Zm3.78-1a.5.5,0,0,1-.43-.25l-.83-1.43a.51.51,0,0,1,.19-.68.5.5,0,0,1,.68.18l.82,1.43a.49.49,0,0,1-.18.68A.55.55,0,0,1,12.62,9ZM8.84,6.62A4.72,4.72,0,0,1,4.13,1.9,4.58,4.58,0,0,1,4.35.48.5.5,0,0,1,5,.15.51.51,0,0,1,5.3.78,3.85,3.85,0,0,0,5.13,1.9a3.72,3.72,0,1,0,7.43,0A3.55,3.55,0,0,0,12.38.78a.51.51,0,0,1,.33-.63.51.51,0,0,1,.63.33,4.89,4.89,0,0,1,.22,1.42A4.73,4.73,0,0,1,8.84,6.62Z" }),
        React.createElement("path", { d: "M15.39,6.18a.43.43,0,0,1-.25-.07l-1.43-.82a.49.49,0,0,1-.18-.68.51.51,0,0,1,.68-.19l1.43.83a.5.5,0,0,1-.25.93Zm1-3.78H14.75a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H16.4a.51.51,0,0,1,.5.5A.5.5,0,0,1,16.4,2.4Z" }),
        React.createElement("path", { d: "M5.06,9a.59.59,0,0,1-.25-.07.5.5,0,0,1-.18-.68l.83-1.43a.5.5,0,0,1,.86.5L5.5,8.7A.51.51,0,0,1,5.06,9Z" }),
        React.createElement("path", { d: "M2.3,6.18a.5.5,0,0,1-.25-.93l1.42-.83a.52.52,0,0,1,.69.19A.5.5,0,0,1,4,5.29l-1.42.82A.47.47,0,0,1,2.3,6.18ZM2.93,2.4H1.29a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H2.93a.5.5,0,0,1,.5.5A.5.5,0,0,1,2.93,2.4Z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512.001 512.001" }, props),
        React.createElement("path", { d: "M511.964,350.767c-0.462-10.89-5.138-20.947-13.165-28.32c-4.036-3.707-8.148-7.309-12.327-10.812v-78.701\n\t\t\tc0-4.205-1.765-8.217-4.865-11.058c-18.242-16.72-38.781-30.858-61.368-42.285v-18.067c0-8.284-6.716-15-15-15s-15,6.716-15,15\n\t\t\tv4.956c-3.928-1.469-7.894-2.885-11.923-4.208c-18.225-5.987-37.558-10.503-57.856-13.532v-15.042c0-8.284-6.716-15-15-15\n\t\t\ts-15,6.716-15,15v11.711c-11.199-0.84-22.641-1.273-34.321-1.273c-12.076,0-23.897,0.466-35.459,1.364v-11.802\n\t\t\tc0-8.284-6.716-15-15-15s-15,6.716-15,15v15.218c-19.897,3.028-38.867,7.479-56.763,13.355c-4.403,1.446-8.735,2.993-13.016,4.612\n\t\t\tv-5.359c0-8.284-6.716-15-15-15s-15,6.716-15,15v18.618c-22.167,11.334-42.328,25.29-60.243,41.745\n\t\t\tc-3.095,2.843-4.855,6.854-4.853,11.056l0.047,78.414c-4.292,3.589-8.51,7.286-12.651,11.089\n\t\t\tC5.175,329.819,0.5,339.877,0.038,350.767c-0.462,10.89,3.344,21.308,10.716,29.333c15.219,16.571,41.083,17.67,57.656,2.449\n\t\t\tc6.837-6.28,14.163-12.348,21.774-18.034c48.179-35.989,105.517-55.012,165.816-55.012s117.637,19.022,165.816,55.012\n\t\t\tc7.605,5.681,14.932,11.748,21.775,18.034c7.55,6.935,17.351,10.754,27.597,10.754c11.397,0,22.353-4.813,30.058-13.202\n\t\t\tC508.62,372.074,512.426,361.656,511.964,350.767z M90.902,268.059c-12.041,6.243-23.746,13.182-35.062,20.795l-0.03-49.214\n\t\t\tc10.88-9.46,22.585-17.903,35.092-25.327V268.059z M190.681,233.858c-23.963,4.413-47.329,11.251-69.779,20.368v-55.095\n\t\t\tc21.367-9.129,44.646-15.776,69.779-19.906V233.858z M290.461,229.545c-11.4-1.091-22.896-1.652-34.46-1.652\n\t\t\tc-11.855,0-23.638,0.596-35.32,1.742v-54.068c11.484-0.945,23.299-1.432,35.459-1.432c11.758,0,23.192,0.459,34.321,1.345V229.545\n\t\t\tz M390.24,253.88c-22.456-9.052-45.822-15.821-69.779-20.173v-54.65c25.111,4.049,48.391,10.602,69.779,19.629V253.88z\n\t\t\t M456.473,289.062c-11.681-7.876-23.779-15.033-36.233-21.447v-53.928c12.927,7.579,25.016,16.23,36.233,25.965V289.062z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M250.435,205.913c-27.619,0-50.087,22.468-50.087,50.087s22.468,50.087,50.087,50.087\n\t\t\tc27.619,0,50.087-22.468,50.087-50.087S278.054,205.913,250.435,205.913z M250.435,272.696c-9.22,0-16.696-7.475-16.696-16.696\n\t\t\tc0-9.22,7.475-16.696,16.696-16.696c9.22,0,16.696,7.475,16.696,16.696C267.13,265.22,259.655,272.696,250.435,272.696z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M461.913,38.957H116.87c-27.619,0-50.087,22.468-50.087,50.087v16.696H16.696C7.479,105.739,0,113.218,0,122.435v100.174\n\t\t\tc0,9.217,7.479,16.696,16.696,16.696h50.087v33.391H16.696C7.479,272.696,0,280.174,0,289.391v100.174\n\t\t\tc0,9.217,7.479,16.696,16.696,16.696h50.087v16.696c0,27.619,22.468,50.087,50.087,50.087h345.043\n\t\t\tc27.619,0,50.087-22.468,50.087-50.087V89.044C512,61.424,489.532,38.957,461.913,38.957z M333.913,256\n\t\t\tc0,16.99-5.129,32.79-13.879,45.991l42.379,42.379c6.521,6.521,6.521,17.087,0,23.609c-6.522,6.522-17.086,6.522-23.609,0\n\t\t\tL296.426,325.6c-13.201,8.75-29.001,13.879-45.991,13.879s-32.79-5.129-45.991-13.879l-42.379,42.379\n\t\t\tc-6.522,6.522-17.086,6.522-23.609,0c-6.521-6.521-6.521-17.087,0-23.609l42.379-42.379c-8.75-13.201-13.879-29.001-13.879-45.991\n\t\t\ts5.129-32.79,13.879-45.991l-42.379-42.379c-6.521-6.521-6.521-17.087,0-23.609c6.521-6.521,17.087-6.521,23.609,0l42.379,42.379\n\t\t\tc13.201-8.75,29.001-13.879,45.991-13.879s32.79,5.129,45.991,13.879l42.379-42.379c6.521-6.521,17.087-6.521,23.609,0\n\t\t\tc6.521,6.521,6.521,17.087,0,23.609l-42.379,42.379C328.784,223.21,333.913,239.011,333.913,256z M445.217,322.783\n\t\t\tc0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696V189.217c0-9.217,7.479-16.696,16.696-16.696\n\t\t\ts16.696,7.479,16.696,16.696V322.783z" })))));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React.createElement("path", { d: "M 700 738C 672 738 650 760 650 788C 650 815 672 837 700 837C 728 837 750 815 750 788C 750 760 728 738 700 738C 700 738 700 738 700 738M 250 738C 222 738 200 760 200 788C 200 815 222 837 250 837C 278 837 300 815 300 788C 300 760 278 738 250 738C 250 738 250 738 250 738M 700 688C 755 688 800 733 800 788C 800 842 755 887 700 887C 645 887 600 842 600 788C 600 733 645 688 700 688C 700 688 700 688 700 688M 250 688C 305 688 350 733 350 788C 350 842 305 887 250 887C 195 887 150 842 150 788C 150 733 195 688 250 688C 250 688 250 688 250 688M 110 263C 110 263 193 512 193 512C 193 512 679 512 679 512C 679 512 720 263 720 263C 720 263 110 263 110 263M 75 213C 75 213 750 213 750 213C 757 213 764 216 769 221C 774 227 776 234 775 242C 775 242 725 542 725 542C 723 554 712 562 700 563C 700 563 175 563 175 563C 164 562 155 556 151 545C 151 545 51 245 51 245C 49 238 50 229 55 223C 59 216 67 213 75 213C 75 213 75 213 75 213M 850 163C 850 163 925 163 925 163C 934 162 942 167 947 175C 951 183 951 192 947 200C 942 208 934 213 925 213C 925 213 871 213 871 213C 871 213 800 642 800 642C 798 654 787 662 775 663C 775 663 200 663 200 663C 191 663 183 658 178 650C 174 642 174 633 178 625C 183 617 191 612 200 613C 200 613 754 613 754 613C 754 613 825 183 825 183C 827 171 838 163 850 163C 850 163 850 163 850 163" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React.createElement("path", { d: "M 950 25C 964 25 975 36 975 50C 975 50 975 950 975 950C 975 964 964 975 950 975C 950 975 850 975 850 975C 836 975 825 964 825 950C 825 950 825 50 825 50C 825 36 836 25 850 25C 850 25 950 25 950 25M 750 450C 764 450 775 461 775 475C 775 475 775 950 775 950C 775 964 764 975 750 975C 750 975 650 975 650 975C 636 975 625 964 625 950C 625 950 625 475 625 475C 625 461 636 450 650 450C 650 450 750 450 750 450M 550 650C 564 650 575 661 575 675C 575 675 575 950 575 950C 575 964 564 975 550 975C 550 975 450 975 450 975C 436 975 425 964 425 950C 425 950 425 675 425 675C 425 661 436 650 450 650C 450 650 550 650 550 650M 350 750C 364 750 375 761 375 775C 375 775 375 950 375 950C 375 964 364 975 350 975C 350 975 250 975 250 975C 236 975 225 964 225 950C 225 950 225 775 225 775C 225 761 236 750 250 750C 250 750 350 750 350 750M 150 800C 164 800 175 811 175 825C 175 825 175 950 175 950C 175 964 164 975 150 975C 150 975 50 975 50 975C 36 975 25 964 25 950C 25 950 25 825 25 825C 25 811 36 800 50 800C 50 800 150 800 150 800" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React.createElement("path", { d: "M 300 192C 353 192 404 213 441 250C 500 317 500 317 559 250C 596 213 647 192 700 192C 753 192 804 213 841 250C 879 288 900 339 900 392C 900 443 880 492 845 529C 845 529 845 530 845 530C 845 530 550 846 550 846C 512 881 487 881 450 846C 450 846 159 533 159 533C 121 495 100 445 100 392C 100 339 121 288 159 250C 196 213 247 192 300 192C 300 192 300 192 300 192" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$L,
    GroupsIcon: Icon$M,
    HamburgerIcon: Icon$N,
    HamburgerCloseIcon: Icon$O,
    ChevronLeft: Icon$P,
    ChevronRight: Icon$Q,
    HomeIcon: Icon$R,
    IfoIcon: Icon$S,
    InfoIcon: Icon$T,
    LanguageIcon: Icon$U,
    LogoIcon: Logo,
    MoonIcon: Icon$V,
    MoreIcon: Icon$W,
    NftIcon: Icon$X,
    PoolIcon: Icon$Y,
    SunIcon: Icon$Z,
    TelegramIcon: Icon$_,
    TicketIcon: Icon$$,
    TradeIcon: Icon$10,
    TwitterIcon: Icon$11,
    DiscordIcon: Icon$12,
    YoutubeIcon: Icon$13,
    ShieldIcon: Icon$14,
    BushIcon: Icon$15,
    BridgeIcon: Icon$16,
    VaultIcon: Icon$17,
    StoreIcon: Icon$18,
    AnalyticIcon: Icon$19,
    DonateIcon: Icon$1a
});

var MenuButton = styled(Button)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$A;

var StyledLink$1 = styled(Link$1)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 55px;\n    height: 75px;\n    //margin-left: 30px;\n    display: none;\n    ", " {\n      /* display: block; */\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 55px;\n    height: 75px;\n    //margin-left: 30px;\n    display: none;\n    ", " {\n      /* display: block; */\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark, isPushed: isPushed })));
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var StyledMenuButton = styled(MenuButton)(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n    position: absolute;\n    left: ", ";\n    top: ", ";\n    padding: ", ";\n    border-right: 3px solid #42d785;\n    border-top: 3px solid #42d785;\n    border-bottom: 3px solid #42d785;\n    background-image: none;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    border: ", ";\n  "], ["\n    position: absolute;\n    left: ",
        ";\n    top: ",
        ";\n    padding: ",
        ";\n    border-right: 3px solid #42d785;\n    border-top: 3px solid #42d785;\n    border-bottom: 3px solid #42d785;\n    background-image: none;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    border: ", ";\n  "])), function () {
        switch (isMobile) {
            case true:
                return "20px";
            case false:
                return isPushed ? "240.2px" : "56.2px";
        }
        return "";
    }, function () {
        switch (isMobile) {
            case true:
                return "10px";
            case false:
                return "320px";
        }
        return "";
    }, function () {
        switch (isMobile) {
            case true:
                return 0;
            case false:
                return "50px 5px";
        }
        return "";
    }, function () { return (isMobile ? "none" : ""); });
    return !isMobile ? (React.createElement(Flex, null,
        React.createElement(StyledMenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? React.createElement(Icon$P, { width: "24px", color: "textSubtle" }) : React.createElement(Icon$Q, { width: "24px", color: "textSubtle" })),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo)))) : (React.createElement(Flex, null,
        React.createElement(StyledMenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$O, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$N, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$2 = React.memo(Logo$1, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$B, templateObject_2$c;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Certik Audit (In-Progress)",
        icon: "ShieldIcon",
        href: "https://twitter.com/Spirit_Swap/status/1367218225310818308",
        target: "_blank",
    },
    {
        label: "Bush",
        icon: "BushIcon",
        href: "/bush",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/Layer3Org/SpiritSwap/",
                target: "_blank",
            },
            {
                label: "Docs",
                href: "https://SpiritSwap.gitbook.io/spiritswap/",
            },
            {
                label: "Blog",
                href: "https://spiritswapdex.medium.com/",
            },
        ],
    },
];
var socials = [
    {
        label: "Youtube",
        icon: "YoutubeIcon",
        href: "https://www.youtube.com/channel/UCrKLtNctO0obN4-bDMGlFuQ/featured",
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        href: "https://t.me/spirit_swap",
    },
    {
        label: "Discord",
        icon: "DiscordIcon",
        href: "https://discord.gg/8FGd4nFQdT",
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/Spirit_Swap",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$C, templateObject_2$d, templateObject_3$7;

var Container$2 = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React.memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$D, templateObject_2$e;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  margin-top: 60px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  margin-top: 60px;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React.createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href, target: item.target }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, target: entry.target, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$E;

var PriceLink = styled.span(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  display: flex;\n\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n"], ["\n  display: flex;\n\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React.createElement(PriceLink, null,
        React.createElement(Icon$x, { width: "24px", mr: "8px" }),
        React.createElement(Text, { color: "textSubtle", style: { marginLeft: "5px" }, bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React.memo(CakePrice);
var templateObject_1$F;

var Icons$1 = IconModule;
var SocialLinks = function () { return (React.createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$1[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "7px" : 0;
    return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React.createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React.memo(SocialLinks, function () { return true; });

var Icons$2 = IconModule;
var LanguageIcon = Icons$2.LanguageIcon;
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { style: { backgroundImage: "none" }, variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
            React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto", backgroundImage: "none" } }, lang.language)); })));
};
var LangSelector$1 = React.memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container$4 = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 0;\n\n  background: ", ";\n  border-top: solid 2px #42d784;\n"], ["\n  flex: none;\n  padding: 8px 0;\n\n  background: ", ";\n  border-top: solid 2px #42d784;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#161f33" : "#E6FDFF");
});
var SettingsEntry = styled.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  //justify-content: space-between;\n  justify-content: flex-start;\n  height: ", "px;\n  //padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  //justify-content: space-between;\n  justify-content: flex-start;\n  height: ", "px;\n  //padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            React.createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd }),
            React.createElement(SocialLinks$1, null)),
        React.createElement(SettingsEntry, null,
            React.createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }))));
};
var templateObject_1$G, templateObject_2$f, templateObject_3$8;

var StyledPanel = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: fixed;\n  padding-top: \"80px\";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  /* border-right: ", ";\n  border-right: ", "; */\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-width: 3px;\n    border-image: linear-gradient(to top, #42d785, rgba(0, 0, 0, 0)) 0% 100%;\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: \"80px\";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background: ",
    ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  /* border-right: ", ";\n  border-right: ", "; */\n  border-right: ",
    ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-width: 3px;\n    border-image: linear-gradient(to top, #42d785, rgba(0, 0, 0, 0)) 0% 100%;\n    width: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.isDark
        ? "linear-gradient(to top, #151e31 40%, #1F2B46 80%)"
        : "linear-gradient(to top, #E6FDFF 40%, #FFFFFF 80%)";
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid #42d785" : "2px solid #42d785");
}, function (_a) {
    var isMobile = _a.isMobile;
    return (isMobile ? "2px solid #42d785" : "none");
}, function (_a) {
    var isMobile = _a.isMobile, isPushed = _a.isPushed;
    switch (isMobile) {
        case true:
            return isPushed ? "2px solid #42d785" : "none";
        case false:
            return isPushed ? "2px solid #42d785" : "2px solid #42d785";
    }
    return "";
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu, isMobile = props.isMobile;
    return (React.createElement(StyledPanel, { isMobile: isMobile, isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$H;
// const Panel: React.FC<Props> = (props) => {
//   const { isPushed, showMenu } = props;
//   const { isXl } = useMatchBreakpoints();
//   const isMobile = isXl === false;
//   const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
//     position: fixed;
//     //padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
//     padding-top: ${({ showMenu }) => (showMenu ? "80px" : "80px")};
//     top: 0;
//     left: 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     flex-shrink: 0;
//     width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
//     height: 100vh;
//     transition: padding-top 0.2s, width 0.2s;
//     //border-right: 2px solid #42d785;
//     z-index: 11;
//     overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
//     transform: translate3d(0, 0, 0);
//   `;
//   return (
//     <StyledPanel isPushed={isPushed} showMenu={showMenu}>
//       <PanelBody {...props} />
//       <PanelFooter {...props} />
//     </StyledPanel>
//   );
// };
// export default Panel;

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "MetaMask",
        icon: Icon$1b,
        connectorId: ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-around", backgroundImage: "none" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://app.gitbook.com/@layer3/s/spirit-swap/howto/connect-metamask", external: true },
            React.createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$I;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 0.5rem;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 0.5rem;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$J, templateObject_2$g;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://ftmscan.com/address/" + account, mr: "16px" }, "View on FTMScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { scale: "sm", variant: "subtle", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    var OwnButton = styled(Button)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n    border-radius: 0.5rem;\n    color: ", ";\n    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\n    border: solid 3px transparent;\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),\n      linear-gradient(90deg, #42d784, #60d5dc);\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n    box-shadow: ", ";\n  "], ["\n    border-radius: 0.5rem;\n    color: ", ";\n    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\n    border: solid 3px transparent;\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),\n      linear-gradient(90deg, #42d784, #60d5dc);\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n    box-shadow: ", ";\n  "])), function (_a) {
        var theme = _a.theme;
        return (theme.isDark ? "#6DD784" : "#0d0e21");
    }, function (_a) {
        var theme = _a.theme;
        return (theme.isDark ? "2px 1000px 1px #1f2b46 inset" : "2px 1000px 1px #fff inset");
    });
    return (React.createElement("div", null, account ? (React.createElement(OwnButton, { scale: "sm", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(OwnButton, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React.memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });
var templateObject_1$K;

var Wrapper$1 = styled.div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: fixed;\n  //top: ", ";\n  top: 0;\n  left: 0;\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background: ", ";\n  //border-bottom: ", ";\n  border-bottom: none;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  //top: ", ";\n  top: 0;\n  left: 0;\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background: ",
    ";\n  //border-bottom: ", ";\n  border-bottom: none;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var showMenu = _a.showMenu, theme = _a.theme;
    switch (showMenu) {
        case true:
            return theme.isDark
                ? "linear-gradient(to bottom, #151e31 40%, #1F2B46 80%)"
                : "linear-gradient(to bottom, #E6FDFF 40%, #FFFFFF 80%)";
        case false:
            return "transparent";
    }
    return "";
}, function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "solid 2px rgba(133, 133, 133, 0.1)" : "none");
});
var BodyWrapper = styled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  //margin-top: ", ";\n  margin-top: ", ";\n  //colortransition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  //margin-top: ", ";\n  margin-top: ", ";\n  //colortransition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : MENU_HEIGHT + "px");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links; _a.profile; var children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$2, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null, showMenu ? React.createElement(UserBlock$1, { account: account, login: login, logout: logout, isDark: isDark }) : React.createElement(React.Fragment, null))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$L, templateObject_2$h, templateObject_3$9, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$2;
var alertTypeMap = (_a$2 = {},
    _a$2[types.INFO] = variants$1.INFO,
    _a$2[types.SUCCESS] = variants$1.SUCCESS,
    _a$2[types.DANGER] = variants$1.DANGER,
    _a$2[types.WARNING] = variants$1.WARNING,
    _a$2);
var StyledToast = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n  margin-right: 30px;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n  margin-right: 30px;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    var titleSpecific = title;
    var descriptionSpecific = description;
    if (type === "danger") {
        titleSpecific = "Error";
    }
    if (description === "No Ethereum provider was found on window.ethereum.") {
        titleSpecific = "Provider Error";
        descriptionSpecific = "No provider was found.";
    }
    if (description === "Already processing eth_requestAccounts. Please wait.") {
        descriptionSpecific = "Already processing request. Please wait.";
    }
    console.log(title);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: titleSpecific, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, descriptionSpecific),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$M;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$N;

var ResetCSS = createGlobalStyle(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$O;

var baseColors = {
    failure: "#e02f58",
    primary: "#60D5DC",
    primaryBright: "#dd831c",
    primaryDark: "#c25e00",
    secondary: "#d6931a",
    success: "#dace31",
    warning: "#e68327",
};
var brandColors = {
    binance: "#F0B90B",
};
// export const lightColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   background: "#ffffff",
//   secondary: "#52D784", //
//   backgroundDisabled: "#E9EAEB",
//   contrast: "#191326",
//   invertedContrast: "#FFFFFF",
//   input: "#eeeaf4",
//   inputSecondary: "#d7caec",
//   tertiary: "#EFF4F5",
//   text: "#452A7A", //
//   farmBackground: "#F4F3F6", //
//   toggleBackground: "#E6FDFE", //
//   textDisabled: "#544786",
//   textSubtle: "#46357B",
//   borderColor: "#E9EAEB",
//   card: "#FFFFFF",
//   nav: "#333333", //
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
//   },
// };
// DELETE THIS ONE IF YOU WANT TO ACTIVATE THE TOGGLE THEME
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#52D784", background: "#1F2B46", backgroundDisabled: "#424037", contrast: "#FFFFFF", invertedContrast: "#0D0F22", input: "#483F5A", inputSecondary: "#8d8857", primaryDark: "#8f8104", tertiary: "#28444A", text: "#452A7A", farmBackground: "#F4F3F6", toggleBackground: "#E6FDFE", textDisabled: "#544786", textSubtle: "#46357B", borderColor: "#61634b", card: "#0D0F22", nav: "#0D0F22", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#52D784", background: "#1F2B46", backgroundDisabled: "#424037", contrast: "#FFFFFF", invertedContrast: "#0D0F22", input: "#483F5A", inputSecondary: "#8d8857", primaryDark: "#8f8104", tertiary: "#28444A", text: "#fcfae2", farmBackground: "#452A7A", toggleBackground: "#0D0F22", textDisabled: "#717161", textSubtle: "#6DD784", borderColor: "#61634b", card: "#0D0F22", nav: "#0D0F22", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var light$1 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$1 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$2 = {
    handleBackground: lightColors.card,
};
var dark$2 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    background: lightColors.nav,
    backgroundSidebar: lightColors.card,
    backgroundFooter: darkColors.background,
    hover: "#EEEAF4",
};
var dark$4 = {
    background: darkColors.nav,
    backgroundSidebar: darkColors.card,
    backgroundFooter: darkColors.background,
    hover: "#473d5d",
};

var light$5 = {
    background: lightColors.card,
};
var dark$5 = {
    background: darkColors.card,
};

var light$6 = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark$6 = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, colors: darkColors, card: dark$1, toggle: dark$3, nav: dark$4, modal: dark$5, radio: dark$2, tooltip: dark$6 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, colors: lightColors, card: light$1, toggle: light$3, nav: light$4, modal: light$5, radio: light$2, tooltip: light$6 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Box, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, ConnectorNames, Icon$n as CopyIcon, Dropdown, Icon$1 as ErrorIcon, FallingBunnies, Flex, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MetamaskIcon, Icon$t as MinusIcon, Modal, ModalProvider, Icon$u as NoProfileAvatarIcon, Icon$v as OpenNewIcon, Icon$x as PancakeRoundIcon, Icon$w as PancakesIcon, Icon$y as PrizeIcon, Progress, Icon$B as ProgressBunny, Radio, Icon$z as RemoveIcon, ResetCSS, Icon$F as SearchIcon, Skeleton, Spinner, Svg, Icon$G as SwapVertIcon, Icon$H as SyncAltIcon, Tag, Text, Icon$D as Ticket, Icon$E as TicketRound, ToastContainer, Toggle, Icon$A as VerifiedIcon, Icon$I as WarningIcon, Icon$C as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
