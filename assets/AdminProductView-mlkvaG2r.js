import{s as an,B as En,a7 as $n,a8 as Pn,o as le,c as oe,a as P,g as In,n as j,a9 as Sn,aa as Mn,_ as On,N as sn,O as cn,S as Rn,V as Tn,X as Ie,i as Oe,G as dn,H as en,F as Re,D as Ve,w as Ue,Z as He,$ as me,a1 as se,a5 as je,ab as zn,a2 as fn,b as Be,a0 as Nn}from"./index-Be_OT17-.js";import{u as Vn,C as Hn}from"./CrudModal-DE3E-C2e.js";import{s as Ln,u as Dn}from"./index-BgmhZ6Zp.js";var jn={name:"BaseEditableHolder",extends:Ln,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:{deep:!0,handler:function(q){this.d_value=q}},defaultValue:function(q){this.d_value=q},$formName:{immediate:!0,handler:function(q){var A,a;this.formField=((A=this.$pcForm)===null||A===void 0||(a=A.register)===null||a===void 0?void 0:a.call(A,q,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(q){var A,a;this.formField=((A=this.$pcForm)===null||A===void 0||(a=A.register)===null||a===void 0?void 0:a.call(A,this.$formName,q))||{}}},$formDefaultValue:{immediate:!0,handler:function(q){this.d_value!==q&&(this.d_value=q)}},$formValue:{immediate:!1,handler:function(q){var A;(A=this.$pcForm)!==null&&A!==void 0&&A.getFieldState(this.$formName)&&q!==this.d_value&&(this.d_value=q)}}},formField:{},methods:{writeValue:function(q,A){var a,e;this.controlled&&(this.d_value=q,this.$emit("update:modelValue",q)),this.$emit("value-change",q),(a=(e=this.formField).onChange)===null||a===void 0||a.call(e,{originalEvent:A,value:q})},findNonEmpty:function(){for(var q=arguments.length,A=new Array(q),a=0;a<q;a++)A[a]=arguments[a];return A.find(an)}},computed:{$filled:function(){return an(this.d_value)},$invalid:function(){var q,A;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(q=this.$pcFormField)===null||q===void 0||(q=q.$field)===null||q===void 0?void 0:q.invalid,(A=this.$pcForm)===null||A===void 0||(A=A.getFieldState(this.$formName))===null||A===void 0?void 0:A.invalid)},$formName:function(){var q;return this.$formNovalidate?void 0:this.name||((q=this.$formControl)===null||q===void 0?void 0:q.name)},$formControl:function(){var q;return this.formControl||((q=this.$pcFormField)===null||q===void 0?void 0:q.formControl)},$formNovalidate:function(){var q;return(q=this.$formControl)===null||q===void 0?void 0:q.novalidate},$formDefaultValue:function(){var q,A;return this.findNonEmpty(this.d_value,(q=this.$pcFormField)===null||q===void 0?void 0:q.initialValue,(A=this.$pcForm)===null||A===void 0||(A=A.initialValues)===null||A===void 0?void 0:A[this.$formName])},$formValue:function(){var q,A;return this.findNonEmpty((q=this.$pcFormField)===null||q===void 0||(q=q.$field)===null||q===void 0?void 0:q.value,(A=this.$pcForm)===null||A===void 0||(A=A.getFieldState(this.$formName))===null||A===void 0?void 0:A.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},Bn=`
    /*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
        visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
        pointer-events: none;
    }
    .ql-clipboard {
        inset-inline-start: -100000px;
        height: 1px;
        overflow-y: hidden;
        position: absolute;
        top: 50%;
    }
    .ql-clipboard p {
        margin: 0;
        padding: 0;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .ql-editor > * {
        cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
        margin: 0;
        padding: 0;
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
        list-style-type: none;
    }
    .ql-editor ul > li::before {
        content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
        pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
        color: #777;
        cursor: pointer;
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
        content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
        content: '\\2610';
    }
    .ql-editor li::before {
        display: inline-block;
        white-space: nowrap;
        width: 1.2rem;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
        margin-inline-start: -1.5rem;
        margin-inline-end: 0.3rem;
        text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
        margin-inline-start: 0.3rem;
        margin-inline-end: -1.5rem;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
        padding-inline-end: 1.5rem;
    }
    .ql-editor ol li {
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        counter-increment: list-0;
    }
    .ql-editor ol li:before {
        content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
        content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
        counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
        content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
        counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
        content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
        counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
        content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
        counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
        counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
        content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
        counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
        counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
        content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
        counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
        counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
        content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
        counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
        counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
        content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
        counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
        counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
        content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-video {
        display: block;
        max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
        margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
        margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
        background: #000;
    }
    .ql-editor .ql-bg-red {
        background: #e60000;
    }
    .ql-editor .ql-bg-orange {
        background: #f90;
    }
    .ql-editor .ql-bg-yellow {
        background: #ff0;
    }
    .ql-editor .ql-bg-green {
        background: #008a00;
    }
    .ql-editor .ql-bg-blue {
        background: #06c;
    }
    .ql-editor .ql-bg-purple {
        background: #93f;
    }
    .ql-editor .ql-color-white {
        color: #fff;
    }
    .ql-editor .ql-color-red {
        color: #e60000;
    }
    .ql-editor .ql-color-orange {
        color: #f90;
    }
    .ql-editor .ql-color-yellow {
        color: #ff0;
    }
    .ql-editor .ql-color-green {
        color: #008a00;
    }
    .ql-editor .ql-color-blue {
        color: #06c;
    }
    .ql-editor .ql-color-purple {
        color: #93f;
    }
    .ql-editor .ql-font-serif {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-editor .ql-font-monospace {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-editor .ql-size-small {
        font-size: 0.75rem;
    }
    .ql-editor .ql-size-large {
        font-size: 1.5rem;
    }
    .ql-editor .ql-size-huge {
        font-size: 2.5rem;
    }
    .ql-editor .ql-direction-rtl {
        direction: rtl;
        text-align: inherit;
    }
    .ql-editor .ql-align-center {
        text-align: center;
    }
    .ql-editor .ql-align-justify {
        text-align: justify;
    }
    .ql-editor .ql-align-right {
        text-align: right;
    }
    .ql-editor.ql-blank::before {
        color: dt('form.field.placeholder.color');
        content: attr(data-placeholder);
        font-style: italic;
        inset-inline-start: 15px;
        pointer-events: none;
        position: absolute;
        inset-inline-end: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        float: left;
        height: 24px;
        padding-block: 3px;
        padding-inline: 5px;
        width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
        float: left;
        height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
        outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
        display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: #06c;
    }
    @media (pointer: coarse) {
        .ql-snow.ql-toolbar button:hover:not(.ql-active),
        .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
        }
    }
    .ql-snow {
        box-sizing: border-box;
    }
    .ql-snow * {
        box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
        display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
        visibility: hidden;
    }
    .ql-snow .ql-tooltip {
        position: absolute;
        transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
        cursor: pointer;
        text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
        transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #444;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
        fill: none;
        stroke: #444;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow .ql-empty {
        fill: none;
    }
    .ql-snow .ql-even {
        fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
        stroke-width: 1;
    }
    .ql-snow .ql-transparent {
        opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
        display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
        display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
        display: none;
    }
    .ql-snow .ql-editor h1 {
        font-size: 2rem;
    }
    .ql-snow .ql-editor h2 {
        font-size: 1.5rem;
    }
    .ql-snow .ql-editor h3 {
        font-size: 1.17rem;
    }
    .ql-snow .ql-editor h4 {
        font-size: 1rem;
    }
    .ql-snow .ql-editor h5 {
        font-size: 0.83rem;
    }
    .ql-snow .ql-editor h6 {
        font-size: 0.67rem;
    }
    .ql-snow .ql-editor a {
        text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
        border-inline-start: 4px solid #ccc;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding-inline-start: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
        background: #f0f0f0;
        border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
        white-space: pre-wrap;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
        font-size: 85%;
        padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
        background: #23241f;
        color: #f8f8f2;
        overflow: visible;
    }
    .ql-snow .ql-editor img {
        max-width: 100%;
    }
    .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        inset-inline-start: 0;
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-inline-start: 8px;
        padding-inline-end: 2px;
        position: relative;
        width: 100%;
    }
    .ql-snow .ql-picker-label::before {
        display: inline-block;
        line-height: 22px;
    }
    .ql-snow .ql-picker-options {
        background: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-block-end: 5px;
        padding-block-start: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: #ccc;
        z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
        display: block;
        margin-block-start: -1px;
        top: 100%;
        z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
        width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
        inset-inline-end: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
        padding: 4px 0;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
        height: 24px;
        width: 24px;
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
        padding: 3px 5px;
        width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
        border: 1px solid transparent;
        float: left;
        height: 16px;
        margin: 2px;
        padding: 0;
        width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-block-start: -9px;
        inset-inline-end: 0;
        top: 50%;
        width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
        content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        font-size: 2rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        font-size: 1.5rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        font-size: 1.17rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        font-size: 1rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        font-size: 0.83rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        font-size: 0.67rem;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-snow .ql-picker.ql-size {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
        background: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
        background: #000;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
        margin-inline-end: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
        border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border-block-start: 0;
    }
    .ql-snow .ql-tooltip {
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ddd;
        color: #444;
        padding: 5px 12px;
        white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
        content: 'Visit URL:';
        line-height: 26px;
        margin-inline-end: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
        display: none;
        border: 1px solid #ccc;
        font-size: 13px;
        height: 26px;
        margin: 0;
        padding: 3px 5px;
        width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
        display: inline-block;
        max-width: 200px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
        border-inline-end: 1px solid #ccc;
        content: 'Edit';
        margin-inline-start: 16px;
        padding-inline-end: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
        content: 'Remove';
        margin-inline-start: 8px;
    }
    .ql-snow .ql-tooltip a {
        line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
        display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
        display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-inline-end: 0;
        content: 'Save';
        padding-inline-end: 0;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
        content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
        content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
        content: 'Enter video:';
    }
    .ql-snow a {
        color: #06c;
    }
    .ql-container.ql-snow {
        border: 1px solid #ccc;
    }

    .p-editor {
        display: block;
    }

    .p-editor .p-editor-toolbar {
        background: dt('editor.toolbar.background');
        border-start-end-radius: dt('editor.toolbar.border.radius');
        border-start-start-radius: dt('editor.toolbar.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow {
        border: 1px solid dt('editor.toolbar.border.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {
        stroke: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-fill {
        fill: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
        border: 0 none;
        color: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        background: dt('editor.overlay.background');
        border: 1px solid dt('editor.overlay.border.color');
        box-shadow: dt('editor.overlay.shadow');
        border-radius: dt('editor.overlay.border.radius');
        padding: dt('editor.overlay.padding');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
        color: dt('editor.overlay.option.color');
        border-radius: dt('editor.overlay.option.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
        background: dt('editor.overlay.option.focus.background');
        color: dt('editor.overlay.option.focus.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {
        padding: dt('editor.overlay.option.padding');
    }

    .p-editor .p-editor-content {
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .p-editor-content.ql-snow {
        border: 1px solid dt('editor.content.border.color');
    }

    .p-editor .p-editor-content .ql-editor {
        background: dt('editor.content.background');
        color: dt('editor.content.color');
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .ql-snow.ql-toolbar button:hover,
    .p-editor .ql-snow.ql-toolbar button:focus {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }
`,Qn={root:function(q){var A=q.instance;return["p-editor",{"p-invalid":A.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},Wn=En.extend({name:"editor",style:Bn,classes:Qn}),Gn={name:"BaseEditor",extends:jn,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Wn,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function Le(m){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},Le(m)}function un(m,q){var A=Object.keys(m);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(m);q&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(m,e).enumerable})),A.push.apply(A,a)}return A}function Kn(m){for(var q=1;q<arguments.length;q++){var A=arguments[q]!=null?arguments[q]:{};q%2?un(Object(A),!0).forEach(function(a){Zn(m,a,A[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(A)):un(Object(A)).forEach(function(a){Object.defineProperty(m,a,Object.getOwnPropertyDescriptor(A,a))})}return m}function Zn(m,q,A){return(q=Xn(q))in m?Object.defineProperty(m,q,{value:A,enumerable:!0,configurable:!0,writable:!0}):m[q]=A,m}function Xn(m){var q=Yn(m,"string");return Le(q)=="symbol"?q:q+""}function Yn(m,q){if(Le(m)!="object"||!m)return m;var A=m[Symbol.toPrimitive];if(A!==void 0){var a=A.call(m,q);if(Le(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(q==="string"?String:Number)(m)}var pn=(function(){try{return window.Quill}catch{return null}})(),hn={name:"Editor",extends:Gn,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(q,A){q!==A&&this.quill&&!this.quill.hasFocus()&&this.renderValue(q)},d_value:function(q,A){q!==A&&this.quill&&!this.quill.hasFocus()&&this.renderValue(q)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var q=this,A={modules:Kn({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};pn?(this.quill=new pn(this.$refs.editorElement,A),this.initQuill(),this.handleLoad()):$n(()=>import("./quill-CIyhmJQz.js"),[]).then(function(a){a&&Pn(q.$refs.editorElement)&&(a.default?q.quill=new a.default(q.$refs.editorElement,A):q.quill=new a(q.$refs.editorElement,A),q.initQuill())}).then(function(){q.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(q){if(this.quill)if(q){var A=this.quill.clipboard.convert({html:q});this.quill.setContents(A)}else this.quill.setText("")},initQuill:function(){var q=this;this.renderValue(this.d_value),this.quill.on("text-change",function(A,a,e){if(e==="user"){var n=q.quill.getSemanticHTML(),u=q.quill.getText().trim();n==="<p><br></p>"&&(n=""),q.writeValue(n),q.$emit("text-change",{htmlValue:n,textValue:u,delta:A,source:e,instance:q.quill})}}),this.quill.on("selection-change",function(A,a,e){var n=q.quill.getSemanticHTML(),u=q.quill.getText().trim();q.$emit("selection-change",{htmlValue:n,textValue:u,range:A,oldRange:a,source:e,instance:q.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Jn(m,q,A,a,e,n){return le(),oe("div",j({class:m.cx("root")},m.ptmi("root")),[P("div",j({ref:"toolbarElement",class:m.cx("toolbar")},m.ptm("toolbar")),[In(m.$slots,"toolbar",{},function(){return[P("span",j({class:"ql-formats"},m.ptm("formats")),[P("select",j({class:"ql-header",defaultValue:"0"},m.ptm("header")),[P("option",j({value:"1"},m.ptm("option")),"Heading",16),P("option",j({value:"2"},m.ptm("option")),"Subheading",16),P("option",j({value:"0"},m.ptm("option")),"Normal",16)],16),P("select",j({class:"ql-font"},m.ptm("font")),[P("option",Sn(Mn(m.ptm("option"))),null,16),P("option",j({value:"serif"},m.ptm("option")),null,16),P("option",j({value:"monospace"},m.ptm("option")),null,16)],16)],16),P("span",j({class:"ql-formats"},m.ptm("formats")),[P("button",j({class:"ql-bold",type:"button"},m.ptm("bold")),null,16),P("button",j({class:"ql-italic",type:"button"},m.ptm("italic")),null,16),P("button",j({class:"ql-underline",type:"button"},m.ptm("underline")),null,16)],16),P("span",j({class:"ql-formats"},m.ptm("formats")),[P("select",j({class:"ql-color"},m.ptm("color")),null,16),P("select",j({class:"ql-background"},m.ptm("background")),null,16)],16),P("span",j({class:"ql-formats"},m.ptm("formats")),[P("button",j({class:"ql-list",value:"ordered",type:"button"},m.ptm("list")),null,16),P("button",j({class:"ql-list",value:"bullet",type:"button"},m.ptm("list")),null,16),P("select",j({class:"ql-align"},m.ptm("select")),[P("option",j({defaultValue:""},m.ptm("option")),null,16),P("option",j({value:"center"},m.ptm("option")),null,16),P("option",j({value:"right"},m.ptm("option")),null,16),P("option",j({value:"justify"},m.ptm("option")),null,16)],16)],16),P("span",j({class:"ql-formats"},m.ptm("formats")),[P("button",j({class:"ql-link",type:"button"},m.ptm("link")),null,16),P("button",j({class:"ql-image",type:"button"},m.ptm("image")),null,16),P("button",j({class:"ql-code-block",type:"button"},m.ptm("codeBlock")),null,16)],16),P("span",j({class:"ql-formats"},m.ptm("formats")),[P("button",j({class:"ql-clean",type:"button"},m.ptm("clean")),null,16)],16)]})],16),P("div",j({ref:"editorElement",class:m.cx("content"),style:m.editorStyle},m.ptm("content")),null,16)],16)}hn.render=Jn;function et(m,q){return q.forEach((function(A){A&&typeof A!="string"&&!Array.isArray(A)&&Object.keys(A).forEach((function(a){if(a!=="default"&&!(a in m)){var e=Object.getOwnPropertyDescriptor(A,a);Object.defineProperty(m,a,e.get?e:{enumerable:!0,get:function(){return A[a]}})}}))})),Object.freeze(m)}function bn(m,q){return new Promise((function(A,a){let e;return nt(m).then((function(n){try{return e=n,A(new Blob([q.slice(0,2),e,q.slice(2)],{type:"image/jpeg"}))}catch(u){return a(u)}}),a)}))}const nt=m=>new Promise(((q,A)=>{const a=new FileReader;a.addEventListener("load",(({target:{result:e}})=>{const n=new DataView(e);let u=0;if(n.getUint16(u)!==65496)return A("not a valid JPEG");for(u+=2;;){const c=n.getUint16(u);if(c===65498)break;const w=n.getUint16(u+2);if(c===65505&&n.getUint32(u+4)===1165519206){const g=u+10;let t;switch(n.getUint16(g)){case 18761:t=!0;break;case 19789:t=!1;break;default:return A("TIFF header contains invalid endian")}if(n.getUint16(g+2,t)!==42)return A("TIFF header contains invalid version");const o=n.getUint32(g+4,t),l=g+o+2+12*n.getUint16(g+o,t);for(let s=g+o+2;s<l;s+=12)if(n.getUint16(s,t)==274){if(n.getUint16(s+2,t)!==3)return A("Orientation data type is invalid");if(n.getUint32(s+4,t)!==1)return A("Orientation data count is invalid");n.setUint16(s+8,1,t);break}return q(e.slice(u,u+2+w))}u+=2+w}return q(new Blob)})),a.readAsArrayBuffer(m)}));var We={},tt={get exports(){return We},set exports(m){We=m}};(function(m){var q,A,a={};tt.exports=a,a.parse=function(e,n){for(var u=a.bin.readUshort,c=a.bin.readUint,w=0,g={},t=new Uint8Array(e),o=t.length-4;c(t,o)!=101010256;)o--;w=o,w+=4;var l=u(t,w+=4);u(t,w+=2);var s=c(t,w+=2),b=c(t,w+=4);w+=4,w=b;for(var U=0;U<l;U++){c(t,w),w+=4,w+=4,w+=4,c(t,w+=4),s=c(t,w+=4);var E=c(t,w+=4),y=u(t,w+=4),z=u(t,w+2),O=u(t,w+4);w+=6;var $=c(t,w+=8);w+=4,w+=y+z+O,a._readLocal(t,$,g,s,E,n)}return g},a._readLocal=function(e,n,u,c,w,g){var t=a.bin.readUshort,o=a.bin.readUint;o(e,n),t(e,n+=4),t(e,n+=2);var l=t(e,n+=2);o(e,n+=2),o(e,n+=4),n+=4;var s=t(e,n+=8),b=t(e,n+=2);n+=2;var U=a.bin.readUTF8(e,n,s);if(n+=s,n+=b,g)u[U]={size:w,csize:c};else{var E=new Uint8Array(e.buffer,n);if(l==0)u[U]=new Uint8Array(E.buffer.slice(n,n+c));else{if(l!=8)throw"unknown compression method: "+l;var y=new Uint8Array(w);a.inflateRaw(E,y),u[U]=y}}},a.inflateRaw=function(e,n){return a.F.inflate(e,n)},a.inflate=function(e,n){return e[0],e[1],a.inflateRaw(new Uint8Array(e.buffer,e.byteOffset+2,e.length-6),n)},a.deflate=function(e,n){n==null&&(n={level:6});var u=0,c=new Uint8Array(50+Math.floor(1.1*e.length));c[u]=120,c[u+1]=156,u+=2,u=a.F.deflateRaw(e,c,u,n.level);var w=a.adler(e,0,e.length);return c[u+0]=w>>>24&255,c[u+1]=w>>>16&255,c[u+2]=w>>>8&255,c[u+3]=w>>>0&255,new Uint8Array(c.buffer,0,u+4)},a.deflateRaw=function(e,n){n==null&&(n={level:6});var u=new Uint8Array(50+Math.floor(1.1*e.length)),c=a.F.deflateRaw(e,u,c,n.level);return new Uint8Array(u.buffer,0,c)},a.encode=function(e,n){n==null&&(n=!1);var u=0,c=a.bin.writeUint,w=a.bin.writeUshort,g={};for(var t in e){var o=!a._noNeed(t)&&!n,l=e[t],s=a.crc.crc(l,0,l.length);g[t]={cpr:o,usize:l.length,crc:s,file:o?a.deflateRaw(l):l}}for(var t in g)u+=g[t].file.length+30+46+2*a.bin.sizeUTF8(t);u+=22;var b=new Uint8Array(u),U=0,E=[];for(var t in g){var y=g[t];E.push(U),U=a._writeHeader(b,U,t,y,0)}var z=0,O=U;for(var t in g)y=g[t],E.push(U),U=a._writeHeader(b,U,t,y,1,E[z++]);var $=U-O;return c(b,U,101010256),U+=4,w(b,U+=4,z),w(b,U+=2,z),c(b,U+=2,$),c(b,U+=4,O),U+=4,U+=2,b.buffer},a._noNeed=function(e){var n=e.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(n)!=-1},a._writeHeader=function(e,n,u,c,w,g){var t=a.bin.writeUint,o=a.bin.writeUshort,l=c.file;return t(e,n,w==0?67324752:33639248),n+=4,w==1&&(n+=2),o(e,n,20),o(e,n+=2,0),o(e,n+=2,c.cpr?8:0),t(e,n+=2,0),t(e,n+=4,c.crc),t(e,n+=4,l.length),t(e,n+=4,c.usize),o(e,n+=4,a.bin.sizeUTF8(u)),o(e,n+=2,0),n+=2,w==1&&(n+=2,n+=2,t(e,n+=6,g),n+=4),n+=a.bin.writeUTF8(e,n,u),w==0&&(e.set(l,n),n+=l.length),n},a.crc={table:(function(){for(var e=new Uint32Array(256),n=0;n<256;n++){for(var u=n,c=0;c<8;c++)1&u?u=3988292384^u>>>1:u>>>=1;e[n]=u}return e})(),update:function(e,n,u,c){for(var w=0;w<c;w++)e=a.crc.table[255&(e^n[u+w])]^e>>>8;return e},crc:function(e,n,u){return 4294967295^a.crc.update(4294967295,e,n,u)}},a.adler=function(e,n,u){for(var c=1,w=0,g=n,t=n+u;g<t;){for(var o=Math.min(g+5552,t);g<o;)w+=c+=e[g++];c%=65521,w%=65521}return w<<16|c},a.bin={readUshort:function(e,n){return e[n]|e[n+1]<<8},writeUshort:function(e,n,u){e[n]=255&u,e[n+1]=u>>8&255},readUint:function(e,n){return 16777216*e[n+3]+(e[n+2]<<16|e[n+1]<<8|e[n])},writeUint:function(e,n,u){e[n]=255&u,e[n+1]=u>>8&255,e[n+2]=u>>16&255,e[n+3]=u>>24&255},readASCII:function(e,n,u){for(var c="",w=0;w<u;w++)c+=String.fromCharCode(e[n+w]);return c},writeASCII:function(e,n,u){for(var c=0;c<u.length;c++)e[n+c]=u.charCodeAt(c)},pad:function(e){return e.length<2?"0"+e:e},readUTF8:function(e,n,u){for(var c,w="",g=0;g<u;g++)w+="%"+a.bin.pad(e[n+g].toString(16));try{c=decodeURIComponent(w)}catch{return a.bin.readASCII(e,n,u)}return c},writeUTF8:function(e,n,u){for(var c=u.length,w=0,g=0;g<c;g++){var t=u.charCodeAt(g);if((4294967168&t)==0)e[n+w]=t,w++;else if((4294965248&t)==0)e[n+w]=192|t>>6,e[n+w+1]=128|t>>0&63,w+=2;else if((4294901760&t)==0)e[n+w]=224|t>>12,e[n+w+1]=128|t>>6&63,e[n+w+2]=128|t>>0&63,w+=3;else{if((4292870144&t)!=0)throw"e";e[n+w]=240|t>>18,e[n+w+1]=128|t>>12&63,e[n+w+2]=128|t>>6&63,e[n+w+3]=128|t>>0&63,w+=4}}return w},sizeUTF8:function(e){for(var n=e.length,u=0,c=0;c<n;c++){var w=e.charCodeAt(c);if((4294967168&w)==0)u++;else if((4294965248&w)==0)u+=2;else if((4294901760&w)==0)u+=3;else{if((4292870144&w)!=0)throw"e";u+=4}}return u}},a.F={},a.F.deflateRaw=function(e,n,u,c){var w=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][c],g=a.F.U,t=a.F._goodIndex;a.F._hash;var o=a.F._putsE,l=0,s=u<<3,b=0,U=e.length;if(c==0){for(;l<U;)o(n,s,l+(_=Math.min(65535,U-l))==U?1:0),s=a.F._copyExact(e,l,_,n,s+8),l+=_;return s>>>3}var E=g.lits,y=g.strt,z=g.prev,O=0,$=0,R=0,v=0,S=0,f=0;for(U>2&&(y[f=a.F._hash(e,0)]=0),l=0;l<U;l++){if(S=f,l+1<U-2){f=a.F._hash(e,l+1);var d=l+1&32767;z[d]=y[f],y[f]=d}if(b<=l){(O>14e3||$>26697)&&U-l>100&&(b<l&&(E[O]=l-b,O+=2,b=l),s=a.F._writeBlock(l==U-1||b==U?1:0,E,O,v,e,R,l-R,n,s),O=$=v=0,R=l);var k=0;l<U-2&&(k=a.F._bestMatch(e,l,z,S,Math.min(w[2],U-l),w[3]));var _=k>>>16,x=65535&k;if(k!=0){x=65535&k;var F=t(_=k>>>16,g.of0);g.lhst[257+F]++;var p=t(x,g.df0);g.dhst[p]++,v+=g.exb[F]+g.dxb[p],E[O]=_<<23|l-b,E[O+1]=x<<16|F<<8|p,O+=2,b=l+_}else g.lhst[e[l]]++;$++}}for(R==l&&e.length!=0||(b<l&&(E[O]=l-b,O+=2,b=l),s=a.F._writeBlock(1,E,O,v,e,R,l-R,n,s),O=0,$=0,O=$=v=0,R=l);(7&s)!=0;)s++;return s>>>3},a.F._bestMatch=function(e,n,u,c,w,g){var t=32767&n,o=u[t],l=t-o+32768&32767;if(o==t||c!=a.F._hash(e,n-l))return 0;for(var s=0,b=0,U=Math.min(32767,n);l<=U&&--g!=0&&o!=t;){if(s==0||e[n+s]==e[n+s-l]){var E=a.F._howLong(e,n,l);if(E>s){if(b=l,(s=E)>=w)break;l+2<E&&(E=l+2);for(var y=0,z=0;z<E-2;z++){var O=n-l+z+32768&32767,$=O-u[O]+32768&32767;$>y&&(y=$,o=O)}}}l+=(t=o)-(o=u[t])+32768&32767}return s<<16|b},a.F._howLong=function(e,n,u){if(e[n]!=e[n-u]||e[n+1]!=e[n+1-u]||e[n+2]!=e[n+2-u])return 0;var c=n,w=Math.min(e.length,n+258);for(n+=3;n<w&&e[n]==e[n-u];)n++;return n-c},a.F._hash=function(e,n){return(e[n]<<8|e[n+1])+(e[n+2]<<4)&65535},a.saved=0,a.F._writeBlock=function(e,n,u,c,w,g,t,o,l){var s,b,U,E,y,z,O,$,R,v=a.F.U,S=a.F._putsF,f=a.F._putsE;v.lhst[256]++,b=(s=a.F.getTrees())[0],U=s[1],E=s[2],y=s[3],z=s[4],O=s[5],$=s[6],R=s[7];var d=32+((l+3&7)==0?0:8-(l+3&7))+(t<<3),k=c+a.F.contSize(v.fltree,v.lhst)+a.F.contSize(v.fdtree,v.dhst),_=c+a.F.contSize(v.ltree,v.lhst)+a.F.contSize(v.dtree,v.dhst);_+=14+3*O+a.F.contSize(v.itree,v.ihst)+(2*v.ihst[16]+3*v.ihst[17]+7*v.ihst[18]);for(var x=0;x<286;x++)v.lhst[x]=0;for(x=0;x<30;x++)v.dhst[x]=0;for(x=0;x<19;x++)v.ihst[x]=0;var F=d<k&&d<_?0:k<_?1:2;if(S(o,l,e),S(o,l+1,F),l+=3,F==0){for(;(7&l)!=0;)l++;l=a.F._copyExact(w,g,t,o,l)}else{var p,h;if(F==1&&(p=v.fltree,h=v.fdtree),F==2){a.F.makeCodes(v.ltree,b),a.F.revCodes(v.ltree,b),a.F.makeCodes(v.dtree,U),a.F.revCodes(v.dtree,U),a.F.makeCodes(v.itree,E),a.F.revCodes(v.itree,E),p=v.ltree,h=v.dtree,f(o,l,y-257),f(o,l+=5,z-1),f(o,l+=5,O-4),l+=4;for(var r=0;r<O;r++)f(o,l+3*r,v.itree[1+(v.ordr[r]<<1)]);l+=3*O,l=a.F._codeTiny($,v.itree,o,l),l=a.F._codeTiny(R,v.itree,o,l)}for(var i=g,M=0;M<u;M+=2){for(var C=n[M],T=C>>>23,L=i+(8388607&C);i<L;)l=a.F._writeLit(w[i++],p,o,l);if(T!=0){var V=n[M+1],H=V>>16,N=V>>8&255,I=255&V;f(o,l=a.F._writeLit(257+N,p,o,l),T-v.of0[N]),l+=v.exb[N],S(o,l=a.F._writeLit(I,h,o,l),H-v.df0[I]),l+=v.dxb[I],i+=T}}l=a.F._writeLit(256,p,o,l)}return l},a.F._copyExact=function(e,n,u,c,w){var g=w>>>3;return c[g]=u,c[g+1]=u>>>8,c[g+2]=255-c[g],c[g+3]=255-c[g+1],g+=4,c.set(new Uint8Array(e.buffer,n,u),g),w+(u+4<<3)},a.F.getTrees=function(){for(var e=a.F.U,n=a.F._hufTree(e.lhst,e.ltree,15),u=a.F._hufTree(e.dhst,e.dtree,15),c=[],w=a.F._lenCodes(e.ltree,c),g=[],t=a.F._lenCodes(e.dtree,g),o=0;o<c.length;o+=2)e.ihst[c[o]]++;for(o=0;o<g.length;o+=2)e.ihst[g[o]]++;for(var l=a.F._hufTree(e.ihst,e.itree,7),s=19;s>4&&e.itree[1+(e.ordr[s-1]<<1)]==0;)s--;return[n,u,l,w,t,s,c,g]},a.F.getSecond=function(e){for(var n=[],u=0;u<e.length;u+=2)n.push(e[u+1]);return n},a.F.nonZero=function(e){for(var n="",u=0;u<e.length;u+=2)e[u+1]!=0&&(n+=(u>>1)+",");return n},a.F.contSize=function(e,n){for(var u=0,c=0;c<n.length;c++)u+=n[c]*e[1+(c<<1)];return u},a.F._codeTiny=function(e,n,u,c){for(var w=0;w<e.length;w+=2){var g=e[w],t=e[w+1];c=a.F._writeLit(g,n,u,c);var o=g==16?2:g==17?3:7;g>15&&(a.F._putsE(u,c,t,o),c+=o)}return c},a.F._lenCodes=function(e,n){for(var u=e.length;u!=2&&e[u-1]==0;)u-=2;for(var c=0;c<u;c+=2){var w=e[c+1],g=c+3<u?e[c+3]:-1,t=c+5<u?e[c+5]:-1,o=c==0?-1:e[c-1];if(w==0&&g==w&&t==w){for(var l=c+5;l+2<u&&e[l+2]==w;)l+=2;(s=Math.min(l+1-c>>>1,138))<11?n.push(17,s-3):n.push(18,s-11),c+=2*s-2}else if(w==o&&g==w&&t==w){for(l=c+5;l+2<u&&e[l+2]==w;)l+=2;var s=Math.min(l+1-c>>>1,6);n.push(16,s-3),c+=2*s-2}else n.push(w,0)}return u>>>1},a.F._hufTree=function(e,n,u){var c=[],w=e.length,g=n.length,t=0;for(t=0;t<g;t+=2)n[t]=0,n[t+1]=0;for(t=0;t<w;t++)e[t]!=0&&c.push({lit:t,f:e[t]});var o=c.length,l=c.slice(0);if(o==0)return 0;if(o==1){var s=c[0].lit;return l=s==0?1:0,n[1+(s<<1)]=1,n[1+(l<<1)]=1,1}c.sort((function($,R){return $.f-R.f}));var b=c[0],U=c[1],E=0,y=1,z=2;for(c[0]={lit:-1,f:b.f+U.f,l:b,r:U,d:0};y!=o-1;)b=E!=y&&(z==o||c[E].f<c[z].f)?c[E++]:c[z++],U=E!=y&&(z==o||c[E].f<c[z].f)?c[E++]:c[z++],c[y++]={lit:-1,f:b.f+U.f,l:b,r:U};var O=a.F.setDepth(c[y-1],0);for(O>u&&(a.F.restrictDepth(l,u,O),O=u),t=0;t<o;t++)n[1+(l[t].lit<<1)]=l[t].d;return O},a.F.setDepth=function(e,n){return e.lit!=-1?(e.d=n,n):Math.max(a.F.setDepth(e.l,n+1),a.F.setDepth(e.r,n+1))},a.F.restrictDepth=function(e,n,u){var c=0,w=1<<u-n,g=0;for(e.sort((function(o,l){return l.d==o.d?o.f-l.f:l.d-o.d})),c=0;c<e.length&&e[c].d>n;c++){var t=e[c].d;e[c].d=n,g+=w-(1<<u-t)}for(g>>>=u-n;g>0;)(t=e[c].d)<n?(e[c].d++,g-=1<<n-t-1):c++;for(;c>=0;c--)e[c].d==n&&g<0&&(e[c].d--,g++);g!=0&&console.log("debt left")},a.F._goodIndex=function(e,n){var u=0;return n[16|u]<=e&&(u|=16),n[8|u]<=e&&(u|=8),n[4|u]<=e&&(u|=4),n[2|u]<=e&&(u|=2),n[1|u]<=e&&(u|=1),u},a.F._writeLit=function(e,n,u,c){return a.F._putsF(u,c,n[e<<1]),c+n[1+(e<<1)]},a.F.inflate=function(e,n){var u=Uint8Array;if(e[0]==3&&e[1]==0)return n||new u(0);var c=a.F,w=c._bitsF,g=c._bitsE,t=c._decodeTiny,o=c.makeCodes,l=c.codes2map,s=c._get17,b=c.U,U=n==null;U&&(n=new u(e.length>>>2<<3));for(var E,y,z=0,O=0,$=0,R=0,v=0,S=0,f=0,d=0,k=0;z==0;)if(z=w(e,k,1),O=w(e,k+1,2),k+=3,O!=0){if(U&&(n=a.F._check(n,d+(1<<17))),O==1&&(E=b.flmap,y=b.fdmap,S=511,f=31),O==2){$=g(e,k,5)+257,R=g(e,k+5,5)+1,v=g(e,k+10,4)+4,k+=14;for(var _=0;_<38;_+=2)b.itree[_]=0,b.itree[_+1]=0;var x=1;for(_=0;_<v;_++){var F=g(e,k+3*_,3);b.itree[1+(b.ordr[_]<<1)]=F,F>x&&(x=F)}k+=3*v,o(b.itree,x),l(b.itree,x,b.imap),E=b.lmap,y=b.dmap,k=t(b.imap,(1<<x)-1,$+R,e,k,b.ttree);var p=c._copyOut(b.ttree,0,$,b.ltree);S=(1<<p)-1;var h=c._copyOut(b.ttree,$,R,b.dtree);f=(1<<h)-1,o(b.ltree,p),l(b.ltree,p,E),o(b.dtree,h),l(b.dtree,h,y)}for(;;){var r=E[s(e,k)&S];k+=15&r;var i=r>>>4;if(!(i>>>8))n[d++]=i;else{if(i==256)break;var M=d+i-254;if(i>264){var C=b.ldef[i-257];M=d+(C>>>3)+g(e,k,7&C),k+=7&C}var T=y[s(e,k)&f];k+=15&T;var L=T>>>4,V=b.ddef[L],H=(V>>>4)+w(e,k,15&V);for(k+=15&V,U&&(n=a.F._check(n,d+(1<<17)));d<M;)n[d]=n[d++-H],n[d]=n[d++-H],n[d]=n[d++-H],n[d]=n[d++-H];d=M}}}else{(7&k)!=0&&(k+=8-(7&k));var N=4+(k>>>3),I=e[N-4]|e[N-3]<<8;U&&(n=a.F._check(n,d+I)),n.set(new u(e.buffer,e.byteOffset+N,I),d),k=N+I<<3,d+=I}return n.length==d?n:n.slice(0,d)},a.F._check=function(e,n){var u=e.length;if(n<=u)return e;var c=new Uint8Array(Math.max(u<<1,n));return c.set(e,0),c},a.F._decodeTiny=function(e,n,u,c,w,g){for(var t=a.F._bitsE,o=a.F._get17,l=0;l<u;){var s=e[o(c,w)&n];w+=15&s;var b=s>>>4;if(b<=15)g[l]=b,l++;else{var U=0,E=0;b==16?(E=3+t(c,w,2),w+=2,U=g[l-1]):b==17?(E=3+t(c,w,3),w+=3):b==18&&(E=11+t(c,w,7),w+=7);for(var y=l+E;l<y;)g[l]=U,l++}}return w},a.F._copyOut=function(e,n,u,c){for(var w=0,g=0,t=c.length>>>1;g<u;){var o=e[g+n];c[g<<1]=0,c[1+(g<<1)]=o,o>w&&(w=o),g++}for(;g<t;)c[g<<1]=0,c[1+(g<<1)]=0,g++;return w},a.F.makeCodes=function(e,n){for(var u,c,w,g,t=a.F.U,o=e.length,l=t.bl_count,s=0;s<=n;s++)l[s]=0;for(s=1;s<o;s+=2)l[e[s]]++;var b=t.next_code;for(u=0,l[0]=0,c=1;c<=n;c++)u=u+l[c-1]<<1,b[c]=u;for(w=0;w<o;w+=2)(g=e[w+1])!=0&&(e[w]=b[g],b[g]++)},a.F.codes2map=function(e,n,u){for(var c=e.length,w=a.F.U.rev15,g=0;g<c;g+=2)if(e[g+1]!=0)for(var t=g>>1,o=e[g+1],l=t<<4|o,s=n-o,b=e[g]<<s,U=b+(1<<s);b!=U;)u[w[b]>>>15-n]=l,b++},a.F.revCodes=function(e,n){for(var u=a.F.U.rev15,c=15-n,w=0;w<e.length;w+=2){var g=e[w]<<n-e[w+1];e[w]=u[g]>>>c}},a.F._putsE=function(e,n,u){u<<=7&n;var c=n>>>3;e[c]|=u,e[c+1]|=u>>>8},a.F._putsF=function(e,n,u){u<<=7&n;var c=n>>>3;e[c]|=u,e[c+1]|=u>>>8,e[c+2]|=u>>>16},a.F._bitsE=function(e,n,u){return(e[n>>>3]|e[1+(n>>>3)]<<8)>>>(7&n)&(1<<u)-1},a.F._bitsF=function(e,n,u){return(e[n>>>3]|e[1+(n>>>3)]<<8|e[2+(n>>>3)]<<16)>>>(7&n)&(1<<u)-1},a.F._get17=function(e,n){return(e[n>>>3]|e[1+(n>>>3)]<<8|e[2+(n>>>3)]<<16)>>>(7&n)},a.F._get25=function(e,n){return(e[n>>>3]|e[1+(n>>>3)]<<8|e[2+(n>>>3)]<<16|e[3+(n>>>3)]<<24)>>>(7&n)},a.F.U=(q=Uint16Array,A=Uint32Array,{next_code:new q(16),bl_count:new q(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new q(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new A(32),flmap:new q(512),fltree:[],fdmap:new q(32),fdtree:[],lmap:new q(32768),ltree:[],ttree:[],dmap:new q(32768),dtree:[],imap:new q(512),itree:[],rev15:new q(32768),lhst:new A(286),dhst:new A(30),ihst:new A(19),lits:new A(15e3),strt:new q(65536),prev:new q(32768)}),(function(){for(var e=a.F.U,n=0;n<32768;n++){var u=n;u=(4278255360&(u=(4042322160&(u=(3435973836&(u=(2863311530&u)>>>1|(1431655765&u)<<1))>>>2|(858993459&u)<<2))>>>4|(252645135&u)<<4))>>>8|(16711935&u)<<8,e.rev15[n]=(u>>>16|u<<16)>>>17}function c(w,g,t){for(;g--!=0;)w.push(0,t)}for(n=0;n<32;n++)e.ldef[n]=e.of0[n]<<3|e.exb[n],e.ddef[n]=e.df0[n]<<4|e.dxb[n];c(e.fltree,144,8),c(e.fltree,112,9),c(e.fltree,24,7),c(e.fltree,8,8),a.F.makeCodes(e.fltree,9),a.F.codes2map(e.fltree,9,e.flmap),a.F.revCodes(e.fltree,9),c(e.fdtree,32,5),a.F.makeCodes(e.fdtree,5),a.F.codes2map(e.fdtree,5,e.fdmap),a.F.revCodes(e.fdtree,5),c(e.itree,19,0),c(e.ltree,286,0),c(e.dtree,30,0),c(e.ttree,320,0)})()})();var lt=et({__proto__:null,default:We},[We]);const ve=(function(){var m={nextZero(t,o){for(;t[o]!=0;)o++;return o},readUshort:(t,o)=>t[o]<<8|t[o+1],writeUshort(t,o,l){t[o]=l>>8&255,t[o+1]=255&l},readUint:(t,o)=>16777216*t[o]+(t[o+1]<<16|t[o+2]<<8|t[o+3]),writeUint(t,o,l){t[o]=l>>24&255,t[o+1]=l>>16&255,t[o+2]=l>>8&255,t[o+3]=255&l},readASCII(t,o,l){let s="";for(let b=0;b<l;b++)s+=String.fromCharCode(t[o+b]);return s},writeASCII(t,o,l){for(let s=0;s<l.length;s++)t[o+s]=l.charCodeAt(s)},readBytes(t,o,l){const s=[];for(let b=0;b<l;b++)s.push(t[o+b]);return s},pad:t=>t.length<2?`0${t}`:t,readUTF8(t,o,l){let s,b="";for(let U=0;U<l;U++)b+=`%${m.pad(t[o+U].toString(16))}`;try{s=decodeURIComponent(b)}catch{return m.readASCII(t,o,l)}return s}};function q(t,o,l,s){const b=o*l,U=n(s),E=Math.ceil(o*U/8),y=new Uint8Array(4*b),z=new Uint32Array(y.buffer),{ctype:O}=s,{depth:$}=s,R=m.readUshort;if(O==6){const C=b<<2;if($==8)for(var v=0;v<C;v+=4)y[v]=t[v],y[v+1]=t[v+1],y[v+2]=t[v+2],y[v+3]=t[v+3];if($==16)for(v=0;v<C;v++)y[v]=t[v<<1]}else if(O==2){const C=s.tabs.tRNS;if(C==null){if($==8)for(v=0;v<b;v++){var S=3*v;z[v]=255<<24|t[S+2]<<16|t[S+1]<<8|t[S]}if($==16)for(v=0;v<b;v++)S=6*v,z[v]=255<<24|t[S+4]<<16|t[S+2]<<8|t[S]}else{var f=C[0];const T=C[1],L=C[2];if($==8)for(v=0;v<b;v++){var d=v<<2;S=3*v,z[v]=255<<24|t[S+2]<<16|t[S+1]<<8|t[S],t[S]==f&&t[S+1]==T&&t[S+2]==L&&(y[d+3]=0)}if($==16)for(v=0;v<b;v++)d=v<<2,S=6*v,z[v]=255<<24|t[S+4]<<16|t[S+2]<<8|t[S],R(t,S)==f&&R(t,S+2)==T&&R(t,S+4)==L&&(y[d+3]=0)}}else if(O==3){const C=s.tabs.PLTE,T=s.tabs.tRNS,L=T?T.length:0;if($==1)for(var k=0;k<l;k++){var _=k*E,x=k*o;for(v=0;v<o;v++){d=x+v<<2;var F=3*(p=t[_+(v>>3)]>>7-((7&v)<<0)&1);y[d]=C[F],y[d+1]=C[F+1],y[d+2]=C[F+2],y[d+3]=p<L?T[p]:255}}if($==2)for(k=0;k<l;k++)for(_=k*E,x=k*o,v=0;v<o;v++)d=x+v<<2,F=3*(p=t[_+(v>>2)]>>6-((3&v)<<1)&3),y[d]=C[F],y[d+1]=C[F+1],y[d+2]=C[F+2],y[d+3]=p<L?T[p]:255;if($==4)for(k=0;k<l;k++)for(_=k*E,x=k*o,v=0;v<o;v++)d=x+v<<2,F=3*(p=t[_+(v>>1)]>>4-((1&v)<<2)&15),y[d]=C[F],y[d+1]=C[F+1],y[d+2]=C[F+2],y[d+3]=p<L?T[p]:255;if($==8)for(v=0;v<b;v++){var p;d=v<<2,F=3*(p=t[v]),y[d]=C[F],y[d+1]=C[F+1],y[d+2]=C[F+2],y[d+3]=p<L?T[p]:255}}else if(O==4){if($==8)for(v=0;v<b;v++){d=v<<2;var h=t[r=v<<1];y[d]=h,y[d+1]=h,y[d+2]=h,y[d+3]=t[r+1]}if($==16)for(v=0;v<b;v++){var r;d=v<<2,h=t[r=v<<2],y[d]=h,y[d+1]=h,y[d+2]=h,y[d+3]=t[r+2]}}else if(O==0)for(f=s.tabs.tRNS?s.tabs.tRNS:-1,k=0;k<l;k++){const C=k*E,T=k*o;if($==1)for(var i=0;i<o;i++){var M=(h=255*(t[C+(i>>>3)]>>>7-(7&i)&1))==255*f?0:255;z[T+i]=M<<24|h<<16|h<<8|h}else if($==2)for(i=0;i<o;i++)M=(h=85*(t[C+(i>>>2)]>>>6-((3&i)<<1)&3))==85*f?0:255,z[T+i]=M<<24|h<<16|h<<8|h;else if($==4)for(i=0;i<o;i++)M=(h=17*(t[C+(i>>>1)]>>>4-((1&i)<<2)&15))==17*f?0:255,z[T+i]=M<<24|h<<16|h<<8|h;else if($==8)for(i=0;i<o;i++)M=(h=t[C+i])==f?0:255,z[T+i]=M<<24|h<<16|h<<8|h;else if($==16)for(i=0;i<o;i++)h=t[C+(i<<1)],M=R(t,C+(i<<1))==f?0:255,z[T+i]=M<<24|h<<16|h<<8|h}return y}function A(t,o,l,s){const b=n(t),U=Math.ceil(l*b/8),E=new Uint8Array((U+1+t.interlace)*s);return o=t.tabs.CgBI?e(o,E):a(o,E),t.interlace==0?o=u(o,t,0,l,s):t.interlace==1&&(o=(function(z,O){const $=O.width,R=O.height,v=n(O),S=v>>3,f=Math.ceil($*v/8),d=new Uint8Array(R*f);let k=0;const _=[0,0,4,0,2,0,1],x=[0,4,0,2,0,1,0],F=[8,8,8,4,4,2,2],p=[8,8,4,4,2,2,1];let h=0;for(;h<7;){const i=F[h],M=p[h];let C=0,T=0,L=_[h];for(;L<R;)L+=i,T++;let V=x[h];for(;V<$;)V+=M,C++;const H=Math.ceil(C*v/8);u(z,O,k,C,T);let N=0,I=_[h];for(;I<R;){let D=x[h],Z=k+N*H<<3;for(;D<$;){var r;if(v==1&&(r=(r=z[Z>>3])>>7-(7&Z)&1,d[I*f+(D>>3)]|=r<<7-((7&D)<<0)),v==2&&(r=(r=z[Z>>3])>>6-(7&Z)&3,d[I*f+(D>>2)]|=r<<6-((3&D)<<1)),v==4&&(r=(r=z[Z>>3])>>4-(7&Z)&15,d[I*f+(D>>1)]|=r<<4-((1&D)<<2)),v>=8){const Q=I*f+D*S;for(let B=0;B<S;B++)d[Q+B]=z[(Z>>3)+B]}Z+=v,D+=M}N++,I+=i}C*T!=0&&(k+=T*(1+H)),h+=1}return d})(o,t)),o}function a(t,o){return e(new Uint8Array(t.buffer,2,t.length-6),o)}var e=(function(){const t={H:{}};return t.H.N=function(o,l){const s=Uint8Array;let b,U,E=0,y=0,z=0,O=0,$=0,R=0,v=0,S=0,f=0;if(o[0]==3&&o[1]==0)return l||new s(0);const d=t.H,k=d.b,_=d.e,x=d.R,F=d.n,p=d.A,h=d.Z,r=d.m,i=l==null;for(i&&(l=new s(o.length>>>2<<5));E==0;)if(E=k(o,f,1),y=k(o,f+1,2),f+=3,y!=0){if(i&&(l=t.H.W(l,S+(1<<17))),y==1&&(b=r.J,U=r.h,R=511,v=31),y==2){z=_(o,f,5)+257,O=_(o,f+5,5)+1,$=_(o,f+10,4)+4,f+=14;let C=1;for(var M=0;M<38;M+=2)r.Q[M]=0,r.Q[M+1]=0;for(M=0;M<$;M++){const V=_(o,f+3*M,3);r.Q[1+(r.X[M]<<1)]=V,V>C&&(C=V)}f+=3*$,F(r.Q,C),p(r.Q,C,r.u),b=r.w,U=r.d,f=x(r.u,(1<<C)-1,z+O,o,f,r.v);const T=d.V(r.v,0,z,r.C);R=(1<<T)-1;const L=d.V(r.v,z,O,r.D);v=(1<<L)-1,F(r.C,T),p(r.C,T,b),F(r.D,L),p(r.D,L,U)}for(;;){const C=b[h(o,f)&R];f+=15&C;const T=C>>>4;if(!(T>>>8))l[S++]=T;else{if(T==256)break;{let L=S+T-254;if(T>264){const D=r.q[T-257];L=S+(D>>>3)+_(o,f,7&D),f+=7&D}const V=U[h(o,f)&v];f+=15&V;const H=V>>>4,N=r.c[H],I=(N>>>4)+k(o,f,15&N);for(f+=15&N;S<L;)l[S]=l[S++-I],l[S]=l[S++-I],l[S]=l[S++-I],l[S]=l[S++-I];S=L}}}}else{(7&f)!=0&&(f+=8-(7&f));const C=4+(f>>>3),T=o[C-4]|o[C-3]<<8;i&&(l=t.H.W(l,S+T)),l.set(new s(o.buffer,o.byteOffset+C,T),S),f=C+T<<3,S+=T}return l.length==S?l:l.slice(0,S)},t.H.W=function(o,l){const s=o.length;if(l<=s)return o;const b=new Uint8Array(s<<1);return b.set(o,0),b},t.H.R=function(o,l,s,b,U,E){const y=t.H.e,z=t.H.Z;let O=0;for(;O<s;){const $=o[z(b,U)&l];U+=15&$;const R=$>>>4;if(R<=15)E[O]=R,O++;else{let v=0,S=0;R==16?(S=3+y(b,U,2),U+=2,v=E[O-1]):R==17?(S=3+y(b,U,3),U+=3):R==18&&(S=11+y(b,U,7),U+=7);const f=O+S;for(;O<f;)E[O]=v,O++}}return U},t.H.V=function(o,l,s,b){let U=0,E=0;const y=b.length>>>1;for(;E<s;){const z=o[E+l];b[E<<1]=0,b[1+(E<<1)]=z,z>U&&(U=z),E++}for(;E<y;)b[E<<1]=0,b[1+(E<<1)]=0,E++;return U},t.H.n=function(o,l){const s=t.H.m,b=o.length;let U,E,y,z;const O=s.j;for(var $=0;$<=l;$++)O[$]=0;for($=1;$<b;$+=2)O[o[$]]++;const R=s.K;for(U=0,O[0]=0,E=1;E<=l;E++)U=U+O[E-1]<<1,R[E]=U;for(y=0;y<b;y+=2)z=o[y+1],z!=0&&(o[y]=R[z],R[z]++)},t.H.A=function(o,l,s){const b=o.length,U=t.H.m.r;for(let E=0;E<b;E+=2)if(o[E+1]!=0){const y=E>>1,z=o[E+1],O=y<<4|z,$=l-z;let R=o[E]<<$;const v=R+(1<<$);for(;R!=v;)s[U[R]>>>15-l]=O,R++}},t.H.l=function(o,l){const s=t.H.m.r,b=15-l;for(let U=0;U<o.length;U+=2){const E=o[U]<<l-o[U+1];o[U]=s[E]>>>b}},t.H.M=function(o,l,s){s<<=7&l;const b=l>>>3;o[b]|=s,o[b+1]|=s>>>8},t.H.I=function(o,l,s){s<<=7&l;const b=l>>>3;o[b]|=s,o[b+1]|=s>>>8,o[b+2]|=s>>>16},t.H.e=function(o,l,s){return(o[l>>>3]|o[1+(l>>>3)]<<8)>>>(7&l)&(1<<s)-1},t.H.b=function(o,l,s){return(o[l>>>3]|o[1+(l>>>3)]<<8|o[2+(l>>>3)]<<16)>>>(7&l)&(1<<s)-1},t.H.Z=function(o,l){return(o[l>>>3]|o[1+(l>>>3)]<<8|o[2+(l>>>3)]<<16)>>>(7&l)},t.H.i=function(o,l){return(o[l>>>3]|o[1+(l>>>3)]<<8|o[2+(l>>>3)]<<16|o[3+(l>>>3)]<<24)>>>(7&l)},t.H.m=(function(){const o=Uint16Array,l=Uint32Array;return{K:new o(16),j:new o(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new o(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new l(32),J:new o(512),_:[],h:new o(32),$:[],w:new o(32768),C:[],v:[],d:new o(32768),D:[],u:new o(512),Q:[],r:new o(32768),s:new l(286),Y:new l(30),a:new l(19),t:new l(15e3),k:new o(65536),g:new o(32768)}})(),(function(){const o=t.H.m;for(var l=0;l<32768;l++){let b=l;b=(2863311530&b)>>>1|(1431655765&b)<<1,b=(3435973836&b)>>>2|(858993459&b)<<2,b=(4042322160&b)>>>4|(252645135&b)<<4,b=(4278255360&b)>>>8|(16711935&b)<<8,o.r[l]=(b>>>16|b<<16)>>>17}function s(b,U,E){for(;U--!=0;)b.push(0,E)}for(l=0;l<32;l++)o.q[l]=o.S[l]<<3|o.T[l],o.c[l]=o.p[l]<<4|o.z[l];s(o._,144,8),s(o._,112,9),s(o._,24,7),s(o._,8,8),t.H.n(o._,9),t.H.A(o._,9,o.J),t.H.l(o._,9),s(o.$,32,5),t.H.n(o.$,5),t.H.A(o.$,5,o.h),t.H.l(o.$,5),s(o.Q,19,0),s(o.C,286,0),s(o.D,30,0),s(o.v,320,0)})(),t.H.N})();function n(t){return[1,null,3,1,2,null,4][t.ctype]*t.depth}function u(t,o,l,s,b){let U=n(o);const E=Math.ceil(s*U/8);let y,z;U=Math.ceil(U/8);let O=t[l],$=0;if(O>1&&(t[l]=[0,0,1][O-2]),O==3)for($=U;$<E;$++)t[$+1]=t[$+1]+(t[$+1-U]>>>1)&255;for(let R=0;R<b;R++)if(y=l+R*E,z=y+R+1,O=t[z-1],$=0,O==0)for(;$<E;$++)t[y+$]=t[z+$];else if(O==1){for(;$<U;$++)t[y+$]=t[z+$];for(;$<E;$++)t[y+$]=t[z+$]+t[y+$-U]}else if(O==2)for(;$<E;$++)t[y+$]=t[z+$]+t[y+$-E];else if(O==3){for(;$<U;$++)t[y+$]=t[z+$]+(t[y+$-E]>>>1);for(;$<E;$++)t[y+$]=t[z+$]+(t[y+$-E]+t[y+$-U]>>>1)}else{for(;$<U;$++)t[y+$]=t[z+$]+c(0,t[y+$-E],0);for(;$<E;$++)t[y+$]=t[z+$]+c(t[y+$-U],t[y+$-E],t[y+$-U-E])}return t}function c(t,o,l){const s=t+o-l,b=s-t,U=s-o,E=s-l;return b*b<=U*U&&b*b<=E*E?t:U*U<=E*E?o:l}function w(t,o,l){l.width=m.readUint(t,o),o+=4,l.height=m.readUint(t,o),o+=4,l.depth=t[o],o++,l.ctype=t[o],o++,l.compress=t[o],o++,l.filter=t[o],o++,l.interlace=t[o],o++}function g(t,o,l,s,b,U,E,y,z){const O=Math.min(o,b),$=Math.min(l,U);let R=0,v=0;for(let h=0;h<$;h++)for(let r=0;r<O;r++)if(E>=0&&y>=0?(R=h*o+r<<2,v=(y+h)*b+E+r<<2):(R=(-y+h)*o-E+r<<2,v=h*b+r<<2),z==0)s[v]=t[R],s[v+1]=t[R+1],s[v+2]=t[R+2],s[v+3]=t[R+3];else if(z==1){var S=t[R+3]*.00392156862745098,f=t[R]*S,d=t[R+1]*S,k=t[R+2]*S,_=s[v+3]*(1/255),x=s[v]*_,F=s[v+1]*_,p=s[v+2]*_;const i=1-S,M=S+_*i,C=M==0?0:1/M;s[v+3]=255*M,s[v+0]=(f+x*i)*C,s[v+1]=(d+F*i)*C,s[v+2]=(k+p*i)*C}else if(z==2)S=t[R+3],f=t[R],d=t[R+1],k=t[R+2],_=s[v+3],x=s[v],F=s[v+1],p=s[v+2],S==_&&f==x&&d==F&&k==p?(s[v]=0,s[v+1]=0,s[v+2]=0,s[v+3]=0):(s[v]=f,s[v+1]=d,s[v+2]=k,s[v+3]=S);else if(z==3){if(S=t[R+3],f=t[R],d=t[R+1],k=t[R+2],_=s[v+3],x=s[v],F=s[v+1],p=s[v+2],S==_&&f==x&&d==F&&k==p)continue;if(S<220&&_>20)return!1}return!0}return{decode:function(o){const l=new Uint8Array(o);let s=8;const b=m,U=b.readUshort,E=b.readUint,y={tabs:{},frames:[]},z=new Uint8Array(l.length);let O,$=0,R=0;const v=[137,80,78,71,13,10,26,10];for(var S=0;S<8;S++)if(l[S]!=v[S])throw"The input is not a PNG file!";for(;s<l.length;){const h=b.readUint(l,s);s+=4;const r=b.readASCII(l,s,4);if(s+=4,r=="IHDR")w(l,s,y);else if(r=="iCCP"){for(var f=s;l[f]!=0;)f++;b.readASCII(l,s,f-s),l[f+1];const i=l.slice(f+2,s+h);let M=null;try{M=a(i)}catch{M=e(i)}y.tabs[r]=M}else if(r=="CgBI")y.tabs[r]=l.slice(s,s+4);else if(r=="IDAT"){for(S=0;S<h;S++)z[$+S]=l[s+S];$+=h}else if(r=="acTL")y.tabs[r]={num_frames:E(l,s),num_plays:E(l,s+4)},O=new Uint8Array(l.length);else if(r=="fcTL"){R!=0&&((p=y.frames[y.frames.length-1]).data=A(y,O.slice(0,R),p.rect.width,p.rect.height),R=0);const i={x:E(l,s+12),y:E(l,s+16),width:E(l,s+4),height:E(l,s+8)};let M=U(l,s+22);M=U(l,s+20)/(M==0?100:M);const C={rect:i,delay:Math.round(1e3*M),dispose:l[s+24],blend:l[s+25]};y.frames.push(C)}else if(r=="fdAT"){for(S=0;S<h-4;S++)O[R+S]=l[s+S+4];R+=h-4}else if(r=="pHYs")y.tabs[r]=[b.readUint(l,s),b.readUint(l,s+4),l[s+8]];else if(r=="cHRM")for(y.tabs[r]=[],S=0;S<8;S++)y.tabs[r].push(b.readUint(l,s+4*S));else if(r=="tEXt"||r=="zTXt"){y.tabs[r]==null&&(y.tabs[r]={});var d=b.nextZero(l,s),k=b.readASCII(l,s,d-s),_=s+h-d-1;if(r=="tEXt")F=b.readASCII(l,d+1,_);else{var x=a(l.slice(d+2,d+2+_));F=b.readUTF8(x,0,x.length)}y.tabs[r][k]=F}else if(r=="iTXt"){y.tabs[r]==null&&(y.tabs[r]={}),d=0,f=s,d=b.nextZero(l,f),k=b.readASCII(l,f,d-f);const i=l[f=d+1];var F;l[f+1],f+=2,d=b.nextZero(l,f),b.readASCII(l,f,d-f),f=d+1,d=b.nextZero(l,f),b.readUTF8(l,f,d-f),_=h-((f=d+1)-s),i==0?F=b.readUTF8(l,f,_):(x=a(l.slice(f,f+_)),F=b.readUTF8(x,0,x.length)),y.tabs[r][k]=F}else if(r=="PLTE")y.tabs[r]=b.readBytes(l,s,h);else if(r=="hIST"){const i=y.tabs.PLTE.length/3;for(y.tabs[r]=[],S=0;S<i;S++)y.tabs[r].push(U(l,s+2*S))}else if(r=="tRNS")y.ctype==3?y.tabs[r]=b.readBytes(l,s,h):y.ctype==0?y.tabs[r]=U(l,s):y.ctype==2&&(y.tabs[r]=[U(l,s),U(l,s+2),U(l,s+4)]);else if(r=="gAMA")y.tabs[r]=b.readUint(l,s)/1e5;else if(r=="sRGB")y.tabs[r]=l[s];else if(r=="bKGD")y.ctype==0||y.ctype==4?y.tabs[r]=[U(l,s)]:y.ctype==2||y.ctype==6?y.tabs[r]=[U(l,s),U(l,s+2),U(l,s+4)]:y.ctype==3&&(y.tabs[r]=l[s]);else if(r=="IEND")break;s+=h,b.readUint(l,s),s+=4}var p;return R!=0&&((p=y.frames[y.frames.length-1]).data=A(y,O.slice(0,R),p.rect.width,p.rect.height)),y.data=A(y,z,y.width,y.height),delete y.compress,delete y.interlace,delete y.filter,y},toRGBA8:function(o){const l=o.width,s=o.height;if(o.tabs.acTL==null)return[q(o.data,l,s,o).buffer];const b=[];o.frames[0].data==null&&(o.frames[0].data=o.data);const U=l*s*4,E=new Uint8Array(U),y=new Uint8Array(U),z=new Uint8Array(U);for(let $=0;$<o.frames.length;$++){const R=o.frames[$],v=R.rect.x,S=R.rect.y,f=R.rect.width,d=R.rect.height,k=q(R.data,f,d,o);if($!=0)for(var O=0;O<U;O++)z[O]=E[O];if(R.blend==0?g(k,f,d,E,l,s,v,S,0):R.blend==1&&g(k,f,d,E,l,s,v,S,1),b.push(E.buffer.slice(0)),R.dispose!=0){if(R.dispose==1)g(y,f,d,E,l,s,v,S,0);else if(R.dispose==2)for(O=0;O<U;O++)E[O]=z[O]}}return b},_paeth:c,_copyTile:g,_bin:m}})();(function(){const{_copyTile:m}=ve,{_bin:q}=ve,A=ve._paeth;var a={table:(function(){const f=new Uint32Array(256);for(let d=0;d<256;d++){let k=d;for(let _=0;_<8;_++)1&k?k=3988292384^k>>>1:k>>>=1;f[d]=k}return f})(),update(f,d,k,_){for(let x=0;x<_;x++)f=a.table[255&(f^d[k+x])]^f>>>8;return f},crc:(f,d,k)=>4294967295^a.update(4294967295,f,d,k)};function e(f,d,k,_){d[k]+=f[0]*_>>4,d[k+1]+=f[1]*_>>4,d[k+2]+=f[2]*_>>4,d[k+3]+=f[3]*_>>4}function n(f){return Math.max(0,Math.min(255,f))}function u(f,d){const k=f[0]-d[0],_=f[1]-d[1],x=f[2]-d[2],F=f[3]-d[3];return k*k+_*_+x*x+F*F}function c(f,d,k,_,x,F,p){p==null&&(p=1);const h=_.length,r=[];for(var i=0;i<h;i++){const I=_[i];r.push([I>>>0&255,I>>>8&255,I>>>16&255,I>>>24&255])}for(i=0;i<h;i++){let I=4294967295;for(var M=0,C=0;C<h;C++){var T=u(r[i],r[C]);C!=i&&T<I&&(I=T,M=C)}}const L=new Uint32Array(x.buffer),V=new Int16Array(d*k*4),H=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(i=0;i<H.length;i++)H[i]=255*((H[i]+.5)/16-.5);for(let I=0;I<k;I++)for(let D=0;D<d;D++){var N;i=4*(I*d+D),p!=2?N=[n(f[i]+V[i]),n(f[i+1]+V[i+1]),n(f[i+2]+V[i+2]),n(f[i+3]+V[i+3])]:(T=H[4*(3&I)+(3&D)],N=[n(f[i]+T),n(f[i+1]+T),n(f[i+2]+T),n(f[i+3]+T)]),M=0;let Z=16777215;for(C=0;C<h;C++){const W=u(N,r[C]);W<Z&&(Z=W,M=C)}const Q=r[M],B=[N[0]-Q[0],N[1]-Q[1],N[2]-Q[2],N[3]-Q[3]];p==1&&(D!=d-1&&e(B,V,i+4,7),I!=k-1&&(D!=0&&e(B,V,i+4*d-4,3),e(B,V,i+4*d,5),D!=d-1&&e(B,V,i+4*d+4,1))),F[i>>2]=M,L[i>>2]=_[M]}}function w(f,d,k,_,x){x==null&&(x={});const{crc:F}=a,p=q.writeUint,h=q.writeUshort,r=q.writeASCII;let i=8;const M=f.frames.length>1;let C,T=!1,L=33+(M?20:0);if(x.sRGB!=null&&(L+=13),x.pHYs!=null&&(L+=21),x.iCCP!=null&&(C=pako.deflate(x.iCCP),L+=21+C.length+4),f.ctype==3){for(var V=f.plte.length,H=0;H<V;H++)f.plte[H]>>>24!=255&&(T=!0);L+=8+3*V+4+(T?8+1*V+4:0)}for(var N=0;N<f.frames.length;N++)M&&(L+=38),L+=(Q=f.frames[N]).cimg.length+12,N!=0&&(L+=4);L+=12;const I=new Uint8Array(L),D=[137,80,78,71,13,10,26,10];for(H=0;H<8;H++)I[H]=D[H];if(p(I,i,13),i+=4,r(I,i,"IHDR"),i+=4,p(I,i,d),i+=4,p(I,i,k),i+=4,I[i]=f.depth,i++,I[i]=f.ctype,i++,I[i]=0,i++,I[i]=0,i++,I[i]=0,i++,p(I,i,F(I,i-17,17)),i+=4,x.sRGB!=null&&(p(I,i,1),i+=4,r(I,i,"sRGB"),i+=4,I[i]=x.sRGB,i++,p(I,i,F(I,i-5,5)),i+=4),x.iCCP!=null){const B=13+C.length;p(I,i,B),i+=4,r(I,i,"iCCP"),i+=4,r(I,i,"ICC profile"),i+=11,i+=2,I.set(C,i),i+=C.length,p(I,i,F(I,i-(B+4),B+4)),i+=4}if(x.pHYs!=null&&(p(I,i,9),i+=4,r(I,i,"pHYs"),i+=4,p(I,i,x.pHYs[0]),i+=4,p(I,i,x.pHYs[1]),i+=4,I[i]=x.pHYs[2],i++,p(I,i,F(I,i-13,13)),i+=4),M&&(p(I,i,8),i+=4,r(I,i,"acTL"),i+=4,p(I,i,f.frames.length),i+=4,p(I,i,x.loop!=null?x.loop:0),i+=4,p(I,i,F(I,i-12,12)),i+=4),f.ctype==3){for(p(I,i,3*(V=f.plte.length)),i+=4,r(I,i,"PLTE"),i+=4,H=0;H<V;H++){const B=3*H,W=f.plte[H],J=255&W,te=W>>>8&255,Fe=W>>>16&255;I[i+B+0]=J,I[i+B+1]=te,I[i+B+2]=Fe}if(i+=3*V,p(I,i,F(I,i-3*V-4,3*V+4)),i+=4,T){for(p(I,i,V),i+=4,r(I,i,"tRNS"),i+=4,H=0;H<V;H++)I[i+H]=f.plte[H]>>>24&255;i+=V,p(I,i,F(I,i-V-4,V+4)),i+=4}}let Z=0;for(N=0;N<f.frames.length;N++){var Q=f.frames[N];M&&(p(I,i,26),i+=4,r(I,i,"fcTL"),i+=4,p(I,i,Z++),i+=4,p(I,i,Q.rect.width),i+=4,p(I,i,Q.rect.height),i+=4,p(I,i,Q.rect.x),i+=4,p(I,i,Q.rect.y),i+=4,h(I,i,_[N]),i+=2,h(I,i,1e3),i+=2,I[i]=Q.dispose,i++,I[i]=Q.blend,i++,p(I,i,F(I,i-30,30)),i+=4);const B=Q.cimg;p(I,i,(V=B.length)+(N==0?0:4)),i+=4;const W=i;r(I,i,N==0?"IDAT":"fdAT"),i+=4,N!=0&&(p(I,i,Z++),i+=4),I.set(B,i),i+=V,p(I,i,F(I,W,i-W)),i+=4}return p(I,i,0),i+=4,r(I,i,"IEND"),i+=4,p(I,i,F(I,i-4,4)),i+=4,I.buffer}function g(f,d,k){for(let _=0;_<f.frames.length;_++){const x=f.frames[_];x.rect.width;const F=x.rect.height,p=new Uint8Array(F*x.bpl+F);x.cimg=s(x.img,F,x.bpp,x.bpl,p,d,k)}}function t(f,d,k,_,x){const F=x[0],p=x[1],h=x[2],r=x[3],i=x[4],M=x[5];let C=6,T=8,L=255;for(var V=0;V<f.length;V++){const ie=new Uint8Array(f[V]);for(var H=ie.length,N=0;N<H;N+=4)L&=ie[N+3]}const I=L!=255,D=(function(X,G,re,de,ee,pe){const ne=[];for(var K=0;K<X.length;K++){const fe=new Uint8Array(X[K]),be=new Uint32Array(fe.buffer);var qe;let he=0,ye=0,we=G,Ee=re,Ye=de?1:0;if(K!=0){const Fn=pe||de||K==1||ne[K-2].dispose!=0?1:2;let Je=0,on=1e9;for(let ze=0;ze<Fn;ze++){var Ae=new Uint8Array(X[K-1-ze]);const Cn=new Uint32Array(X[K-1-ze]);let xe=G,_e=re,Me=-1,Ne=-1;for(let $e=0;$e<re;$e++)for(let Pe=0;Pe<G;Pe++)be[ae=$e*G+Pe]!=Cn[ae]&&(Pe<xe&&(xe=Pe),Pe>Me&&(Me=Pe),$e<_e&&(_e=$e),$e>Ne&&(Ne=$e));Me==-1&&(xe=_e=Me=Ne=0),ee&&((1&xe)==1&&xe--,(1&_e)==1&&_e--);const rn=(Me-xe+1)*(Ne-_e+1);rn<on&&(on=rn,Je=ze,he=xe,ye=_e,we=Me-xe+1,Ee=Ne-_e+1)}Ae=new Uint8Array(X[K-1-Je]),Je==1&&(ne[K-1].dispose=2),qe=new Uint8Array(we*Ee*4),m(Ae,G,re,qe,we,Ee,-he,-ye,0),Ye=m(fe,G,re,qe,we,Ee,-he,-ye,3)?1:0,Ye==1?l(fe,G,re,qe,{x:he,y:ye,width:we,height:Ee}):m(fe,G,re,qe,we,Ee,-he,-ye,0)}else qe=fe.slice(0);ne.push({rect:{x:he,y:ye,width:we,height:Ee},img:qe,blend:Ye,dispose:0})}if(de)for(K=0;K<ne.length;K++){if((Ce=ne[K]).blend==1)continue;const fe=Ce.rect,be=ne[K-1].rect,he=Math.min(fe.x,be.x),ye=Math.min(fe.y,be.y),we={x:he,y:ye,width:Math.max(fe.x+fe.width,be.x+be.width)-he,height:Math.max(fe.y+fe.height,be.y+be.height)-ye};ne[K-1].dispose=1,K-1!=0&&o(X,G,re,ne,K-1,we,ee),o(X,G,re,ne,K,we,ee)}let De=0;if(X.length!=1)for(var ae=0;ae<ne.length;ae++){var Ce;De+=(Ce=ne[ae]).rect.width*Ce.rect.height}return ne})(f,d,k,F,p,h),Z={},Q=[],B=[];if(_!=0){const ie=[];for(N=0;N<D.length;N++)ie.push(D[N].img.buffer);const X=(function(ee){let pe=0;for(var ne=0;ne<ee.length;ne++)pe+=ee[ne].byteLength;const K=new Uint8Array(pe);let qe=0;for(ne=0;ne<ee.length;ne++){const Ae=new Uint8Array(ee[ne]),De=Ae.length;for(let ae=0;ae<De;ae+=4){let Ce=Ae[ae],fe=Ae[ae+1],be=Ae[ae+2];const he=Ae[ae+3];he==0&&(Ce=fe=be=0),K[qe+ae]=Ce,K[qe+ae+1]=fe,K[qe+ae+2]=be,K[qe+ae+3]=he}qe+=De}return K.buffer})(ie),G=U(X,_);for(N=0;N<G.plte.length;N++)Q.push(G.plte[N].est.rgba);let re=0;for(N=0;N<D.length;N++){const de=(J=D[N]).img.length;var W=new Uint8Array(G.inds.buffer,re>>2,de>>2);B.push(W);const ee=new Uint8Array(G.abuf,re,de);M&&c(J.img,J.rect.width,J.rect.height,Q,ee,W),J.img.set(ee),re+=de}}else for(V=0;V<D.length;V++){var J=D[V];const ie=new Uint32Array(J.img.buffer);var te=J.rect.width;for(H=ie.length,W=new Uint8Array(H),B.push(W),N=0;N<H;N++){const X=ie[N];if(N!=0&&X==ie[N-1])W[N]=W[N-1];else if(N>te&&X==ie[N-te])W[N]=W[N-te];else{let G=Z[X];if(G==null&&(Z[X]=G=Q.length,Q.push(X),Q.length>=300))break;W[N]=G}}}const Fe=Q.length;for(Fe<=256&&i==0&&(T=Fe<=2?1:Fe<=4?2:Fe<=16?4:8,T=Math.max(T,r)),V=0;V<D.length;V++){(J=D[V]).rect.x,J.rect.y,te=J.rect.width;const ie=J.rect.height;let X=J.img;new Uint32Array(X.buffer);let G=4*te,re=4;if(Fe<=256&&i==0){G=Math.ceil(T*te/8);var ge=new Uint8Array(G*ie);const de=B[V];for(let ee=0;ee<ie;ee++){N=ee*G;const pe=ee*te;if(T==8)for(var Y=0;Y<te;Y++)ge[N+Y]=de[pe+Y];else if(T==4)for(Y=0;Y<te;Y++)ge[N+(Y>>1)]|=de[pe+Y]<<4-4*(1&Y);else if(T==2)for(Y=0;Y<te;Y++)ge[N+(Y>>2)]|=de[pe+Y]<<6-2*(3&Y);else if(T==1)for(Y=0;Y<te;Y++)ge[N+(Y>>3)]|=de[pe+Y]<<7-1*(7&Y)}X=ge,C=3,re=1}else if(I==0&&D.length==1){ge=new Uint8Array(te*ie*3);const de=te*ie;for(N=0;N<de;N++){const ee=3*N,pe=4*N;ge[ee]=X[pe],ge[ee+1]=X[pe+1],ge[ee+2]=X[pe+2]}X=ge,C=2,re=3,G=3*te}J.img=X,J.bpl=G,J.bpp=re}return{ctype:C,depth:T,plte:Q,frames:D}}function o(f,d,k,_,x,F,p){const h=Uint8Array,r=Uint32Array,i=new h(f[x-1]),M=new r(f[x-1]),C=x+1<f.length?new h(f[x+1]):null,T=new h(f[x]),L=new r(T.buffer);let V=d,H=k,N=-1,I=-1;for(let Z=0;Z<F.height;Z++)for(let Q=0;Q<F.width;Q++){const B=F.x+Q,W=F.y+Z,J=W*d+B,te=L[J];te==0||_[x-1].dispose==0&&M[J]==te&&(C==null||C[4*J+3]!=0)||(B<V&&(V=B),B>N&&(N=B),W<H&&(H=W),W>I&&(I=W))}N==-1&&(V=H=N=I=0),p&&((1&V)==1&&V--,(1&H)==1&&H--),F={x:V,y:H,width:N-V+1,height:I-H+1};const D=_[x];D.rect=F,D.blend=1,D.img=new Uint8Array(F.width*F.height*4),_[x-1].dispose==0?(m(i,d,k,D.img,F.width,F.height,-F.x,-F.y,0),l(T,d,k,D.img,F)):m(T,d,k,D.img,F.width,F.height,-F.x,-F.y,0)}function l(f,d,k,_,x){m(f,d,k,_,x.width,x.height,-x.x,-x.y,2)}function s(f,d,k,_,x,F,p){const h=[];let r,i=[0,1,2,3,4];F!=-1?i=[F]:(d*_>5e5||k==1)&&(i=[0]),p&&(r={level:0});const M=lt;for(var C=0;C<i.length;C++){for(let V=0;V<d;V++)b(x,f,V,_,k,i[C]);h.push(M.deflate(x,r))}let T,L=1e9;for(C=0;C<h.length;C++)h[C].length<L&&(T=C,L=h[C].length);return h[T]}function b(f,d,k,_,x,F){const p=k*_;let h=p+k;if(f[h]=F,h++,F==0)if(_<500)for(var r=0;r<_;r++)f[h+r]=d[p+r];else f.set(new Uint8Array(d.buffer,p,_),h);else if(F==1){for(r=0;r<x;r++)f[h+r]=d[p+r];for(r=x;r<_;r++)f[h+r]=d[p+r]-d[p+r-x]+256&255}else if(k==0){for(r=0;r<x;r++)f[h+r]=d[p+r];if(F==2)for(r=x;r<_;r++)f[h+r]=d[p+r];if(F==3)for(r=x;r<_;r++)f[h+r]=d[p+r]-(d[p+r-x]>>1)+256&255;if(F==4)for(r=x;r<_;r++)f[h+r]=d[p+r]-A(d[p+r-x],0,0)+256&255}else{if(F==2)for(r=0;r<_;r++)f[h+r]=d[p+r]+256-d[p+r-_]&255;if(F==3){for(r=0;r<x;r++)f[h+r]=d[p+r]+256-(d[p+r-_]>>1)&255;for(r=x;r<_;r++)f[h+r]=d[p+r]+256-(d[p+r-_]+d[p+r-x]>>1)&255}if(F==4){for(r=0;r<x;r++)f[h+r]=d[p+r]+256-A(0,d[p+r-_],0)&255;for(r=x;r<_;r++)f[h+r]=d[p+r]+256-A(d[p+r-x],d[p+r-_],d[p+r-x-_])&255}}}function U(f,d){const k=new Uint8Array(f),_=k.slice(0),x=new Uint32Array(_.buffer),F=E(_,d),p=F[0],h=F[1],r=k.length,i=new Uint8Array(r>>2);let M;if(k.length<2e7)for(var C=0;C<r;C+=4)M=y(p,T=k[C]*(1/255),L=k[C+1]*(1/255),V=k[C+2]*(1/255),H=k[C+3]*(1/255)),i[C>>2]=M.ind,x[C>>2]=M.est.rgba;else for(C=0;C<r;C+=4){var T=k[C]*.00392156862745098,L=k[C+1]*(1/255),V=k[C+2]*(1/255),H=k[C+3]*(1/255);for(M=p;M.left;)M=z(M.est,T,L,V,H)<=0?M.left:M.right;i[C>>2]=M.ind,x[C>>2]=M.est.rgba}return{abuf:_.buffer,inds:i,plte:h}}function E(f,d,k){k==null&&(k=1e-4);const _=new Uint32Array(f.buffer),x={i0:0,i1:f.length,bst:null,est:null,tdst:0,left:null,right:null};x.bst=R(f,x.i0,x.i1),x.est=v(x.bst);const F=[x];for(;F.length<d;){let h=0,r=0;for(var p=0;p<F.length;p++)F[p].est.L>h&&(h=F[p].est.L,r=p);if(h<k)break;const i=F[r],M=O(f,_,i.i0,i.i1,i.est.e,i.est.eMq255);if(i.i0>=M||i.i1<=M){i.est.L=0;continue}const C={i0:i.i0,i1:M,bst:null,est:null,tdst:0,left:null,right:null};C.bst=R(f,C.i0,C.i1),C.est=v(C.bst);const T={i0:M,i1:i.i1,bst:null,est:null,tdst:0,left:null,right:null};for(T.bst={R:[],m:[],N:i.bst.N-C.bst.N},p=0;p<16;p++)T.bst.R[p]=i.bst.R[p]-C.bst.R[p];for(p=0;p<4;p++)T.bst.m[p]=i.bst.m[p]-C.bst.m[p];T.est=v(T.bst),i.left=C,i.right=T,F[r]=C,F.push(T)}for(F.sort(((h,r)=>r.bst.N-h.bst.N)),p=0;p<F.length;p++)F[p].ind=p;return[x,F]}function y(f,d,k,_,x){if(f.left==null)return f.tdst=(function(C,T,L,V,H){const N=T-C[0],I=L-C[1],D=V-C[2],Z=H-C[3];return N*N+I*I+D*D+Z*Z})(f.est.q,d,k,_,x),f;const F=z(f.est,d,k,_,x);let p=f.left,h=f.right;F>0&&(p=f.right,h=f.left);const r=y(p,d,k,_,x);if(r.tdst<=F*F)return r;const i=y(h,d,k,_,x);return i.tdst<r.tdst?i:r}function z(f,d,k,_,x){const{e:F}=f;return F[0]*d+F[1]*k+F[2]*_+F[3]*x-f.eMq}function O(f,d,k,_,x,F){for(_-=4;k<_;){for(;$(f,k,x)<=F;)k+=4;for(;$(f,_,x)>F;)_-=4;if(k>=_)break;const p=d[k>>2];d[k>>2]=d[_>>2],d[_>>2]=p,k+=4,_-=4}for(;$(f,k,x)>F;)k-=4;return k+4}function $(f,d,k){return f[d]*k[0]+f[d+1]*k[1]+f[d+2]*k[2]+f[d+3]*k[3]}function R(f,d,k){const _=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],x=[0,0,0,0],F=k-d>>2;for(let p=d;p<k;p+=4){const h=f[p]*.00392156862745098,r=f[p+1]*(1/255),i=f[p+2]*(1/255),M=f[p+3]*(1/255);x[0]+=h,x[1]+=r,x[2]+=i,x[3]+=M,_[0]+=h*h,_[1]+=h*r,_[2]+=h*i,_[3]+=h*M,_[5]+=r*r,_[6]+=r*i,_[7]+=r*M,_[10]+=i*i,_[11]+=i*M,_[15]+=M*M}return _[4]=_[1],_[8]=_[2],_[9]=_[6],_[12]=_[3],_[13]=_[7],_[14]=_[11],{R:_,m:x,N:F}}function v(f){const{R:d}=f,{m:k}=f,{N:_}=f,x=k[0],F=k[1],p=k[2],h=k[3],r=_==0?0:1/_,i=[d[0]-x*x*r,d[1]-x*F*r,d[2]-x*p*r,d[3]-x*h*r,d[4]-F*x*r,d[5]-F*F*r,d[6]-F*p*r,d[7]-F*h*r,d[8]-p*x*r,d[9]-p*F*r,d[10]-p*p*r,d[11]-p*h*r,d[12]-h*x*r,d[13]-h*F*r,d[14]-h*p*r,d[15]-h*h*r],M=i,C=S;let T=[Math.random(),Math.random(),Math.random(),Math.random()],L=0,V=0;if(_!=0)for(let N=0;N<16&&(T=C.multVec(M,T),V=Math.sqrt(C.dot(T,T)),T=C.sml(1/V,T),!(N!=0&&Math.abs(V-L)<1e-9));N++)L=V;const H=[x*r,F*r,p*r,h*r];return{Cov:i,q:H,e:T,L,eMq255:C.dot(C.sml(255,H),T),eMq:C.dot(T,H),rgba:(Math.round(255*H[3])<<24|Math.round(255*H[2])<<16|Math.round(255*H[1])<<8|Math.round(255*H[0])<<0)>>>0}}var S={multVec:(f,d)=>[f[0]*d[0]+f[1]*d[1]+f[2]*d[2]+f[3]*d[3],f[4]*d[0]+f[5]*d[1]+f[6]*d[2]+f[7]*d[3],f[8]*d[0]+f[9]*d[1]+f[10]*d[2]+f[11]*d[3],f[12]*d[0]+f[13]*d[1]+f[14]*d[2]+f[15]*d[3]],dot:(f,d)=>f[0]*d[0]+f[1]*d[1]+f[2]*d[2]+f[3]*d[3],sml:(f,d)=>[f*d[0],f*d[1],f*d[2],f*d[3]]};ve.encode=function(d,k,_,x,F,p,h){x==null&&(x=0),h==null&&(h=!1);const r=t(d,k,_,x,[!1,!1,!1,0,h,!1]);return g(r,-1),w(r,k,_,F,p)},ve.encodeLL=function(d,k,_,x,F,p,h,r){const i={ctype:0+(x==1?0:2)+(F==0?0:4),depth:p,frames:[]},M=(x+F)*p,C=M*k;for(let T=0;T<d.length;T++)i.frames.push({rect:{x:0,y:0,width:k,height:_},img:new Uint8Array(d[T]),blend:0,dispose:1,bpp:Math.ceil(M/8),bpl:Math.ceil(C/8)});return g(i,0,!0),w(i,k,_,h,r)},ve.encode.compress=t,ve.encode.dither=c,ve.quantize=U,ve.quantize.getKDtree=E,ve.quantize.getNearest=y})();const mn={toArrayBuffer(m,q){const A=m.width,a=m.height,e=A<<2,n=m.getContext("2d").getImageData(0,0,A,a),u=new Uint32Array(n.data.buffer),c=(32*A+31)/32<<2,w=c*a,g=122+w,t=new ArrayBuffer(g),o=new DataView(t),l=1<<20;let s,b,U,E,y=l,z=0,O=0,$=0;function R(f){o.setUint16(O,f,!0),O+=2}function v(f){o.setUint32(O,f,!0),O+=4}function S(f){O+=f}R(19778),v(g),S(4),v(122),v(108),v(A),v(-a>>>0),R(1),R(32),v(3),v(w),v(2835),v(2835),S(8),v(16711680),v(65280),v(255),v(4278190080),v(1466527264),(function f(){for(;z<a&&y>0;){for(E=122+z*c,s=0;s<e;)y--,b=u[$++],U=b>>>24,o.setUint32(E+s,b<<8|U),s+=4;z++}$<u.length?(y=l,setTimeout(f,mn._dly)):q(t)})()},toBlob(m,q){this.toArrayBuffer(m,(A=>{q(new Blob([A],{type:"image/bmp"}))}))},_dly:9};var ue={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},ot={[ue.CHROME]:16384,[ue.FIREFOX]:11180,[ue.DESKTOP_SAFARI]:16384,[ue.IE]:8192,[ue.IOS]:4096,[ue.ETC]:8192};const tn=typeof window<"u",vn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ge=tn&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),rt=(tn||vn)&&(Ge&&Ge.getOriginalSymbol(window,"File")||typeof File<"u"&&File),gn=(tn||vn)&&(Ge&&Ge.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function ln(m,q,A=Date.now()){return new Promise((a=>{const e=m.split(","),n=e[0].match(/:(.*?);/)[1],u=globalThis.atob(e[1]);let c=u.length;const w=new Uint8Array(c);for(;c--;)w[c]=u.charCodeAt(c);const g=new Blob([w],{type:n});g.name=q,g.lastModified=A,a(g)}))}function wn(m){return new Promise(((q,A)=>{const a=new gn;a.onload=()=>q(a.result),a.onerror=e=>A(e),a.readAsDataURL(m)}))}function kn(m){return new Promise(((q,A)=>{const a=new Image;a.onload=()=>q(a),a.onerror=e=>A(e),a.src=m}))}function Se(){if(Se.cachedResult!==void 0)return Se.cachedResult;let m=ue.ETC;const{userAgent:q}=navigator;return/Chrom(e|ium)/i.test(q)?m=ue.CHROME:/iP(ad|od|hone)/i.test(q)&&/WebKit/i.test(q)?m=ue.IOS:/Safari/i.test(q)?m=ue.DESKTOP_SAFARI:/Firefox/i.test(q)?m=ue.FIREFOX:(/MSIE/i.test(q)||document.documentMode)&&(m=ue.IE),Se.cachedResult=m,Se.cachedResult}function yn(m,q){const A=Se(),a=ot[A];let e=m,n=q,u=e*n;const c=e>n?n/e:e/n;for(;u>a*a;){const w=(a+e)/2,g=(a+n)/2;w<g?(n=g,e=g*c):(n=w*c,e=w),u=e*n}return{width:e,height:n}}function Xe(m,q){let A,a;try{if(A=new OffscreenCanvas(m,q),a=A.getContext("2d"),a===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{A=document.createElement("canvas"),a=A.getContext("2d")}return A.width=m,A.height=q,[A,a]}function An(m,q){const{width:A,height:a}=yn(m.width,m.height),[e,n]=Xe(A,a);return q&&/jpe?g/.test(q)&&(n.fillStyle="white",n.fillRect(0,0,e.width,e.height)),n.drawImage(m,0,0,e.width,e.height),e}function Qe(){return Qe.cachedResult!==void 0||(Qe.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Qe.cachedResult}function Ke(m,q={}){return new Promise((function(A,a){let e,n;var u=function(){try{return n=An(e,q.fileType||m.type),A([e,n])}catch(w){return a(w)}},c=function(w){try{var g=function(t){try{throw t}catch(o){return a(o)}};try{let t;return wn(m).then((function(o){try{return t=o,kn(t).then((function(l){try{return e=l,(function(){try{return u()}catch(s){return a(s)}})()}catch(s){return g(s)}}),g)}catch(l){return g(l)}}),g)}catch(t){g(t)}}catch(t){return a(t)}};try{if(Qe()||[ue.DESKTOP_SAFARI,ue.MOBILE_SAFARI].includes(Se()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(m).then((function(w){try{return e=w,u()}catch{return c()}}),c)}catch{c()}}))}function Ze(m,q,A,a,e=1){return new Promise((function(n,u){let c;if(q==="image/png"){let g,t,o;return g=m.getContext("2d"),{data:t}=g.getImageData(0,0,m.width,m.height),o=ve.encode([t.buffer],m.width,m.height,4096*e),c=new Blob([o],{type:q}),c.name=A,c.lastModified=a,w.call(this)}{let g=function(){return w.call(this)};if(q==="image/bmp")return new Promise((t=>mn.toBlob(m,t))).then((function(t){try{return c=t,c.name=A,c.lastModified=a,g.call(this)}catch(o){return u(o)}}).bind(this),u);{let t=function(){return g.call(this)};if(typeof OffscreenCanvas=="function"&&m instanceof OffscreenCanvas)return m.convertToBlob({type:q,quality:e}).then((function(o){try{return c=o,c.name=A,c.lastModified=a,t.call(this)}catch(l){return u(l)}}).bind(this),u);{let o;return o=m.toDataURL(q,e),ln(o,A,a).then((function(l){try{return c=l,t.call(this)}catch(s){return u(s)}}).bind(this),u)}}}function w(){return n(c)}}))}function ke(m){m.width=0,m.height=0}function Te(){return new Promise((function(m,q){let A,a,e,n;return Te.cachedResult!==void 0?m(Te.cachedResult):ln("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then((function(u){try{return A=u,Ke(A).then((function(c){try{return a=c[1],Ze(a,A.type,A.name,A.lastModified).then((function(w){try{return e=w,ke(a),Ke(e).then((function(g){try{return n=g[0],Te.cachedResult=n.width===1&&n.height===2,m(Te.cachedResult)}catch(t){return q(t)}}),q)}catch(g){return q(g)}}),q)}catch(w){return q(w)}}),q)}catch(c){return q(c)}}),q)}))}function xn(m){return new Promise(((q,A)=>{const a=new gn;a.onload=e=>{const n=new DataView(e.target.result);if(n.getUint16(0,!1)!=65496)return q(-2);const u=n.byteLength;let c=2;for(;c<u;){if(n.getUint16(c+2,!1)<=8)return q(-1);const w=n.getUint16(c,!1);if(c+=2,w==65505){if(n.getUint32(c+=2,!1)!=1165519206)return q(-1);const g=n.getUint16(c+=6,!1)==18761;c+=n.getUint32(c+4,g);const t=n.getUint16(c,g);c+=2;for(let o=0;o<t;o++)if(n.getUint16(c+12*o,g)==274)return q(n.getUint16(c+12*o+8,g))}else{if((65280&w)!=65280)break;c+=n.getUint16(c,!1)}}return q(-1)},a.onerror=e=>A(e),a.readAsArrayBuffer(m)}))}function _n(m,q){const{width:A}=m,{height:a}=m,{maxWidthOrHeight:e}=q;let n,u=m;return isFinite(e)&&(A>e||a>e)&&([u,n]=Xe(A,a),A>a?(u.width=e,u.height=a/A*e):(u.width=A/a*e,u.height=e),n.drawImage(m,0,0,u.width,u.height),ke(m)),u}function Un(m,q){const{width:A}=m,{height:a}=m,[e,n]=Xe(A,a);switch(q>4&&q<9?(e.width=a,e.height=A):(e.width=A,e.height=a),q){case 2:n.transform(-1,0,0,1,A,0);break;case 3:n.transform(-1,0,0,-1,A,a);break;case 4:n.transform(1,0,0,-1,0,a);break;case 5:n.transform(0,1,1,0,0,0);break;case 6:n.transform(0,1,-1,0,a,0);break;case 7:n.transform(0,-1,-1,0,a,A);break;case 8:n.transform(0,-1,1,0,0,A)}return n.drawImage(m,0,0,A,a),ke(m),e}function qn(m,q,A=0){return new Promise((function(a,e){let n,u,c,w,g,t,o,l,s,b,U,E,y,z,O,$,R,v,S,f;function d(_=5){if(q.signal&&q.signal.aborted)throw q.signal.reason;n+=_,q.onProgress(Math.min(n,100))}function k(_){if(q.signal&&q.signal.aborted)throw q.signal.reason;n=Math.min(Math.max(_,n),100),q.onProgress(n)}return n=A,u=q.maxIteration||10,c=1024*q.maxSizeMB*1024,d(),Ke(m,q).then((function(_){try{return[,w]=_,d(),g=_n(w,q),d(),new Promise((function(x,F){var p;if(!(p=q.exifOrientation))return xn(m).then((function(r){try{return p=r,h.call(this)}catch(i){return F(i)}}).bind(this),F);function h(){return x(p)}return h.call(this)})).then((function(x){try{return t=x,d(),Te().then((function(F){try{return o=F?g:Un(g,t),d(),l=q.initialQuality||1,s=q.fileType||m.type,Ze(o,s,m.name,m.lastModified,l).then((function(p){try{{let r=function(){if(u--&&(O>c||O>y)){let M,C;return M=f?.95*S.width:S.width,C=f?.95*S.height:S.height,[R,v]=Xe(M,C),v.drawImage(S,0,0,M,C),l*=s==="image/png"?.85:.95,Ze(R,s,m.name,m.lastModified,l).then((function(T){try{return $=T,ke(S),S=R,O=$.size,k(Math.min(99,Math.floor((z-O)/(z-c)*100))),r}catch(L){return e(L)}}),e)}return[1]},i=function(){return ke(S),ke(R),ke(g),ke(o),ke(w),k(100),a($)};if(b=p,d(),U=b.size>c,E=b.size>m.size,!U&&!E)return k(100),a(b);var h;return y=m.size,z=b.size,O=z,S=o,f=!q.alwaysKeepResolution&&U,(h=(function(M){for(;M;){if(M.then)return void M.then(h,e);try{if(M.pop){if(M.length)return M.pop()?i.call(this):M;M=r}else M=M.call(this)}catch(C){return e(C)}}}).bind(this))(r)}}catch(r){return e(r)}}).bind(this),e)}catch(p){return e(p)}}).bind(this),e)}catch(F){return e(F)}}).bind(this),e)}catch(x){return e(x)}}).bind(this),e)}))}const it=`
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;let nn;function at(m,q){return new Promise(((A,a)=>{nn||(nn=(function(u){const c=[];return c.push(u),URL.createObjectURL(new Blob(c))})(it));const e=new Worker(nn);e.addEventListener("message",(function(u){if(q.signal&&q.signal.aborted)e.terminate();else if(u.data.progress===void 0){if(u.data.error)return a(new Error(u.data.error)),void e.terminate();A(u.data.file),e.terminate()}else q.onProgress(u.data.progress)})),e.addEventListener("error",a),q.signal&&q.signal.addEventListener("abort",(()=>{a(q.signal.reason),e.terminate()})),e.postMessage({file:m,imageCompressionLibUrl:q.libURL,options:{...q,onProgress:void 0,signal:void 0}})}))}function ce(m,q){return new Promise((function(A,a){let e,n,u,c,w,g;if(e={...q},u=0,{onProgress:c}=e,e.maxSizeMB=e.maxSizeMB||Number.POSITIVE_INFINITY,w=typeof e.useWebWorker!="boolean"||e.useWebWorker,delete e.useWebWorker,e.onProgress=s=>{u=s,typeof c=="function"&&c(u)},!(m instanceof Blob||m instanceof rt))return a(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(m.type))return a(new Error("The file given is not an image"));if(g=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!w||typeof Worker!="function"||g)return qn(m,e).then((function(s){try{return n=s,l.call(this)}catch(b){return a(b)}}).bind(this),a);var t=(function(){try{return l.call(this)}catch(s){return a(s)}}).bind(this),o=function(s){try{return qn(m,e).then((function(b){try{return n=b,t()}catch(U){return a(U)}}),a)}catch(b){return a(b)}};try{return e.libURL=e.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",at(m,e).then((function(s){try{return n=s,t()}catch{return o()}}),o)}catch{o()}function l(){try{n.name=m.name,n.lastModified=m.lastModified}catch{}try{e.preserveExif&&m.type==="image/jpeg"&&(!e.fileType||e.fileType&&e.fileType===m.type)&&(n=bn(m,n))}catch{}return A(n)}}))}ce.getDataUrlFromFile=wn,ce.getFilefromDataUrl=ln,ce.loadImage=kn,ce.drawImageInCanvas=An,ce.drawFileInCanvas=Ke,ce.canvasToFile=Ze,ce.getExifOrientation=xn,ce.handleMaxWidthOrHeight=_n,ce.followExifOrientation=Un,ce.cleanupCanvasMemory=ke,ce.isAutoOrientationInBrowser=Te,ce.approximateBelowMaximumCanvasSizeOfBrowser=yn,ce.copyExifWithoutOrientation=bn,ce.getBrowserName=Se,ce.version="2.0.2";const st={key:0,class:"section has-text-centered"},ct={class:"container p-5"},dt={class:"level"},ft={class:"buttons"},ut=["disabled"],pt=["disabled"],qt={class:"columns"},ht={class:"column is-three-fifths"},bt={class:"field"},mt={class:"control"},vt={key:0,class:"help is-danger"},gt={class:"field"},wt={class:"select is-fullwidth"},kt=["disabled"],yt={value:"",disabled:""},At=["value"],xt={key:0,class:"help is-danger"},_t={class:"column"},Ut={class:"field"},Ft={class:"control"},Ct={key:0,class:"help is-danger"},Et={class:"field"},$t={class:"control"},Pt={key:0,class:"help is-danger"},It={class:"field"},St={class:"control"},Mt={key:0,class:"help is-danger"},Ot={class:"field"},Rt={class:"control"},Tt={class:"checkbox has-text-weight-bold",for:"isOpen"},zt={class:"columns"},Nt={class:"column"},Vt={style:{border:"1px solid #dbdbdb","border-radius":"4px"}},Ht={class:"column is-12"},Lt={class:"file has-name is-fullwidth"},Dt={class:"file-label"},jt={class:"columns is-multiline mt-3"},Bt={class:"card p-1"},Qt={class:"card-image"},Wt={class:"image is-1by1"},Gt=["src"],Kt={class:"card-footer"},Zt=["onClick"],Xt={class:""},Yt={class:"columns is-vcentered"},Jt={class:"column"},el={class:"field is-grouped is-grouped-multiline"},nl={class:"checkbox tag is-light"},tl=["value"],ll={class:"column is-5"},ol={class:"field has-addons"},rl={class:"control has-icons-left is-expanded"},il={class:"columns is-multiline"},al={class:"columns is-multiline"},sl={class:"card"},cl={class:"card-image"},dl={class:"image is-4by3"},fl=["src"],ul={class:"card-content"},pl={class:"media-content"},ql={class:"tags"},hl={class:"tag is-info"},bl={class:"tag is-info is-light"},ml={class:"is-5"},vl={class:"has-text-danger has-text-weight-bold"},gl={class:"has-text-danger has-text-weight-bold"},wl={class:"has-text-danger has-text-weight-bold"},kl={class:"content mt-3"},yl={class:"buttons"},Al=["onClick"],xl=["onClick"],_l={__name:"AdminProductView",setup(m){const q=Vn(),A=Dn(),{productTypes:a,isLoading:e}=sn(q),{products:n,pisLoading:u}=sn(A),c=me(!1),w=me(!1),g=me({name:"",price:0,classPrice:0,matetialPrice:0,isOpen:!0,typeId:"",description:"",imageUrl:[]}),t=me({name:"",price:0,classPrice:0,matetialPrice:0,isOpen:!0,typeId:"",description:"",imageUrl:[]}),o=me(!1),l=me(null),s=me([]),b=me([]),U=me(""),E=me([]),y=me([]),z=()=>{n.value&&(y.value=n.value.filter(p=>{const r=(p.name||"").toLowerCase().includes(U.value.toLowerCase()),i=E.value.includes(p.typeId);return r&&i}))};cn(n,()=>{z()},{deep:!0,immediate:!0});const O=p=>{const h=a.value.find(r=>r.id===p);return h?h.name:"未分類"},$=[];Rn(()=>{$.push(q.fetchProductTypes()),$.push(A.fetchProducts());const p=cn(a,h=>{h.length>0&&(E.value=h.map(r=>r.id),z(),p())})}),Tn(()=>{$.forEach(p=>p&&p())});const R=p=>{o.value=!0,l.value=p.id,t.value={...p},b.value=p.imageUrls?[...p.imageUrls]:[],s.value=[],w.value=!0},v=async()=>{if(x()){c.value=!0;try{let p=[];s.value.length>0&&(p=await A.uploadMultipleImages(s.value));const h={...t.value,imageUrls:o.value?[...t.value.imageUrls||[],...p]:p};o.value?await A.updateProduct(l.value,h):await A.addProduct(h),alert("儲存成功！"),f(),s.value=[],b.value=[]}catch(p){alert("儲存發生錯誤，請查看 Console",p)}finally{c.value=!1}}},S=async(p,h)=>{if(confirm(`確定要刪除「${h}」這個產品？此動作無法復原。`)){console.log("Store delete function:",A.deleteProduct);try{await A.deleteProduct(p),alert("已成功刪除")}catch(r){alert("刪除失敗，請稍後再試",r)}}},f=()=>{w.value=!1,o.value=!1,l.value=null,t.value={name:"",price:0,classPrice:0,matetialPrice:0,sOpen:!0,imageUrls:[]},b.value=[],s.value=[],g.value={name:""}},d=()=>{f()},k=async p=>{const h=Array.from(p.target.files),r={maxSizeMB:.8,maxWidthOrHeight:1280,useWebWorker:!0,fileType:"image/jpeg"};for(const i of h)try{const M=await ce(i,r);s.value.push(M),b.value.push(URL.createObjectURL(M))}catch(M){console.error("圖片壓縮失敗:",M)}p.target.value=""},_=p=>{const h=b.value[p];b.value.splice(p,1),h.startsWith("blob:")?s.value=s.value.filter(r=>URL.createObjectURL(r)!==h):t.value.imageUrls=t.value.imageUrls.filter(r=>r!==h)},x=()=>{g.value={name:"",typeId:"",price:"",classPrice:"",matetialPrice:"",isOpen:!0,description:"",imageUrl:[]};let p=!0;(!t.value.name||t.value.name.trim()==="")&&(g.value.name="請輸入產品名稱",p=!1),t.value.typeId||(g.value.typeId="請選擇產品類別",p=!1);const h=t.value.price;h==null||h===""?(g.value.price="請輸入價格",p=!1):h<0?(g.value.price="價格必須大於 0",p=!1):Number.isInteger(Number(h))||(g.value.price="價格必須是整數",p=!1);const r=t.value.classPrice;r==null||r===""?(g.value.classPrice="請輸入價格",p=!1):r<0?(g.value.classPrice="價格必須大於 0",p=!1):Number.isInteger(Number(r))||(g.value.classPrice="價格必須是整數",p=!1);const i=t.value.matetialPrice;return i==null||i===""?(g.value.matetialPrice="請輸入價格",p=!1):i<0?(g.value.matetialPrice="價格必須大於 0",p=!1):Number.isInteger(Number(i))||(g.value.matetialPrice="價格必須是整數",p=!1),p},F=()=>{U.value="",E.value=a.value.map(p=>p.id),z()};return(p,h)=>(le(),oe(Re,null,[Ie(u)?(le(),oe("div",st,[...h[11]||(h[11]=[P("button",{class:"button is-loading is-large is-white"},null,-1)])])):Oe("",!0),P("div",ct,[P("div",dt,[h[12]||(h[12]=P("h1",{class:"subtitle has-text-weight-bold"},"產品維護列表",-1)),P("button",{class:"button is-info",onClick:h[0]||(h[0]=r=>w.value=!0)},"新增產品")]),dn(Hn,{modelValue:w.value,"onUpdate:modelValue":h[8]||(h[8]=r=>w.value=r)},{header:en(()=>[P("span",{class:je([o.value?"tag is-large has-text-success":"tag is-large has-text-info","has-text-weight-bold"])},se(o.value?"修改產品":"建立產品"),3)]),footer:en(()=>[P("div",ft,[P("button",{class:je(["button is-success",{"is-loading":c.value}]),disabled:c.value,onClick:v}," 確認 ",10,ut),P("button",{class:"button is-danger",disabled:c.value,onClick:d},"取消",8,pt)])]),default:en(()=>[P("div",qt,[P("div",ht,[P("div",bt,[h[13]||(h[13]=P("label",{for:"name",class:"label"},"產品名稱",-1)),P("div",mt,[Ue(P("input",{"onUpdate:modelValue":h[1]||(h[1]=r=>t.value.name=r),id:"name",class:"input",type:"text",placeholder:"請輸入名稱"},null,512),[[He,t.value.name]])]),g.value.name?(le(),oe("span",vt,se(g.value.name),1)):Oe("",!0)]),P("div",gt,[h[14]||(h[14]=P("label",{class:"label"},"產品類別",-1)),P("div",{class:je(["control",{"is-loading":Ie(e)}])},[P("div",wt,[Ue(P("select",{"onUpdate:modelValue":h[2]||(h[2]=r=>t.value.typeId=r),disabled:Ie(e)},[P("option",yt,se(Ie(e)?"載入類別中...":"請選擇產品類別"),1),(le(!0),oe(Re,null,Ve(Ie(a),r=>(le(),oe("option",{key:r.id,value:r.id},se(r.name),9,At))),128))],8,kt),[[zn,t.value.typeId]])])],2),g.value.typeId?(le(),oe("p",xt,se(g.value.typeId),1)):Oe("",!0)])]),P("div",_t,[P("div",Ut,[h[15]||(h[15]=P("label",{for:"price",class:"label"},"成品價格",-1)),P("div",Ft,[Ue(P("input",{"onUpdate:modelValue":h[3]||(h[3]=r=>t.value.price=r),id:"price",class:"input",type:"number",placeholder:"請輸入價格",min:"0",step:"1"},null,512),[[He,t.value.price]])]),g.value.price?(le(),oe("span",Ct,se(g.value.price),1)):Oe("",!0)]),P("div",Et,[h[16]||(h[16]=P("label",{for:"classPrice",class:"label"},"單堂課價格",-1)),P("div",$t,[Ue(P("input",{"onUpdate:modelValue":h[4]||(h[4]=r=>t.value.classPrice=r),id:"classPrice",class:"input",type:"number",placeholder:"請輸入價格",min:"0",step:"1"},null,512),[[He,t.value.classPrice]])]),g.value.price?(le(),oe("span",Pt,se(g.value.classPrice),1)):Oe("",!0)]),P("div",It,[h[17]||(h[17]=P("label",{for:"matetialPrice",class:"label"},"材料包價格",-1)),P("div",St,[Ue(P("input",{"onUpdate:modelValue":h[5]||(h[5]=r=>t.value.matetialPrice=r),id:"matetialPrice",class:"input",type:"number",placeholder:"請輸入價格",min:"0",step:"1"},null,512),[[He,t.value.matetialPrice]])]),g.value.price?(le(),oe("span",Mt,se(g.value.matetialPrice),1)):Oe("",!0)]),P("div",Ot,[P("div",Rt,[P("label",Tt,[Ue(P("input",{id:"isOpen","onUpdate:modelValue":h[6]||(h[6]=r=>t.value.isOpen=r),type:"checkbox"},null,512),[[fn,t.value.isOpen]]),h[18]||(h[18]=Be(" 啟用 ",-1))])])])])]),P("div",zt,[P("div",Nt,[P("div",Vt,[dn(Ie(hn),{modelValue:t.value.description,"onUpdate:modelValue":h[7]||(h[7]=r=>t.value.description=r),editorStyle:"height: 200px"},null,8,["modelValue"])])])]),h[22]||(h[22]=P("hr",null,null,-1)),P("div",Ht,[h[21]||(h[21]=P("label",{class:"label"},"作品圖片 (可多張)",-1)),P("div",Lt,[P("label",Dt,[P("input",{class:"file-input",type:"file",multiple:"",onChange:k,accept:"image/*",id:"imageInput"},null,32),h[19]||(h[19]=P("span",{class:"file-cta"},[P("span",{class:"file-icon"},[P("i",{class:"fas fa-upload"})]),P("span",{class:"file-label"},"選取圖片")],-1))])]),P("div",jt,[(le(!0),oe(Re,null,Ve(b.value,(r,i)=>(le(),oe("div",{class:"column is-3-desktop is-4-tablet is-6-mobile",key:i},[P("div",Bt,[P("div",Qt,[P("figure",Wt,[P("img",{src:r,style:{"object-fit":"cover","border-radius":"4px"}},null,8,Gt)])]),P("footer",Kt,[P("a",{href:"#",class:"card-footer-item has-text-danger",onClick:Nn(M=>_(i),["prevent"])},[...h[20]||(h[20]=[P("span",{class:"icon"},[P("i",{class:"fas fa-trash"})],-1),Be(" 刪除 ",-1)])],8,Zt)])])]))),128))])])]),_:1},8,["modelValue"]),P("div",Xt,[P("div",Yt,[P("div",Jt,[h[23]||(h[23]=P("label",{class:"label"},"篩選類別",-1)),P("div",el,[(le(!0),oe(Re,null,Ve(Ie(a),r=>(le(),oe("div",{class:"control",key:r.id},[P("label",nl,[Ue(P("input",{type:"checkbox",value:r.id,"onUpdate:modelValue":h[9]||(h[9]=i=>E.value=i),class:"mr-2"},null,8,tl),[[fn,E.value]]),Be(" "+se(r.name),1)])]))),128))])]),P("div",ll,[P("div",ol,[P("div",rl,[Ue(P("input",{"onUpdate:modelValue":h[10]||(h[10]=r=>U.value=r),class:"input",type:"text",placeholder:"關鍵字搜尋..."},null,512),[[He,U.value]]),h[24]||(h[24]=P("span",{class:"icon is-left"},[P("i",{class:"fas fa-search"})],-1))]),P("div",{class:"control"},[P("button",{class:"button is-info",onClick:z},"搜尋")]),P("div",{class:"control"},[P("button",{class:"button is-light",onClick:F},"清空")])])])])]),P("div",il,[(le(!0),oe(Re,null,Ve(y.value,r=>(le(),oe("div",{class:"column is-12-mobile is-6-tablet is-4-desktop",key:r.id}))),128))]),h[26]||(h[26]=P("hr",null,null,-1)),P("div",al,[(le(!0),oe(Re,null,Ve(y.value,r=>(le(),oe("div",{class:"column is-12-mobile is-6-tablet is-4-desktop",key:r.id},[P("div",sl,[P("div",cl,[P("figure",dl,[P("img",{src:r.imageUrls?.length>0?r.imageUrls[0]:"https://bulma.io/assets/images/placeholders/1280x960.png",alt:"Product Image"},null,8,fl)])]),P("div",ul,[P("div",pl,[P("div",ql,[P("span",hl,"類別："+se(O(r.typeId)),1),P("span",{class:je(["tag",r.isOpen?"is-success":"is-danger"])},se(r.isOpen?"開啟":"停售"),3),P("span",bl,[h[25]||(h[25]=P("span",{class:"icon is-small mr-1"},[P("i",{class:"fas fa-images"})],-1)),Be(" "+se(r.imageUrls?.length||0)+" 張作品圖 ",1)])]),P("p",ml,"作品："+se(r.name),1),P("p",vl,"單買成品價格：$"+se(r.price),1),P("p",gl," 單堂體驗價格：$"+se(r.classPrice),1),P("p",wl," 材料包價格：$"+se(r.matetialPrice),1)]),P("div",kl,[P("div",yl,[P("button",{class:"button is-success is-light",onClick:i=>R(r)}," 編輯 ",8,Al),P("button",{class:"button is-danger is-light",onClick:i=>S(r.id,r.name)}," 刪除 ",8,xl)])])])])]))),128))])])],64))}},El=On(_l,[["__scopeId","data-v-aa9e9077"]]);export{El as default};
