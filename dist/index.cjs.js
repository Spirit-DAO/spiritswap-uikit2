'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

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
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
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
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  /* border: 0;\n  border-radius: 0.5rem;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset; */\n  box-shadow: 2px 1000px 1px #212230 inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  border-radius: 0.5rem;\n  //color: ", ";\n\n  border: solid 3px transparent;\n  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),\n    linear-gradient(90deg, #42d784, #60d5dc);\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n  ", "\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  /* border: 0;\n  border-radius: 0.5rem;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset; */\n  box-shadow: 2px 1000px 1px #212230 inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  border-radius: 0.5rem;\n  //color: ", ";\n\n  border: solid 3px transparent;\n  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),\n    linear-gradient(90deg, #42d784, #60d5dc);\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n  ",
    "\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#fff" : "#0ad9e4");
}, function (props) {
    return !props.disabled
        ? ""
        : " \n    box-shadow: 2px 1000px 1px rgb(66,64,55) inset;\n    color: rgb(113,113,97);\n    background-image: none;\n    ";
}, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.layout, styledSystem.space);
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
    return (React__default['default'].createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
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

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  background-image: none;\n  width: ", ";\n"], ["\n  padding: 0;\n  background-image: none;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return React__default['default'].createElement("img", __assign({}, props, { width: "220px", height: "50px", src: "/images/mobile-logo.png" }));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M222.46,134.29s-11-48.07-55.48-65.87S60.16,41.12,18.62,72,33.46,209.66,70.84,214.4,167,197.79,212.08,240.51,228.32,151.63,222.46,134.29Z", transform: "translate(-4 -51.89)", fill: "#9c9b9b" }),
            React__default['default'].createElement("path", { d: "M189,127.17C174.2,91.56,106.45,73.76,66.69,89.78s8.75,83.08,21.81,92.58c12.71,9.25,57.11,19,68.39,15.43S192.86,136.59,189,127.17Z", transform: "translate(-4 -51.89)", fill: "#706f6e" })),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M293.54,134.29s11-48.07,55.48-65.87S455.84,41.12,497.38,72,482.54,209.66,445.16,214.4,349,197.79,303.92,240.51,287.68,151.63,293.54,134.29Z", transform: "translate(-4 -51.89)", fill: "#a7a5a5" }),
            React__default['default'].createElement("path", { d: "M327,127.17c14.76-35.61,82.51-53.41,122.27-37.39s-8.75,83.08-21.81,92.58c-12.71,9.25-57.12,19-68.39,15.43S323.14,136.59,327,127.17Z", transform: "translate(-4 -51.89)", fill: "#868686" })),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M259.41,482.28c109.57,0,242.08-80.54,214.87-192.9C465,251.11,457.8,207,457.8,207A139.36,139.36,0,0,0,318.45,67.65s-37.52,5.5-59.58,5.5-59.58-5.5-59.58-5.5A139.36,139.36,0,0,0,59.94,207s-7.21,44.1-16.48,82.37c-27.22,112.36,105.3,192.9,214.87,192.9Z", transform: "translate(-4 -51.89)", fill: "#f2f2f2" }),
            React__default['default'].createElement("path", { d: "M258.73,73.15c-22.07,0-59.44-5.5-59.44-5.5A139.36,139.36,0,0,0,59.94,207s-7.21,44.1-16.48,82.37c-27.22,112.36,105.3,192.9,214.87,192.9h.4Z", transform: "translate(-4 -51.89)", fill: "#fff" })),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M148.37,279.69c-5.75,1.59-13.51-3.11-15.1-8.86s1.74-13.31,7.7-13.6c7.9-.4,13.34,3.42,14.93,9.17A10.8,10.8,0,0,1,148.37,279.69Zm.1-17.76a3.34,3.34,0,1,0,3.11,3.34A3.24,3.24,0,0,0,148.47,261.93Z", transform: "translate(-4 -51.89)", fill: "#585857" }),
                React__default['default'].createElement("path", { d: "M356.34,266.4c1.59-5.75,7-9.57,14.93-9.17,6,.29,9.28,7.86,7.7,13.6s-9.35,10.45-15.1,8.86A10.8,10.8,0,0,1,356.34,266.4Zm13.87-1.13a3.12,3.12,0,1,0,3.11-3.34A3.22,3.22,0,0,0,370.21,265.27Z", transform: "translate(-4 -51.89)", fill: "#585857" })),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M306.69,402.75c0-30.05-48-4.59-48-23.52,0,18.93-48-6.53-48,23.52s21.47,47,48,47S306.69,432.8,306.69,402.75Z", transform: "translate(-4 -51.89)", fill: "#bdbcbc" }),
                React__default['default'].createElement("path", { d: "M306,397.28c-5.74-21.28-47.3-.43-47.3-18,0,17.45-40.76-2.83-47.12,17.45-.54,1.72,16,15.08,47.23,15.08S306.46,398.86,306,397.28Z", transform: "translate(-4 -51.89)", fill: "#cdcccc" }),
                React__default['default'].createElement("path", { d: "M258.75,379.47c0-.08,0-.15,0-.24,0,18.93-48-6.53-48,23.52s21.47,47,48,47h0Z", transform: "translate(-4 -51.89)", fill: "#b3b3b3" }),
                React__default['default'].createElement("path", { d: "M258.75,379.49c0-.09,0-.17,0-.26,0,17.45-40.76-2.83-47.12,17.45-.54,1.72,16,15.05,47.14,15.08Z", transform: "translate(-4 -51.89)", fill: "#c3c2c2" })),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M258.84,235.15a53.48,53.48,0,0,1,22.07,4.75c25.79,11.62,38.15,43.21,30.1,71.78l-.22.8a51.8,51.8,0,0,0-1.41,21.42h0a42.25,42.25,0,0,1-1.36,19c-6.9,21.14-25.75,36-47.55,36h-3c-21.8,0-40.65-14.84-47.55-36a42.39,42.39,0,0,1-1.35-19h0a52,52,0,0,0-1.41-21.42l-1.38-4.91c-3.24-11.5-3.52-23.9.17-35.25,7.11-21.82,24.41-37.17,48-37.17Z", transform: "translate(-4 -51.89)", fill: "#4d4d4c" }),
                React__default['default'].createElement("path", { d: "M258.73,235.15H254c-23.59,0-40.89,15.35-48,37.17-3.69,11.35-3.41,23.75-.17,35.25l1.38,4.91a52,52,0,0,1,1.41,21.42,42.39,42.39,0,0,0,1.35,19c6.9,21.14,25.75,36,47.55,36h1.26Z", transform: "translate(-4 -51.89)", fill: "#585857" })))));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default['default'].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default['default'].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default['default'].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default['default'].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default['default'].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default['default'].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default['default'].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default['default'].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default['default'].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default['default'].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default['default'].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default['default'].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$u = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { d: "M48,55.29a28.44,28.44,0,0,1-39.78-.7l-.79-.83A28.43,28.43,0,0,1,8.88,14C19.3,4.14,56.83,1.43,63.07,1.05L64,1s0,.32-.1.89C63.13,8.09,58.37,45.42,48,55.29Z", transform: "translate(0 -1)", fill: "#36b397" }),
        React__default['default'].createElement("path", { d: "M63.84,1.91,2.14,60.31l-.79-.84L63.05,1.08,64,1S63.92,1.32,63.84,1.91Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React__default['default'].createElement("path", { d: "M38.31,23.87c-.57,1.31-1.17,2.33-1.34,2.26a5.63,5.63,0,0,1,.74-2.52L43.18,10.9c.57-1.31,1.17-2.33,1.33-2.26s-.16,1.2-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React__default['default'].createElement("path", { d: "M29.63,32.08c-.57,1.31-1.16,2.33-1.33,2.25A5.61,5.61,0,0,1,29,31.82l8.37-19.44c.56-1.31,1.17-2.33,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React__default['default'].createElement("path", { d: "M21,40.29c-.56,1.31-1.17,2.33-1.33,2.26A5.51,5.51,0,0,1,20.36,40L32,13.08c.57-1.31,1.17-2.34,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React__default['default'].createElement("path", { d: "M12.29,48.5c-.57,1.31-1.17,2.33-1.33,2.26s.16-1.21.73-2.52L25.33,16.57c.57-1.31,1.17-2.33,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React__default['default'].createElement("path", { d: "M39.72,25.36c-1.35.5-2.39,1-2.33,1.2S38.6,26.46,40,26l13-4.77c1.34-.49,2.39-1,2.32-1.2s-1.21.1-2.55.59Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React__default['default'].createElement("path", { d: "M31.05,33.57c-1.35.49-2.39,1-2.34,1.21a5.78,5.78,0,0,0,2.56-.6l19.87-7.29c1.34-.49,2.39-1,2.33-1.21a5.62,5.62,0,0,0-2.56.6Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React__default['default'].createElement("path", { d: "M22.37,41.78C21,42.27,20,42.82,20,43s1.22-.1,2.56-.59L50.15,32.28c1.33-.5,2.39-1,2.33-1.21a5.67,5.67,0,0,0-2.56.59Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React__default['default'].createElement("path", { d: "M13.71,50c-1.35.49-2.4,1-2.34,1.21a5.59,5.59,0,0,0,2.55-.6L46.29,38.71c1.34-.49,2.39-1,2.33-1.2a5.64,5.64,0,0,0-2.56.6Z", transform: "translate(0 -1)", fill: "#125f4f" })));
};

var Icon$x = function (props) {
    return React__default['default'].createElement("img", __assign({}, props, { width: "24px", height: "24px", src: "/images/price-token.png" }));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M3.64,15.33a1.67,1.67,0,0,1-1.83-1.07c-.19-.7.21-1.62.94-1.66a1.66,1.66,0,0,1,1.81,1.12A1.31,1.31,0,0,1,3.64,15.33Zm0-2.15a.39.39,0,0,0-.38.4.4.4,0,0,0,.38.41A.4.4,0,0,0,4,13.58.39.39,0,0,0,3.66,13.18Z", fill: "#585857" }),
                React__default['default'].createElement("path", { d: "M28.89,13.72a1.66,1.66,0,0,1,1.82-1.12c.72,0,1.12,1,.93,1.66a1.66,1.66,0,0,1-1.83,1.07A1.31,1.31,0,0,1,28.89,13.72Zm1.69-.14a.38.38,0,1,0,.75,0,.38.38,0,1,0-.75,0Z", fill: "#585857" })),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M22.86,30.27c0-3.65-5.82-.56-5.82-2.85,0,2.29-5.82-.8-5.82,2.85A5.47,5.47,0,0,0,17,36,5.47,5.47,0,0,0,22.86,30.27Z", fill: "#bdbcbc" }),
                React__default['default'].createElement("path", { d: "M22.79,29.61C22.09,27,17,29.56,17,27.42c0,2.12-4.95-.35-5.72,2.12-.06.2,1.94,1.83,5.74,1.83S22.84,29.8,22.79,29.61Z", fill: "#cdcccc" }),
                React__default['default'].createElement("path", { d: "M17,27.45v0c0,2.29-5.82-.8-5.82,2.85A5.47,5.47,0,0,0,17,36h0Z", fill: "#b3b3b3" }),
                React__default['default'].createElement("path", { d: "M17,27.45v0c0,2.12-4.95-.35-5.72,2.12-.06.2,1.94,1.82,5.72,1.83Z", fill: "#c3c2c2" })),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M17.06,9.93a6.54,6.54,0,0,1,2.68.57c3.13,1.41,4.63,5.25,3.65,8.72l0,.09a6.52,6.52,0,0,0-.17,2.6h0A5.13,5.13,0,0,1,23,24.22a6.16,6.16,0,0,1-5.78,4.37h-.36a6.14,6.14,0,0,1-5.77-4.37A5.14,5.14,0,0,1,11,21.91h0a6.18,6.18,0,0,0-.17-2.6l-.17-.59a7.51,7.51,0,0,1,0-4.28,6.09,6.09,0,0,1,5.83-4.51Z", fill: "#4d4d4c" }),
                React__default['default'].createElement("path", { d: "M17,9.93h-.58a6.09,6.09,0,0,0-5.83,4.51,7.51,7.51,0,0,0,0,4.28l.17.59a6.18,6.18,0,0,1,.17,2.6,5.14,5.14,0,0,0,.17,2.31,6.14,6.14,0,0,0,5.77,4.37H17Z", fill: "#585857" })))));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, { width: "30", height: "30", color: "#6DD784", viewBox: "0 0 1000 1000", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("path", { d: " M 638 138C 664 138 682 164 673 188C 673 188 617 338 617 338C 617 338 663 338 663 338C 692 338 710 370 695 395C 695 395 420 845 420 845C 410 860 391 866 375 860C 358 854 348 837 350 819C 350 819 394 538 394 538C 394 538 338 538 338 538C 313 538 296 515 301 492C 301 492 376 167 376 167C 380 150 395 138 413 138C 413 138 638 138 638 138" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, { width: "47", height: "47", color: "#6DD784", viewBox: "0 0 1000 1000", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("path", { d: " M 638 138C 664 138 682 164 673 188C 673 188 617 338 617 338C 617 338 663 338 663 338C 692 338 710 370 695 395C 695 395 420 845 420 845C 410 860 391 866 375 860C 358 854 348 837 350 819C 350 819 394 538 394 538C 394 538 338 538 338 538C 313 538 296 515 301 492C 301 492 376 167 376 167C 380 150 395 138 413 138C 413 138 638 138 638 138" })));
};

var Box = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$4;

var Flex = styled__default['default'](Box)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
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
var IconLabel = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 5px 0 0 5px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 5px 0 0 5px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 24 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 24px;\n  padding-right: ", ";\n  padding-top: 16px;\n"], ["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 24px;\n  padding-right: ", ";\n  padding-top: 16px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "24px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 3px ", ";\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 3px ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { fill: "white", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$k, { width: "24px", fill: "white" }))))));
};
var templateObject_1$6, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$7, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  //background-color: ", ";\n  display: inline-flex;\n  border-radius: 0.5rem;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  //background-color: ", ";\n  display: inline-flex;\n  border-radius: 0.5rem;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$8;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, $colorKey = _a.$colorKey;
    return theme.colors[$colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants.TOGGLE : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", "$colorKey": variant === variants.TOGGLE ? "textSubtle" : "primary" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
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
var StyledCard = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  /* border-radius: 32px; */\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  /* border-radius: 32px; */\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$a;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardHeader = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var CardFooter = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$d;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
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
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 0.5rem;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 0.5rem;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
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
var DropdownContent = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
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
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$g, templateObject_2$3;

var bunnyFall = styled.keyframes(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
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
    var bunnies = __spreadArrays(Array(count)).map(function (_, index) { return (React__default['default'].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Icon$q, { width: size, height: size }))); });
    return React__default['default'].createElement("div", null, bunnies);
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
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
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

var Wrapper = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n"])), function (_a) {
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
    var imgRef = React.useRef(null);
    React.useEffect(function () {
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
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
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
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
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
var Input = styled__default['default'].input(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
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

var GridLayout = styled__default['default'].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
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

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
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
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
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
}, styledSystem.space);
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
var StyledTag = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 0.5rem;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
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
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$q;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$v, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$r, templateObject_2$6;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
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
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$B, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var Icon$L = function (props) {
    return React__default['default'].createElement("img", { src: "/images/pageloader.png" });
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M103,31.17V31c0-11.63-8.41-22.27-21-22.27-10,0-15.87,7.22-17.86,14h0c-2-6.76-7.81-14-17.86-14-12.64,0-21,10.64-21,22.27v.18c-.07,2.53,0,28.27,38.9,49.26h0C103,59.44,103.06,33.7,103,31.17Z", transform: "translate(-25.17 -8.72)", fill: "#d56799" })));
};

var float = styled.keyframes(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled__default['default'].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](Icon$M)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 40px;\n  animation: ", " 3s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 40px;\n  animation: ", " 3s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var FloatingPanIcon = styled__default['default'](Icon$L)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 40px;\n"], ["\n  position: absolute;\n  top: 40px;\n"])));
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React__default['default'].createElement(FloatingPanIcon, { width: size + "px" })));
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

var waves = styled.keyframes(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
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
var Handle = styled__default['default'].div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale$2("handleHeight"), getScale$2("handleLeft"), getScale$2("handleTop"), getScale$2("handleWidth"));
var Input$1 = styled__default['default'].input(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale$2("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 0.5rem;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
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
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input$1, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
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
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
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
    var _a = React.useReducer(reducer, {
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
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
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
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
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
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
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
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
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

var StyledModal = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
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
var ModalHeader = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$k, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$w, templateObject_2$a, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 20, 40, 0.8);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 20, 40, 0.8);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
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

var ModalWrapper = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
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
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$y;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React__default['default'].createElement("path", { d: "M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 200 450C 200 435 210 425 225 425C 225 425 425 425 425 425C 425 425 425 225 425 225C 425 210 435 200 450 200C 450 200 550 200 550 200C 565 200 575 210 575 225C 575 225 575 425 575 425C 575 425 775 425 775 425C 790 425 800 435 800 450C 800 450 800 550 800 550C 800 565 790 575 775 575C 775 575 575 575 575 575C 575 575 575 775 575 775C 575 790 565 800 550 800C 550 800 450 800 450 800C 435 800 425 790 425 775C 425 775 425 575 425 575C 425 575 225 575 225 575C 210 575 200 565 200 550C 200 550 200 450 200 450" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

styled__default['default'].text(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n"], ["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n"])));
styled__default['default'].tspan(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n  letter-spacing: 0em;\n"], ["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n  letter-spacing: 0em;\n"])));
var IconContainer = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
// const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
//   const textColor = isDark ? "#FFFFFF" : "#432918";
//   return <img {...props} width="220px" height="50px" src="/images/logo.png" />;
// };
var Logo = function (_a) {
    _a.isDark; var isPushed = _a.isPushed, props = __rest(_a, ["isDark", "isPushed"]);
    return (React__default['default'].createElement(IconContainer, null,
        React__default['default'].createElement("img", __assign({}, props, { src: "/images/spiritswap_logo.png", alt: "", width: "80", height: "116" })),
        isPushed ? (React__default['default'].createElement("span", { className: "desktop-icon", style: { color: "#52D784", marginLeft: "30px", fontSize: "20px" } },
            "Spirit",
            React__default['default'].createElement("span", { style: { color: "#60D5DC" } }, "Swap"))) : (React__default['default'].createElement(React__default['default'].Fragment, null))));
};
var templateObject_1$z, templateObject_2$b, templateObject_3$6;

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "24px", height: "24px", viewBox: "0 0 576 617", "enable-background": "new 0 0 576 617", style: { marginRight: "8px" } },
        " ",
        React__default['default'].createElement("image", { id: "image0", width: "576", height: "617", x: "0", y: "0", href: "data:image/png;base64,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\nWp1BRRRQAUUUUAFFFFABRRRQAUUUUAf/2QMzDjwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDYt\nMDNUMTc6MzQ6MTkrMDA6MDCG59nLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA2LTAzVDE3OjM0\nOjE5KzAwOjAw97phdwAAABp0RVh0ZXhpZjpCaXRzUGVyU2FtcGxlADgsIDgsIDgS7T4nAAAAEXRF\nWHRleGlmOkNvbG9yU3BhY2UAMQ+bAkkAAAAhdEVYdGV4aWY6RGF0ZVRpbWUAMjAyMTowNjowMyAx\nNDozMjo0MMmRBIUAAAATdEVYdGV4aWY6RXhpZk9mZnNldAAxOTBMjvPCAAAAFHRFWHRleGlmOklt\nYWdlTGVuZ3RoADYxN/+pm2IAAAATdEVYdGV4aWY6SW1hZ2VXaWR0aAA1NzYPzqKmAAAAGnRFWHRl\neGlmOlNvZnR3YXJlAEdJTVAgMi4xMC4yNAF9QtsAAAAkdEVYdGV4aWY6dGh1bWJuYWlsOkJpdHNQ\nZXJTYW1wbGUAOCwgOCwgOCAb9FMAAAAcdEVYdGV4aWY6dGh1bWJuYWlsOkNvbXByZXNzaW9uADb5\nZXBXAAAAHnRFWHRleGlmOnRodW1ibmFpbDpJbWFnZUxlbmd0aAAyNTZQcDADAAAAHXRFWHRleGlm\nOnRodW1ibmFpbDpJbWFnZVdpZHRoADIzODnkcJUAAAAodEVYdGV4aWY6dGh1bWJuYWlsOkpQRUdJ\nbnRlcmNoYW5nZUZvcm1hdAAzMTZbUp8FAAAAL3RFWHRleGlmOnRodW1ibmFpbDpKUEVHSW50ZXJj\naGFuZ2VGb3JtYXRMZW5ndGgANTEyMPTx2nkAAAAqdEVYdGV4aWY6dGh1bWJuYWlsOlBob3RvbWV0\ncmljSW50ZXJwcmV0YXRpb24ANhIVihoAAAAgdEVYdGV4aWY6dGh1bWJuYWlsOlNhbXBsZXNQZXJQ\naXhlbAAz4dfNWgAAABt0RVh0aWNjOmNvcHlyaWdodABQdWJsaWMgRG9tYWlutpExWwAAACJ0RVh0\naWNjOmRlc2NyaXB0aW9uAEdJTVAgYnVpbHQtaW4gc1JHQkxnQRMAAAAVdEVYdGljYzptYW51ZmFj\ndHVyZXIAR0lNUEyekMoAAAAOdEVYdGljYzptb2RlbABzUkdCW2BJQwAAAABJRU5ErkJggg==" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React__default['default'].createElement("path", { d: "M 386 203C 387 203 388 203 388 203C 388 203 395 212 395 212C 267 248 209 304 209 304C 209 304 224 296 250 284C 326 250 386 241 411 239C 415 238 419 238 423 238C 466 232 515 231 566 236C 633 244 705 264 779 304C 779 304 723 251 603 214C 603 214 612 203 612 203C 612 203 709 201 811 277C 811 277 913 462 913 689C 913 689 853 792 697 797C 697 797 671 767 650 740C 743 714 778 656 778 656C 749 675 721 688 697 697C 661 712 627 722 594 728C 526 740 464 737 411 727C 371 719 336 708 307 697C 291 690 273 682 255 673C 253 671 251 670 249 669C 248 668 247 668 246 667C 233 660 226 655 226 655C 226 655 260 711 350 738C 329 765 303 797 303 797C 146 792 87 689 87 689C 87 462 189 277 189 277C 284 206 375 203 386 203C 386 203 386 203 386 203M 368 467C 327 467 296 502 296 545C 296 588 328 624 368 624C 408 624 440 588 440 545C 441 502 408 467 368 467C 368 467 368 467 368 467M 626 467C 586 467 554 502 554 545C 554 588 586 624 626 624C 666 624 698 588 698 545C 698 502 666 467 626 467C 626 467 626 467 626 467" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { d: "M255.7,446.3c-53.3,0.3-106.6-0.4-159.8-3.3c-17.3-1-34.6-2.5-50.3-11c-10.5-5.7-18.6-13.6-23.7-24.8   C13.3,388.6,10.6,369,9,349c-3.4-41.3-3.6-82.6-1.8-123.8c0.9-21.9,1.6-44,6.8-65.5c2-8.4,4.9-16.6,8.8-24.4   c9.2-18.3,25.2-27.4,44.5-31.2c16.2-3.2,32.8-3.1,49.3-3.8c55.9-2.3,111.9-3.5,167.9-2.9c43.1,0.5,86.3,1.6,129.4,3.8   c13.3,0.7,26.7,0.9,39.4,5.6c17.2,6.4,30,17.2,36.9,34.7c6.7,16.8,9.3,34.2,10.7,52.1c3.9,48.6,4,97.2,0.8,145.8   c-1.1,16.4-2.2,32.8-6.5,48.9c-9.7,37-32.8,51.5-66.7,53.8c-36.2,2.4-72.5,3.7-108.8,4.2C298.4,446.5,277,446.3,255.7,446.3z    M203.2,344c48.4-26.5,96.2-52.7,144.8-79.3c-48.7-26.7-96.5-52.8-144.8-79.3C203.2,238.7,203.2,291,203.2,344z" })));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-60 -30 600 600", width: "24px", color: "text" }, props),
        React__default['default'].createElement("g", { id: "surface1" },
            React__default['default'].createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React__default['default'].createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24", width: "24px", color: "text" }, props),
        React__default['default'].createElement("path", { d: "M12,23.87H12a.51.51,0,0,1-.42-.57c.75-4.65,3.07-8.39,7.53-12.12a.49.49,0,0,1,.7.06.51.51,0,0,1-.06.71c-4.26,3.56-6.48,7.12-7.18,11.51A.5.5,0,0,1,12,23.87Z" }),
        React__default['default'].createElement("path", { d: "M12,23.87a.51.51,0,0,1-.47-.31,19.08,19.08,0,0,0-1.53-3,7,7,0,0,1-6-2.3c-1.9-2-2.66-4.67-1.89-6.73a.46.46,0,0,1,.31-.3c2.09-.7,4.77.16,6.67,2.12s2.65,4.68,1.88,6.74a.37.37,0,0,1,0,.11,20.14,20.14,0,0,1,1.51,3,.5.5,0,0,1-.27.65A.46.46,0,0,1,12,23.87ZM3,12.13a5.85,5.85,0,0,0,1.75,5.46,6.24,6.24,0,0,0,4.62,2.06,17.2,17.2,0,0,0-3.73-3.9.5.5,0,0,1,.59-.81,18.54,18.54,0,0,1,4,4.2,6.12,6.12,0,0,0-1.84-5.07A5.88,5.88,0,0,0,3,12.13Z" }),
        React__default['default'].createElement("path", { d: "M15.11,18.37a5.43,5.43,0,0,1-1.72-.27.51.51,0,0,1-.31-.3c-.88-2.34,0-5.42,2.13-7.67S20.4,6.9,22.78,7.69a.47.47,0,0,1,.31.29c.88,2.35,0,5.43-2.13,7.67A8.41,8.41,0,0,1,15.11,18.37Zm-1.17-1.15c2,.53,4.48-.36,6.3-2.26s2.6-4.43,2-6.39c-2-.53-4.48.36-6.3,2.26S13.33,15.26,13.94,17.22Z" }),
        React__default['default'].createElement("path", { d: "M8.84,10a.51.51,0,0,1-.5-.5V7.81a.51.51,0,0,1,.5-.5.5.5,0,0,1,.5.5V9.46A.5.5,0,0,1,8.84,10Zm3.78-1a.5.5,0,0,1-.43-.25l-.83-1.43a.51.51,0,0,1,.19-.68.5.5,0,0,1,.68.18l.82,1.43a.49.49,0,0,1-.18.68A.55.55,0,0,1,12.62,9ZM8.84,6.62A4.72,4.72,0,0,1,4.13,1.9,4.58,4.58,0,0,1,4.35.48.5.5,0,0,1,5,.15.51.51,0,0,1,5.3.78,3.85,3.85,0,0,0,5.13,1.9a3.72,3.72,0,1,0,7.43,0A3.55,3.55,0,0,0,12.38.78a.51.51,0,0,1,.33-.63.51.51,0,0,1,.63.33,4.89,4.89,0,0,1,.22,1.42A4.73,4.73,0,0,1,8.84,6.62Z" }),
        React__default['default'].createElement("path", { d: "M15.39,6.18a.43.43,0,0,1-.25-.07l-1.43-.82a.49.49,0,0,1-.18-.68.51.51,0,0,1,.68-.19l1.43.83a.5.5,0,0,1-.25.93Zm1-3.78H14.75a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H16.4a.51.51,0,0,1,.5.5A.5.5,0,0,1,16.4,2.4Z" }),
        React__default['default'].createElement("path", { d: "M5.06,9a.59.59,0,0,1-.25-.07.5.5,0,0,1-.18-.68l.83-1.43a.5.5,0,0,1,.86.5L5.5,8.7A.51.51,0,0,1,5.06,9Z" }),
        React__default['default'].createElement("path", { d: "M2.3,6.18a.5.5,0,0,1-.25-.93l1.42-.83a.52.52,0,0,1,.69.19A.5.5,0,0,1,4,5.29l-1.42.82A.47.47,0,0,1,2.3,6.18ZM2.93,2.4H1.29a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H2.93a.5.5,0,0,1,.5.5A.5.5,0,0,1,2.93,2.4Z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512.001 512.001" }, props),
        React__default['default'].createElement("path", { d: "M511.964,350.767c-0.462-10.89-5.138-20.947-13.165-28.32c-4.036-3.707-8.148-7.309-12.327-10.812v-78.701\n\t\t\tc0-4.205-1.765-8.217-4.865-11.058c-18.242-16.72-38.781-30.858-61.368-42.285v-18.067c0-8.284-6.716-15-15-15s-15,6.716-15,15\n\t\t\tv4.956c-3.928-1.469-7.894-2.885-11.923-4.208c-18.225-5.987-37.558-10.503-57.856-13.532v-15.042c0-8.284-6.716-15-15-15\n\t\t\ts-15,6.716-15,15v11.711c-11.199-0.84-22.641-1.273-34.321-1.273c-12.076,0-23.897,0.466-35.459,1.364v-11.802\n\t\t\tc0-8.284-6.716-15-15-15s-15,6.716-15,15v15.218c-19.897,3.028-38.867,7.479-56.763,13.355c-4.403,1.446-8.735,2.993-13.016,4.612\n\t\t\tv-5.359c0-8.284-6.716-15-15-15s-15,6.716-15,15v18.618c-22.167,11.334-42.328,25.29-60.243,41.745\n\t\t\tc-3.095,2.843-4.855,6.854-4.853,11.056l0.047,78.414c-4.292,3.589-8.51,7.286-12.651,11.089\n\t\t\tC5.175,329.819,0.5,339.877,0.038,350.767c-0.462,10.89,3.344,21.308,10.716,29.333c15.219,16.571,41.083,17.67,57.656,2.449\n\t\t\tc6.837-6.28,14.163-12.348,21.774-18.034c48.179-35.989,105.517-55.012,165.816-55.012s117.637,19.022,165.816,55.012\n\t\t\tc7.605,5.681,14.932,11.748,21.775,18.034c7.55,6.935,17.351,10.754,27.597,10.754c11.397,0,22.353-4.813,30.058-13.202\n\t\t\tC508.62,372.074,512.426,361.656,511.964,350.767z M90.902,268.059c-12.041,6.243-23.746,13.182-35.062,20.795l-0.03-49.214\n\t\t\tc10.88-9.46,22.585-17.903,35.092-25.327V268.059z M190.681,233.858c-23.963,4.413-47.329,11.251-69.779,20.368v-55.095\n\t\t\tc21.367-9.129,44.646-15.776,69.779-19.906V233.858z M290.461,229.545c-11.4-1.091-22.896-1.652-34.46-1.652\n\t\t\tc-11.855,0-23.638,0.596-35.32,1.742v-54.068c11.484-0.945,23.299-1.432,35.459-1.432c11.758,0,23.192,0.459,34.321,1.345V229.545\n\t\t\tz M390.24,253.88c-22.456-9.052-45.822-15.821-69.779-20.173v-54.65c25.111,4.049,48.391,10.602,69.779,19.629V253.88z\n\t\t\t M456.473,289.062c-11.681-7.876-23.779-15.033-36.233-21.447v-53.928c12.927,7.579,25.016,16.23,36.233,25.965V289.062z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M250.435,205.913c-27.619,0-50.087,22.468-50.087,50.087s22.468,50.087,50.087,50.087\n\t\t\tc27.619,0,50.087-22.468,50.087-50.087S278.054,205.913,250.435,205.913z M250.435,272.696c-9.22,0-16.696-7.475-16.696-16.696\n\t\t\tc0-9.22,7.475-16.696,16.696-16.696c9.22,0,16.696,7.475,16.696,16.696C267.13,265.22,259.655,272.696,250.435,272.696z" }))),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M461.913,38.957H116.87c-27.619,0-50.087,22.468-50.087,50.087v16.696H16.696C7.479,105.739,0,113.218,0,122.435v100.174\n\t\t\tc0,9.217,7.479,16.696,16.696,16.696h50.087v33.391H16.696C7.479,272.696,0,280.174,0,289.391v100.174\n\t\t\tc0,9.217,7.479,16.696,16.696,16.696h50.087v16.696c0,27.619,22.468,50.087,50.087,50.087h345.043\n\t\t\tc27.619,0,50.087-22.468,50.087-50.087V89.044C512,61.424,489.532,38.957,461.913,38.957z M333.913,256\n\t\t\tc0,16.99-5.129,32.79-13.879,45.991l42.379,42.379c6.521,6.521,6.521,17.087,0,23.609c-6.522,6.522-17.086,6.522-23.609,0\n\t\t\tL296.426,325.6c-13.201,8.75-29.001,13.879-45.991,13.879s-32.79-5.129-45.991-13.879l-42.379,42.379\n\t\t\tc-6.522,6.522-17.086,6.522-23.609,0c-6.521-6.521-6.521-17.087,0-23.609l42.379-42.379c-8.75-13.201-13.879-29.001-13.879-45.991\n\t\t\ts5.129-32.79,13.879-45.991l-42.379-42.379c-6.521-6.521-6.521-17.087,0-23.609c6.521-6.521,17.087-6.521,23.609,0l42.379,42.379\n\t\t\tc13.201-8.75,29.001-13.879,45.991-13.879s32.79,5.129,45.991,13.879l42.379-42.379c6.521-6.521,17.087-6.521,23.609,0\n\t\t\tc6.521,6.521,6.521,17.087,0,23.609l-42.379,42.379C328.784,223.21,333.913,239.011,333.913,256z M445.217,322.783\n\t\t\tc0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696V189.217c0-9.217,7.479-16.696,16.696-16.696\n\t\t\ts16.696,7.479,16.696,16.696V322.783z" })))));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React__default['default'].createElement("path", { d: "M 700 738C 672 738 650 760 650 788C 650 815 672 837 700 837C 728 837 750 815 750 788C 750 760 728 738 700 738C 700 738 700 738 700 738M 250 738C 222 738 200 760 200 788C 200 815 222 837 250 837C 278 837 300 815 300 788C 300 760 278 738 250 738C 250 738 250 738 250 738M 700 688C 755 688 800 733 800 788C 800 842 755 887 700 887C 645 887 600 842 600 788C 600 733 645 688 700 688C 700 688 700 688 700 688M 250 688C 305 688 350 733 350 788C 350 842 305 887 250 887C 195 887 150 842 150 788C 150 733 195 688 250 688C 250 688 250 688 250 688M 110 263C 110 263 193 512 193 512C 193 512 679 512 679 512C 679 512 720 263 720 263C 720 263 110 263 110 263M 75 213C 75 213 750 213 750 213C 757 213 764 216 769 221C 774 227 776 234 775 242C 775 242 725 542 725 542C 723 554 712 562 700 563C 700 563 175 563 175 563C 164 562 155 556 151 545C 151 545 51 245 51 245C 49 238 50 229 55 223C 59 216 67 213 75 213C 75 213 75 213 75 213M 850 163C 850 163 925 163 925 163C 934 162 942 167 947 175C 951 183 951 192 947 200C 942 208 934 213 925 213C 925 213 871 213 871 213C 871 213 800 642 800 642C 798 654 787 662 775 663C 775 663 200 663 200 663C 191 663 183 658 178 650C 174 642 174 633 178 625C 183 617 191 612 200 613C 200 613 754 613 754 613C 754 613 825 183 825 183C 827 171 838 163 850 163C 850 163 850 163 850 163" })));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React__default['default'].createElement("path", { d: "M 950 25C 964 25 975 36 975 50C 975 50 975 950 975 950C 975 964 964 975 950 975C 950 975 850 975 850 975C 836 975 825 964 825 950C 825 950 825 50 825 50C 825 36 836 25 850 25C 850 25 950 25 950 25M 750 450C 764 450 775 461 775 475C 775 475 775 950 775 950C 775 964 764 975 750 975C 750 975 650 975 650 975C 636 975 625 964 625 950C 625 950 625 475 625 475C 625 461 636 450 650 450C 650 450 750 450 750 450M 550 650C 564 650 575 661 575 675C 575 675 575 950 575 950C 575 964 564 975 550 975C 550 975 450 975 450 975C 436 975 425 964 425 950C 425 950 425 675 425 675C 425 661 436 650 450 650C 450 650 550 650 550 650M 350 750C 364 750 375 761 375 775C 375 775 375 950 375 950C 375 964 364 975 350 975C 350 975 250 975 250 975C 236 975 225 964 225 950C 225 950 225 775 225 775C 225 761 236 750 250 750C 250 750 350 750 350 750M 150 800C 164 800 175 811 175 825C 175 825 175 950 175 950C 175 964 164 975 150 975C 150 975 50 975 50 975C 36 975 25 964 25 950C 25 950 25 825 25 825C 25 811 36 800 50 800C 50 800 150 800 150 800" })));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React__default['default'].createElement("path", { d: "M 300 192C 353 192 404 213 441 250C 500 317 500 317 559 250C 596 213 647 192 700 192C 753 192 804 213 841 250C 879 288 900 339 900 392C 900 443 880 492 845 529C 845 529 845 530 845 530C 845 530 550 846 550 846C 512 881 487 881 450 846C 450 846 159 533 159 533C 121 495 100 445 100 392C 100 339 121 288 159 250C 196 213 247 192 300 192C 300 192 300 192 300 192" })));
};

var Icon$1e = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "62", height: "56", viewBox: "0 0 62 56", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("g", { opacity: "0.5", filter: "url(#filter0_d)" },
            React__default['default'].createElement("path", { d: "M43.1914 29.8726C42.7516 28.7326 42.3118 29.4166 41.8719 29.1886C38.5731 28.0486 39.2328 23.0324 39.2328 23.0324C39.2328 17.5602 35.0543 13 29.5563 13H28.6766C23.3984 13 19 17.5602 19 23.0324V28.7326C19 31.6967 19.8797 34.6608 21.6391 37.1689C23.6184 39.677 26.9172 41.9571 32.1953 40.5891C32.4153 40.5891 32.6352 40.361 32.6352 40.133C33.075 39.221 33.9547 38.309 35.7141 38.081C37.9133 37.6249 37.9133 35.5729 37.9133 35.5729C37.9133 35.5729 37.6934 33.2928 39.8926 32.8368C42.0918 32.6087 43.6313 31.0127 43.1914 29.8726ZM24.9379 23.4884C23.3984 23.4884 22.2988 22.1203 22.2988 20.7523C22.2988 19.3842 23.3984 18.0162 24.9379 18.0162C26.4774 18.0162 27.577 19.1562 27.577 20.7523C27.577 22.3484 26.4774 23.4884 24.9379 23.4884ZM33.2949 23.4884C31.9754 23.4884 30.6559 22.1203 30.6559 20.7523C30.6559 19.3842 31.7555 18.0162 33.2949 18.0162C34.8344 18.0162 35.934 19.1562 35.934 20.7523C35.934 22.3484 34.8344 23.4884 33.2949 23.4884Z", fill: "#E8FFF4" })),
        React__default['default'].createElement("g", { filter: "url(#filter1_d)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.86396 40.3079C9.69828 40.3079 9.56396 40.1735 9.56396 40.0079V29.6079C9.56396 29.4422 9.69828 29.3079 9.86396 29.3079H12.68C12.7939 29.3079 12.898 29.3724 12.9487 29.4744L15.2527 34.1144C15.2553 34.1198 15.2578 34.1251 15.2601 34.1306L15.5227 34.7489C15.5209 34.7299 15.5191 34.7109 15.5173 34.6919C15.4853 34.3401 15.4532 33.9929 15.4213 33.6519L15.4204 33.642C15.3987 33.2846 15.388 32.9425 15.388 32.6159V29.6079C15.388 29.4422 15.5223 29.3079 15.688 29.3079H18.312C18.4777 29.3079 18.612 29.4422 18.612 29.6079V40.0079C18.612 40.1735 18.4777 40.3079 18.312 40.3079H15.496C15.3819 40.3079 15.2777 40.2432 15.2271 40.1409L12.9231 35.4849C12.9206 35.4799 12.9183 35.4749 12.9161 35.4698L12.6439 34.8333C12.6485 34.8713 12.6531 34.9094 12.6578 34.9478C12.7444 35.6625 12.788 36.3466 12.788 36.9999V40.0079C12.788 40.1735 12.6537 40.3079 12.488 40.3079H9.86396ZM23.174 40.3079C23.0083 40.3079 22.874 40.1735 22.874 40.0079V29.6079C22.874 29.4422 23.0083 29.3079 23.174 29.3079H29.894C30.0597 29.3079 30.194 29.4422 30.194 29.6079V31.9119C30.194 32.0775 30.0597 32.2119 29.894 32.2119H26.226V33.2439H29.318C29.4837 33.2439 29.618 33.3782 29.618 33.5439V35.8479C29.618 36.0135 29.4837 36.1479 29.318 36.1479H26.226V37.4039H30.054C30.2197 37.4039 30.354 37.5382 30.354 37.7039V40.0079C30.354 40.1735 30.2197 40.3079 30.054 40.3079H23.174ZM35.4566 40.3079C35.3109 40.3079 35.1863 40.2032 35.1611 40.0597L33.3371 29.6597C33.3218 29.5724 33.3459 29.4828 33.4029 29.4149C33.4599 29.3471 33.544 29.3079 33.6326 29.3079H36.4486C36.5997 29.3079 36.7272 29.4202 36.7462 29.5701L37.3233 34.1226C37.3688 34.5868 37.4181 35.051 37.4714 35.5151L37.7233 34.0878L38.7155 29.5439C38.7456 29.4061 38.8676 29.3079 39.0086 29.3079H41.3126C41.4536 29.3079 41.5756 29.4061 41.6057 29.5439L42.5998 34.0976C42.6833 34.5521 42.7666 35.0187 42.8501 35.4972C42.9033 35.0349 42.9526 34.5765 42.9981 34.122L42.9989 34.1141L43.575 29.5701C43.594 29.4202 43.7215 29.3079 43.8726 29.3079H46.4966C46.5847 29.3079 46.6684 29.3466 46.7254 29.4139C46.7824 29.4811 46.807 29.5701 46.7925 29.657L45.0645 40.057C45.0405 40.2018 44.9153 40.3079 44.7686 40.3079H41.2806C41.1369 40.3079 41.0134 40.206 40.9861 40.0649L40.187 35.9417L40.1865 35.9393C40.1424 35.7294 40.101 35.518 40.0625 35.3054C40.0268 35.5176 39.987 35.7286 39.9429 35.9381L39.1755 40.0627C39.1491 40.2048 39.0251 40.3079 38.8806 40.3079H35.4566ZM51.1339 35.724C50.9782 35.724 50.8484 35.6049 50.835 35.4498L50.4498 31.9882L50.3541 29.6202C50.3508 29.5386 50.3809 29.4592 50.4375 29.4002C50.4941 29.3413 50.5722 29.308 50.6539 29.308H53.4059C53.4875 29.308 53.5657 29.3413 53.6223 29.4002C53.6788 29.4592 53.7089 29.5386 53.7056 29.6202L53.6091 32.0019L53.2248 35.4498C53.2114 35.6049 53.0816 35.724 52.9259 35.724H51.1339ZM52.1001 40.4999C51.5543 40.4999 51.0886 40.3101 50.7288 39.9246C50.3743 39.5448 50.2001 39.0752 50.2001 38.5359C50.2001 37.9965 50.3743 37.527 50.7288 37.1472C51.0886 36.7616 51.5543 36.5719 52.1001 36.5719C52.6459 36.5719 53.1116 36.7616 53.4714 37.1472C53.8259 37.527 54.0001 37.9965 54.0001 38.5359C54.0001 39.0752 53.8259 39.5448 53.4714 39.9246C53.1116 40.3101 52.6459 40.4999 52.1001 40.4999Z", fill: "#E8FFF4" })),
        React__default['default'].createElement("g", { filter: "url(#filter2_d)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.9882 22.1527C45.9071 21.6858 45.6629 21.2628 45.2991 20.9592L44.1471 19.9978C43.4931 19.4519 43.7775 18.3905 44.6169 18.2448L46.0951 17.9882C46.562 17.9071 46.985 17.6629 47.2886 17.2991L48.2499 16.1473C48.7957 15.4932 49.8572 15.7776 50.0029 16.617L50.2595 18.0953C50.3405 18.5622 50.5847 18.9852 50.9485 19.2888L52.1002 20.2499C52.7543 20.7958 52.4698 21.8572 51.6305 22.0029L50.1525 22.2595C49.6856 22.3405 49.2626 22.5847 48.959 22.9485L47.9977 24.1003C47.4519 24.7544 46.3904 24.47 46.2447 23.6306L45.9882 22.1527Z", fill: "#E8FFF4" })),
        React__default['default'].createElement("g", { filter: "url(#filter3_d)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.6104 24.0281C11.3068 23.6643 10.8838 23.4201 10.4169 23.339L9.38252 23.1595C8.96283 23.0866 8.82063 22.5559 9.14766 22.283L9.95365 21.6103C10.3175 21.3067 10.5617 20.8837 10.6427 20.4169L10.8222 19.3826C10.8951 18.9629 11.4258 18.8207 11.6987 19.1477L12.3714 19.9537C12.675 20.3176 13.098 20.5617 13.5649 20.6428L14.599 20.8223C15.0187 20.8951 15.1609 21.4259 14.8338 21.6988L14.028 22.3713C13.6642 22.675 13.42 23.0979 13.3389 23.5648L13.1594 24.599C13.0866 25.0187 12.5558 25.1609 12.2829 24.8339L11.6104 24.0281Z", fill: "#E8FFF4" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "11", y: "5", width: "40.2667", height: "44", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", null),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.258824 0 0 0 0 0.843137 0 0 0 0 0.517647 0 0 0 0.5 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter1_d", x: "1.56396", y: "21.3079", width: "60.4361", height: "27.192", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", null),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.258824 0 0 0 0 0.843137 0 0 0 0 0.517647 0 0 0 0.5 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter2_d", x: "34", y: "6", width: "28.2474", height: "28.2474", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", null),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.258824 0 0 0 0 0.843137 0 0 0 0 0.517647 0 0 0 0.5 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter3_d", x: "0", y: "10", width: "23.9818", height: "23.9818", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", null),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.258824 0 0 0 0 0.843137 0 0 0 0 0.517647 0 0 0 0.5 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "26px", height: "26px", viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("circle", { cx: "13", cy: "13", r: "12", stroke: "#35b9c0", strokeWidth: "2", strokeLinejoin: "round", fill: "none" }),
        React__default['default'].createElement("path", { d: "M20 13C20 12.0807 19.8189 11.1705 19.4672 10.3212C19.1154 9.47194 18.5998 8.70026 17.9497 8.05025C17.2997 7.40024 16.5281 6.88463 15.6788 6.53284C14.8295 6.18106 13.9193 6 13 6C12.0807 6 11.1705 6.18106 10.3212 6.53284C9.47194 6.88463 8.70026 7.40024 8.05025 8.05025C7.40024 8.70026 6.88463 9.47194 6.53284 10.3212C6.18106 11.1705 6 12.0807 6 13", stroke: "#35b9c0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
        React__default['default'].createElement("path", { d: "M13 10L13 14", stroke: "#35b9c0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default['default'].createElement("circle", { cx: "13", cy: "17", r: "3", fill: "#35b9c0" }),
        " "));
};

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "24px", viewBox: "0 0 155 172", "enable-background": "new 0 0 155 172", style: { marginRight: "8px" } },
        React__default['default'].createElement("image", { id: "image0", width: "155", height: "172", x: "0", y: "0", href: "data:image/png;base64,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\n    TkSuQmCC" })));
};

var Icon$1h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ x: "0px", y: "0px", width: "24px", height: "24px", viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("image", { id: "image0", width: "24", height: "24", x: "0", y: "0", xlinkHref: "data:image/png;base64,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\nbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==" })));
};

var Icon$1i = function (props) {
    return (React__default['default'].createElement(Svg, { style: { marginRight: "8px" }, "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "rocket", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
        React__default['default'].createElement("path", { fill: "#6CD784", d: "M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" })));
};

var Icon$1j = function (props) {
    return (React__default['default'].createElement(Svg, { style: { marginRight: "8px" }, "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "hand-holding-usd", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
        React__default['default'].createElement("path", { fill: "#6CD784", d: "M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$N,
    GroupsIcon: Icon$O,
    HamburgerIcon: Icon$P,
    HamburgerCloseIcon: Icon$Q,
    ChevronLeft: Icon$R,
    ChevronRight: Icon$S,
    HomeIcon: Icon$T,
    IfoIcon: Icon$U,
    InfoIcon: Icon$V,
    PlusIcon: Icon$W,
    LanguageIcon: Icon$X,
    LogoIcon: Logo,
    MoonIcon: Icon$Y,
    MoreIcon: Icon$Z,
    NftIcon: Icon$_,
    PoolIcon: Icon$$,
    SunIcon: Icon$10,
    TelegramIcon: Icon$11,
    TicketIcon: Icon$12,
    TradeIcon: Icon$13,
    TwitterIcon: Icon$14,
    DiscordIcon: Icon$15,
    YoutubeIcon: Icon$16,
    ShieldIcon: Icon$17,
    BushIcon: Icon$18,
    BridgeIcon: Icon$19,
    VaultIcon: Icon$1a,
    StoreIcon: Icon$1b,
    AnalyticIcon: Icon$1c,
    DonateIcon: Icon$1d,
    BadgeNewIcon: Icon$1e,
    GaugeIcon: Icon$1f,
    inSpiritIcon: Icon$1g,
    NftZoo: Icon$1h,
    Rocket: Icon$1i,
    LendIcon: Icon$1j
});

var MenuButton = styled__default['default'](Button)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$A;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 55px;\n    height: 75px;\n    //margin-left: 30px;\n    display: none;\n    ", " {\n      /* display: block; */\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 55px;\n    height: 75px;\n    //margin-left: 30px;\n    display: none;\n    ", " {\n      /* display: block; */\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var StyledMenuButton = styled__default['default'](MenuButton)(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  position: absolute;\n  left: ", ";\n  top: ", ";\n  padding: ", ";\n  border-right: 1px solid #42d785;\n  border-top: 1px solid #42d785;\n  border-bottom: 1px solid #42d785;\n  background-image: none;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border: ", ";\n"], ["\n  position: absolute;\n  left: ",
    ";\n  top: ",
    ";\n  padding: ",
    ";\n  border-right: 1px solid #42d785;\n  border-top: 1px solid #42d785;\n  border-bottom: 1px solid #42d785;\n  background-image: none;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border: ", ";\n"])), function (_a) {
    var isMobile = _a.isMobile, isPushed = _a.isPushed;
    switch (isMobile) {
        case true:
            return "20px";
        case false:
            return isPushed ? "240.2px" : "56.2px";
    }
    return "";
}, function (_a) {
    var isMobile = _a.isMobile;
    switch (isMobile) {
        case true:
            return "10px";
        case false:
            return "320px";
    }
    return "";
}, function (_a) {
    var isMobile = _a.isMobile;
    switch (isMobile) {
        case true:
            return 0;
        case false:
            return "50px 5px";
    }
    return "";
}, function (_a) {
    var isMobile = _a.isMobile;
    return (isMobile ? "none" : "");
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Logo, { className: "desktop-icon", isDark: isDark, isPushed: isPushed })));
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    return !isMobile ? (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(StyledMenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px", isMobile: isMobile, isPushed: isPushed }, isPushed ? React__default['default'].createElement(Icon$R, { width: "24px", color: "textSubtle" }) : React__default['default'].createElement(Icon$S, { width: "24px", color: "textSubtle" })),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo)))) : (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(StyledMenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px", isMobile: isMobile, isPushed: isPushed }, isPushed ? (React__default['default'].createElement(Icon$Q, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$P, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$2 = React__default['default'].memo(Logo$1, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
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
        label: "Boosted Farms",
        icon: "GaugeIcon",
        href: "/boostedfarms",
    },
    {
        label: "inSpirit",
        icon: "inSpiritIcon",
        href: "http://spiritswap-inspirit-staging.s3-website.us-east-2.amazonaws.com/",
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

var rainbowAnimation = styled.keyframes(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ",
    ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme, inSpirit = _a.inSpirit;
    return (!isPushed && "transparent") || (inSpirit === "noInSpirit" && theme.colors.textSubtle) || "#35b9c0";
});
var MenuEntry = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ",
    ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
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
    return (isActive ? "inset 0px 0px 10px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme, inSpirit = _a.inSpirit;
    return inSpirit === "noInSpirit" ? theme.colors.tertiary : "rgba(96, 213, 220, 0.15)";
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$C, templateObject_2$d, templateObject_3$7;

var Container$2 = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, inSpirit = _a.inSpirit;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, inSpirit: inSpirit },
            icon,
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed, inSpirit: inSpirit }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React__default['default'].memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$D, templateObject_2$e;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  margin-top: 72px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  margin-top: 72px;\n"])));
var rotate$1 = styled.keyframes(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n    0% { transform: translate(0,  0px); }\n    50%  { transform: translate(8px, 0); }\n    100%   { transform: translate(0, -0px); }  \n  }\n"], ["\n    0% { transform: translate(0,  0px); }\n    50%  { transform: translate(8px, 0); }\n    100%   { transform: translate(0, -0px); }  \n  }\n"])));
var NewIcon = styled__default['default'](Icon$1e)(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: absolute;\n  left: 155px;\n  width: 40px;\n  margin-right: 45px;\n  animation: ", " 6s infinite;\n"], ["\n  position: absolute;\n  left: 155px;\n  width: 40px;\n  margin-right: 45px;\n  animation: ", " 6s infinite;\n"])), rotate$1);
var MenuWrapper = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        var inSpiritLinks = entry.label === "inSpirit" || entry.label === "Boosted Farms" ? "inSpirit" : "noInSpirit";
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, inSpirit: inSpiritLinks }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick, inSpirit: inSpiritLinks },
                    React__default['default'].createElement(MenuLink, { href: item.href, target: item.target }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass, inSpirit: inSpiritLinks },
            React__default['default'].createElement(MenuLink, { href: entry.href, target: entry.target, onClick: handleClick },
                React__default['default'].createElement(MenuWrapper, null,
                    iconElement,
                    React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed, inSpirit: inSpiritLinks },
                        entry.label,
                        " "),
                    entry.label === "Portfolio" ||
                        entry.label === "inSpirit" ||
                        entry.label === "Boosted Farms" ||
                        entry.label === "IDO" ||
                        entry.label === "Lend/Borrow" ? (React__default['default'].createElement(NewIcon, null)) : null))));
    })));
};
var templateObject_1$E, templateObject_2$f, templateObject_3$8, templateObject_4$3;

var PriceLink = styled__default['default'].span(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    transition: transform 0.3s;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  svg {\n    transition: transform 0.3s;\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React__default['default'].createElement(PriceLink, null,
        React__default['default'].createElement(Icon$x, { width: "24px", mr: "8px" }),
        React__default['default'].createElement(Link, { href: "https://coinmarketcap.com/currencies/spiritswap/", style: { marginLeft: "5px", textDecoration: "none" }, target: "_blank", color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React__default['default'].memo(CakePrice);
var templateObject_1$F;

var Icons$1 = IconModule;
var SocialLinks = function () { return (React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$1[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "7px" : 0;
    return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React__default['default'].createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React__default['default'].memo(SocialLinks, function () { return true; });

var Icons$2 = IconModule;
var LanguageIcon = Icons$2.LanguageIcon;
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { style: { backgroundImage: "none" }, variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
            React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto", backgroundImage: "none" } }, lang.language)); })));
};
var LangSelector$1 = React__default['default'].memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container$4 = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 0;\n\n  background: ", ";\n  border-top: solid 1px #42d784;\n  border-bottom: solid 1px #42d784;\n"], ["\n  flex: none;\n  padding: 8px 0;\n\n  background: ", ";\n  border-top: solid 1px #42d784;\n  border-bottom: solid 1px #42d784;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.isDark ? "#161f33" : "#E6FDFF");
});
var SettingsEntry = styled__default['default'].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  //justify-content: space-between;\n  justify-content: flex-start;\n  height: ", "px;\n  //padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  //justify-content: space-between;\n  justify-content: flex-start;\n  height: ", "px;\n  //padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$l, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement(SocialEntry, null,
            React__default['default'].createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd }),
            React__default['default'].createElement(SocialLinks$1, null)),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }))));
};
var templateObject_1$G, templateObject_2$g, templateObject_3$9;

var Wrapper$1 = styled__default['default'].a(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  height: fit-content;\n  margin: 0.5rem auto;\n\n  span {\n    color: white;\n    display: ", ";\n    margin-right: 1rem;\n  }\n  .logo {\n    height: 30px;\n  }\n\n  &:hover {\n    span {\n      color: rgb(96, 213, 220);\n    }\n  }\n}"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  height: fit-content;\n  margin: 0.5rem auto;\n\n  span {\n    color: white;\n    display: ", ";\n    margin-right: 1rem;\n  }\n  .logo {\n    height: 30px;\n  }\n\n  &:hover {\n    span {\n      color: rgb(96, 213, 220);\n    }\n  }\n}"])), function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "unset" : "none");
});
var AuditBadge = function (_a) {
    var isPushed = _a.isPushed;
    return (React__default['default'].createElement(Wrapper$1, { className: "audit-badge", href: "https://github.com/Layer3Org/spiritswap-core/blob/main/SpiritSwap-Core%20Security%20Audit%20Report.pdf", rel: "noreferrer", target: "_blank", isPushed: isPushed },
        React__default['default'].createElement("span", null, "audited by"),
        React__default['default'].createElement("img", { alt: "Logo", className: "logo", src: "https://static.tildacdn.com/tild3736-6636-4564-a262-333031646230/Logo-mixBytes-kvadra.svg" })));
};
var templateObject_1$H;

var StyledPanel = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  position: fixed;\n  padding-top: \"80px\";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  /* border-right: ", ";\n  border-right: ", "; */\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-width: 1px;\n    border-image: linear-gradient(to top, #42d785, rgba(0, 0, 0, 0)) 0% 100%;\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: \"80px\";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background: ",
    ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  /* border-right: ", ";\n  border-right: ", "; */\n  border-right: ",
    ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-width: 1px;\n    border-image: linear-gradient(to top, #42d785, rgba(0, 0, 0, 0)) 0% 100%;\n    width: ", ";\n  }\n"])), function (_a) {
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
    return (React__default['default'].createElement(StyledPanel, { isMobile: isMobile, isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props)),
        React__default['default'].createElement(AuditBadge, { isPushed: isPushed })));
};
var templateObject_1$I;
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

var Icon$1k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$1l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1000 1000" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "prefix__a", x1: 48.733, y1: 944.09, x2: 942.955, y2: 64.09, gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { offset: 0, stopColor: "#151515" }),
                React__default['default'].createElement("stop", { offset: 0.994, stopColor: "#252525" })),
            React__default['default'].createElement("linearGradient", { id: "prefix__b", x1: 761.394, y1: 238.668, x2: 275.02, y2: 725.043, gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { offset: 0, stopColor: "#fdea6a" }),
                React__default['default'].createElement("stop", { offset: 0.129, stopColor: "#f6df65" }),
                React__default['default'].createElement("stop", { offset: 0.709, stopColor: "#d8b14e" }),
                React__default['default'].createElement("stop", { offset: 1, stopColor: "#cc9f45" }))),
        React__default['default'].createElement("title", null, "Wallet"),
        React__default['default'].createElement("rect", { width: 1000, height: 1000, rx: 182.477, fill: "url(#prefix__a)" }),
        React__default['default'].createElement("path", { d: "M470.273 616.333a133.712 133.712 0 01-133.635 133.835c-73.577 0-133.838-59.857-133.838-133.835h64.237c0 38.381 31.218 69.8 69.6 69.8s69.6-31.42 69.6-69.8zm22.668-210.2c0 86.107-70.2 156.107-156.3 156.107-86.307 0-156.307-70-156.307-156.107s70-156.3 156.307-156.3c86.101-.001 156.3 70.198 156.3 156.304zm-64.033 0a92.272 92.272 0 00-184.544 0c0 50.71 41.564 92.272 92.274 92.272a92.467 92.467 0 0092.27-92.268zm-81.535-26.448v-23.264H325.9v23.268a31.9 31.9 0 00-21.678 30.226 32.315 32.315 0 1064.63 0 31.719 31.719 0 00-21.479-30.226zm472.3 214.372c0 86.107-70 156.107-156.1 156.107s-156.507-70-156.507-156.107c0-86.5 70.4-156.5 156.507-156.5s156.096 70 156.096 156.504zm-63.834 0a92.27 92.27 0 10-184.539 0c0 50.71 41.36 91.874 92.27 91.874s92.265-41.16 92.265-91.87zM663.57 562.24a32.548 32.548 0 00-32.417 32.414 31.709 31.709 0 0021.677 30.425v23.466h21.479v-23.462a32.05 32.05 0 0021.474-30.425 32.506 32.506 0 00-32.217-32.414zm0-312.412c-73.777 0-133.834 59.857-133.834 133.635a132.935 132.935 0 0016.5 64.033 177.809 177.809 0 0156.081-31.022 68.405 68.405 0 01-8.351-33.011 69.6 69.6 0 01139.2 0 70.726 70.726 0 01-8.355 33.011 177.761 177.761 0 0156.08 31.022 132.7 132.7 0 0016.309-64.029c0-73.778-60.057-133.635-133.634-133.635z", fill: "url(#prefix__b)" })));
};

var Icon$1m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("rect", { width: "512", height: "512", fill: "#2F51FA" }),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "179", fill: "white" }),
        React__default['default'].createElement("rect", { x: "198", y: "198", width: "116", height: "116", rx: "12", fill: "#3053FA" })));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
    ConnectorNames["Coin98"] = "coin98";
    ConnectorNames["WalletLink"] = "walletlink";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "MetaMask",
        icon: Icon$1k,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Coin98 Wallet",
        icon: Icon$1l,
        connectorId: exports.ConnectorNames.Coin98,
    },
    {
        title: "Coinbase Wallet",
        icon: Icon$1m,
        connectorId: exports.ConnectorNames.WalletLink,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { backgroundImage: "none" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://app.gitbook.com/@layer3/s/spirit-swap/howto/connect-metamask", external: true },
            React__default['default'].createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$J;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 0.5rem;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 0.5rem;\n  opacity: 0.7;\n"])), function (_a) {
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
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$K, templateObject_2$h;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://ftmscan.com/address/" + account, mr: "16px" }, "View on FTMScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { scale: "sm", variant: "subtle", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    var OwnButton = styled__default['default'](Button)(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n    border-radius: 0.5rem;\n    color: ", ";\n    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\n    border: solid 3px transparent;\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),\n      linear-gradient(90deg, #42d784, #60d5dc);\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n    box-shadow: ", ";\n  "], ["\n    border-radius: 0.5rem;\n    color: ", ";\n    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\n    border: solid 3px transparent;\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),\n      linear-gradient(90deg, #42d784, #60d5dc);\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n    box-shadow: ", ";\n  "])), function (_a) {
        var theme = _a.theme;
        return (theme.isDark ? "#6DD784" : "#0d0e21");
    }, function (_a) {
        var theme = _a.theme;
        return (theme.isDark ? "2px 1000px 1px #1f2b46 inset" : "2px 1000px 1px #fff inset");
    });
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(OwnButton, { scale: "sm", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(OwnButton, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React__default['default'].memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });
var templateObject_1$L;

var Wrapper$2 = styled__default['default'].div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  position: fixed;\n  //top: ", ";\n  top: 0;\n  left: 0;\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: ", ";\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  //border-bottom: ", ";\n  border-bottom: none;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  //top: ", ";\n  top: 0;\n  left: 0;\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: ", ";\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  //border-bottom: ", ";\n  border-bottom: none;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "8px" : "0");
}, MENU_HEIGHT, function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "solid 2px rgba(133, 133, 133, 0.1)" : "none");
});
var BodyWrapper = styled__default['default'].div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  flex-grow: 1;\n  //margin-top: ", ";\n  margin-top: ", ";\n  //colortransition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  //margin-top: ", ";\n  margin-top: ", ";\n  //colortransition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
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
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links; _a.profile; var children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
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
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$2, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu, isPushed: isPushed },
            React__default['default'].createElement(Logo$2, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null, showMenu ? React__default['default'].createElement(UserBlock$1, { account: account, login: login, logout: logout, isDark: isDark }) : React__default['default'].createElement(React__default['default'].Fragment, null))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$M, templateObject_2$i, templateObject_3$a, templateObject_4$4, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, scale: "sm", to: action.url }, action.text));
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
var StyledToast = styled__default['default'].div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n  margin-right: 30px;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n  margin-right: 30px;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
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
    React.useEffect(function () {
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
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: titleSpecific, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, descriptionSpecific),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$N;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$O;

var ResetCSS = styled.createGlobalStyle(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$P;

var baseColors = {
    failure: "#e02f58",
    primary: "#60D5DC",
    primaryBright: "#dd831c",
    primaryDark: "#c25e00",
    secondary: "#d6931a",
    success: "#6DD784",
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

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.AutoRenewIcon = Icon$a;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$b;
exports.BlockIcon = Icon$2;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$c;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$e;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$d;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$f;
exports.ChevronDownIcon = Icon$g;
exports.ChevronLeftIcon = Icon$h;
exports.ChevronRightIcon = Icon$i;
exports.ChevronUpIcon = Icon$j;
exports.CloseIcon = Icon$k;
exports.CogIcon = Icon$l;
exports.CommunityIcon = Icon$m;
exports.CopyIcon = Icon$n;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.FallingBunnies = FallingBunnies;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$o;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$p;
exports.LogoIcon = Icon$q;
exports.LogoRoundIcon = Icon$r;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$s;
exports.MinusIcon = Icon$t;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.NoProfileAvatarIcon = Icon$u;
exports.OpenNewIcon = Icon$v;
exports.PancakeRoundIcon = Icon$x;
exports.PancakesIcon = Icon$w;
exports.PrizeIcon = Icon$y;
exports.Progress = Progress;
exports.ProgressBunny = Icon$B;
exports.Radio = Radio;
exports.RemoveIcon = Icon$z;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$F;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$G;
exports.SyncAltIcon = Icon$H;
exports.Tag = Tag;
exports.Text = Text;
exports.ThunderBgIcon = Icon$K;
exports.ThunderIcon = Icon$J;
exports.Ticket = Icon$D;
exports.TicketRound = Icon$E;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$A;
exports.WarningIcon = Icon$I;
exports.Won = Icon$C;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
