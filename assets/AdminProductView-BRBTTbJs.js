import{s as an,B as En,a7 as $n,a8 as In,o as ie,c as ae,a as I,g as Sn,n as j,a9 as Mn,aa as On,_ as Pn,N as sn,O as dn,S as Rn,V as Tn,X as Ie,i as Le,G as cn,H as Je,F as Oe,D as Ne,w as Pe,Z as en,$ as me,a1 as he,a5 as De,ab as zn,a2 as fn,b as je,a0 as Nn}from"./index-DpLj8-BT.js";import{u as Vn,C as Hn}from"./CrudModal-Br8OsUBf.js";import{s as Ln,u as Dn}from"./index-Biz8f3gB.js";var jn={name:"BaseEditableHolder",extends:Ln,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:{deep:!0,handler:function(q){this.d_value=q}},defaultValue:function(q){this.d_value=q},$formName:{immediate:!0,handler:function(q){var A,a;this.formField=((A=this.$pcForm)===null||A===void 0||(a=A.register)===null||a===void 0?void 0:a.call(A,q,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(q){var A,a;this.formField=((A=this.$pcForm)===null||A===void 0||(a=A.register)===null||a===void 0?void 0:a.call(A,this.$formName,q))||{}}},$formDefaultValue:{immediate:!0,handler:function(q){this.d_value!==q&&(this.d_value=q)}},$formValue:{immediate:!1,handler:function(q){var A;(A=this.$pcForm)!==null&&A!==void 0&&A.getFieldState(this.$formName)&&q!==this.d_value&&(this.d_value=q)}}},formField:{},methods:{writeValue:function(q,A){var a,e;this.controlled&&(this.d_value=q,this.$emit("update:modelValue",q)),this.$emit("value-change",q),(a=(e=this.formField).onChange)===null||a===void 0||a.call(e,{originalEvent:A,value:q})},findNonEmpty:function(){for(var q=arguments.length,A=new Array(q),a=0;a<q;a++)A[a]=arguments[a];return A.find(an)}},computed:{$filled:function(){return an(this.d_value)},$invalid:function(){var q,A;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(q=this.$pcFormField)===null||q===void 0||(q=q.$field)===null||q===void 0?void 0:q.invalid,(A=this.$pcForm)===null||A===void 0||(A=A.getFieldState(this.$formName))===null||A===void 0?void 0:A.invalid)},$formName:function(){var q;return this.$formNovalidate?void 0:this.name||((q=this.$formControl)===null||q===void 0?void 0:q.name)},$formControl:function(){var q;return this.formControl||((q=this.$pcFormField)===null||q===void 0?void 0:q.formControl)},$formNovalidate:function(){var q;return(q=this.$formControl)===null||q===void 0?void 0:q.novalidate},$formDefaultValue:function(){var q,A;return this.findNonEmpty(this.d_value,(q=this.$pcFormField)===null||q===void 0?void 0:q.initialValue,(A=this.$pcForm)===null||A===void 0||(A=A.initialValues)===null||A===void 0?void 0:A[this.$formName])},$formValue:function(){var q,A;return this.findNonEmpty((q=this.$pcFormField)===null||q===void 0||(q=q.$field)===null||q===void 0?void 0:q.value,(A=this.$pcForm)===null||A===void 0||(A=A.getFieldState(this.$formName))===null||A===void 0?void 0:A.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},Bn=`
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
`,Qn={root:function(q){var A=q.instance;return["p-editor",{"p-invalid":A.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},Wn=En.extend({name:"editor",style:Bn,classes:Qn}),Gn={name:"BaseEditor",extends:jn,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Wn,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function Ve(m){"@babel/helpers - typeof";return Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},Ve(m)}function un(m,q){var A=Object.keys(m);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(m);q&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(m,e).enumerable})),A.push.apply(A,a)}return A}function Kn(m){for(var q=1;q<arguments.length;q++){var A=arguments[q]!=null?arguments[q]:{};q%2?un(Object(A),!0).forEach(function(a){Zn(m,a,A[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(A)):un(Object(A)).forEach(function(a){Object.defineProperty(m,a,Object.getOwnPropertyDescriptor(A,a))})}return m}function Zn(m,q,A){return(q=Xn(q))in m?Object.defineProperty(m,q,{value:A,enumerable:!0,configurable:!0,writable:!0}):m[q]=A,m}function Xn(m){var q=Yn(m,"string");return Ve(q)=="symbol"?q:q+""}function Yn(m,q){if(Ve(m)!="object"||!m)return m;var A=m[Symbol.toPrimitive];if(A!==void 0){var a=A.call(m,q);if(Ve(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(q==="string"?String:Number)(m)}var qn=(function(){try{return window.Quill}catch{return null}})(),hn={name:"Editor",extends:Gn,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(q,A){q!==A&&this.quill&&!this.quill.hasFocus()&&this.renderValue(q)},d_value:function(q,A){q!==A&&this.quill&&!this.quill.hasFocus()&&this.renderValue(q)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var q=this,A={modules:Kn({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};qn?(this.quill=new qn(this.$refs.editorElement,A),this.initQuill(),this.handleLoad()):$n(()=>import("./quill-CIyhmJQz.js"),[]).then(function(a){a&&In(q.$refs.editorElement)&&(a.default?q.quill=new a.default(q.$refs.editorElement,A):q.quill=new a(q.$refs.editorElement,A),q.initQuill())}).then(function(){q.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(q){if(this.quill)if(q){var A=this.quill.clipboard.convert({html:q});this.quill.setContents(A)}else this.quill.setText("")},initQuill:function(){var q=this;this.renderValue(this.d_value),this.quill.on("text-change",function(A,a,e){if(e==="user"){var n=q.quill.getSemanticHTML(),u=q.quill.getText().trim();n==="<p><br></p>"&&(n=""),q.writeValue(n),q.$emit("text-change",{htmlValue:n,textValue:u,delta:A,source:e,instance:q.quill})}}),this.quill.on("selection-change",function(A,a,e){var n=q.quill.getSemanticHTML(),u=q.quill.getText().trim();q.$emit("selection-change",{htmlValue:n,textValue:u,range:A,oldRange:a,source:e,instance:q.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Jn(m,q,A,a,e,n){return ie(),ae("div",j({class:m.cx("root")},m.ptmi("root")),[I("div",j({ref:"toolbarElement",class:m.cx("toolbar")},m.ptm("toolbar")),[Sn(m.$slots,"toolbar",{},function(){return[I("span",j({class:"ql-formats"},m.ptm("formats")),[I("select",j({class:"ql-header",defaultValue:"0"},m.ptm("header")),[I("option",j({value:"1"},m.ptm("option")),"Heading",16),I("option",j({value:"2"},m.ptm("option")),"Subheading",16),I("option",j({value:"0"},m.ptm("option")),"Normal",16)],16),I("select",j({class:"ql-font"},m.ptm("font")),[I("option",Mn(On(m.ptm("option"))),null,16),I("option",j({value:"serif"},m.ptm("option")),null,16),I("option",j({value:"monospace"},m.ptm("option")),null,16)],16)],16),I("span",j({class:"ql-formats"},m.ptm("formats")),[I("button",j({class:"ql-bold",type:"button"},m.ptm("bold")),null,16),I("button",j({class:"ql-italic",type:"button"},m.ptm("italic")),null,16),I("button",j({class:"ql-underline",type:"button"},m.ptm("underline")),null,16)],16),I("span",j({class:"ql-formats"},m.ptm("formats")),[I("select",j({class:"ql-color"},m.ptm("color")),null,16),I("select",j({class:"ql-background"},m.ptm("background")),null,16)],16),I("span",j({class:"ql-formats"},m.ptm("formats")),[I("button",j({class:"ql-list",value:"ordered",type:"button"},m.ptm("list")),null,16),I("button",j({class:"ql-list",value:"bullet",type:"button"},m.ptm("list")),null,16),I("select",j({class:"ql-align"},m.ptm("select")),[I("option",j({defaultValue:""},m.ptm("option")),null,16),I("option",j({value:"center"},m.ptm("option")),null,16),I("option",j({value:"right"},m.ptm("option")),null,16),I("option",j({value:"justify"},m.ptm("option")),null,16)],16)],16),I("span",j({class:"ql-formats"},m.ptm("formats")),[I("button",j({class:"ql-link",type:"button"},m.ptm("link")),null,16),I("button",j({class:"ql-image",type:"button"},m.ptm("image")),null,16),I("button",j({class:"ql-code-block",type:"button"},m.ptm("codeBlock")),null,16)],16),I("span",j({class:"ql-formats"},m.ptm("formats")),[I("button",j({class:"ql-clean",type:"button"},m.ptm("clean")),null,16)],16)]})],16),I("div",j({ref:"editorElement",class:m.cx("content"),style:m.editorStyle},m.ptm("content")),null,16)],16)}hn.render=Jn;function et(m,q){return q.forEach((function(A){A&&typeof A!="string"&&!Array.isArray(A)&&Object.keys(A).forEach((function(a){if(a!=="default"&&!(a in m)){var e=Object.getOwnPropertyDescriptor(A,a);Object.defineProperty(m,a,e.get?e:{enumerable:!0,get:function(){return A[a]}})}}))})),Object.freeze(m)}function bn(m,q){return new Promise((function(A,a){let e;return nt(m).then((function(n){try{return e=n,A(new Blob([q.slice(0,2),e,q.slice(2)],{type:"image/jpeg"}))}catch(u){return a(u)}}),a)}))}const nt=m=>new Promise(((q,A)=>{const a=new FileReader;a.addEventListener("load",(({target:{result:e}})=>{const n=new DataView(e);let u=0;if(n.getUint16(u)!==65496)return A("not a valid JPEG");for(u+=2;;){const d=n.getUint16(u);if(d===65498)break;const g=n.getUint16(u+2);if(d===65505&&n.getUint32(u+4)===1165519206){const w=u+10;let t;switch(n.getUint16(w)){case 18761:t=!0;break;case 19789:t=!1;break;default:return A("TIFF header contains invalid endian")}if(n.getUint16(w+2,t)!==42)return A("TIFF header contains invalid version");const o=n.getUint32(w+4,t),l=w+o+2+12*n.getUint16(w+o,t);for(let s=w+o+2;s<l;s+=12)if(n.getUint16(s,t)==274){if(n.getUint16(s+2,t)!==3)return A("Orientation data type is invalid");if(n.getUint32(s+4,t)!==1)return A("Orientation data count is invalid");n.setUint16(s+8,1,t);break}return q(e.slice(u,u+2+g))}u+=2+g}return q(new Blob)})),a.readAsArrayBuffer(m)}));var Qe={},tt={get exports(){return Qe},set exports(m){Qe=m}};(function(m){var q,A,a={};tt.exports=a,a.parse=function(e,n){for(var u=a.bin.readUshort,d=a.bin.readUint,g=0,w={},t=new Uint8Array(e),o=t.length-4;d(t,o)!=101010256;)o--;g=o,g+=4;var l=u(t,g+=4);u(t,g+=2);var s=d(t,g+=2),h=d(t,g+=4);g+=4,g=h;for(var U=0;U<l;U++){d(t,g),g+=4,g+=4,g+=4,d(t,g+=4),s=d(t,g+=4);var E=d(t,g+=4),y=u(t,g+=4),z=u(t,g+2),P=u(t,g+4);g+=6;var $=d(t,g+=8);g+=4,g+=y+z+P,a._readLocal(t,$,w,s,E,n)}return w},a._readLocal=function(e,n,u,d,g,w){var t=a.bin.readUshort,o=a.bin.readUint;o(e,n),t(e,n+=4),t(e,n+=2);var l=t(e,n+=2);o(e,n+=2),o(e,n+=4),n+=4;var s=t(e,n+=8),h=t(e,n+=2);n+=2;var U=a.bin.readUTF8(e,n,s);if(n+=s,n+=h,w)u[U]={size:g,csize:d};else{var E=new Uint8Array(e.buffer,n);if(l==0)u[U]=new Uint8Array(E.buffer.slice(n,n+d));else{if(l!=8)throw"unknown compression method: "+l;var y=new Uint8Array(g);a.inflateRaw(E,y),u[U]=y}}},a.inflateRaw=function(e,n){return a.F.inflate(e,n)},a.inflate=function(e,n){return e[0],e[1],a.inflateRaw(new Uint8Array(e.buffer,e.byteOffset+2,e.length-6),n)},a.deflate=function(e,n){n==null&&(n={level:6});var u=0,d=new Uint8Array(50+Math.floor(1.1*e.length));d[u]=120,d[u+1]=156,u+=2,u=a.F.deflateRaw(e,d,u,n.level);var g=a.adler(e,0,e.length);return d[u+0]=g>>>24&255,d[u+1]=g>>>16&255,d[u+2]=g>>>8&255,d[u+3]=g>>>0&255,new Uint8Array(d.buffer,0,u+4)},a.deflateRaw=function(e,n){n==null&&(n={level:6});var u=new Uint8Array(50+Math.floor(1.1*e.length)),d=a.F.deflateRaw(e,u,d,n.level);return new Uint8Array(u.buffer,0,d)},a.encode=function(e,n){n==null&&(n=!1);var u=0,d=a.bin.writeUint,g=a.bin.writeUshort,w={};for(var t in e){var o=!a._noNeed(t)&&!n,l=e[t],s=a.crc.crc(l,0,l.length);w[t]={cpr:o,usize:l.length,crc:s,file:o?a.deflateRaw(l):l}}for(var t in w)u+=w[t].file.length+30+46+2*a.bin.sizeUTF8(t);u+=22;var h=new Uint8Array(u),U=0,E=[];for(var t in w){var y=w[t];E.push(U),U=a._writeHeader(h,U,t,y,0)}var z=0,P=U;for(var t in w)y=w[t],E.push(U),U=a._writeHeader(h,U,t,y,1,E[z++]);var $=U-P;return d(h,U,101010256),U+=4,g(h,U+=4,z),g(h,U+=2,z),d(h,U+=2,$),d(h,U+=4,P),U+=4,U+=2,h.buffer},a._noNeed=function(e){var n=e.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(n)!=-1},a._writeHeader=function(e,n,u,d,g,w){var t=a.bin.writeUint,o=a.bin.writeUshort,l=d.file;return t(e,n,g==0?67324752:33639248),n+=4,g==1&&(n+=2),o(e,n,20),o(e,n+=2,0),o(e,n+=2,d.cpr?8:0),t(e,n+=2,0),t(e,n+=4,d.crc),t(e,n+=4,l.length),t(e,n+=4,d.usize),o(e,n+=4,a.bin.sizeUTF8(u)),o(e,n+=2,0),n+=2,g==1&&(n+=2,n+=2,t(e,n+=6,w),n+=4),n+=a.bin.writeUTF8(e,n,u),g==0&&(e.set(l,n),n+=l.length),n},a.crc={table:(function(){for(var e=new Uint32Array(256),n=0;n<256;n++){for(var u=n,d=0;d<8;d++)1&u?u=3988292384^u>>>1:u>>>=1;e[n]=u}return e})(),update:function(e,n,u,d){for(var g=0;g<d;g++)e=a.crc.table[255&(e^n[u+g])]^e>>>8;return e},crc:function(e,n,u){return 4294967295^a.crc.update(4294967295,e,n,u)}},a.adler=function(e,n,u){for(var d=1,g=0,w=n,t=n+u;w<t;){for(var o=Math.min(w+5552,t);w<o;)g+=d+=e[w++];d%=65521,g%=65521}return g<<16|d},a.bin={readUshort:function(e,n){return e[n]|e[n+1]<<8},writeUshort:function(e,n,u){e[n]=255&u,e[n+1]=u>>8&255},readUint:function(e,n){return 16777216*e[n+3]+(e[n+2]<<16|e[n+1]<<8|e[n])},writeUint:function(e,n,u){e[n]=255&u,e[n+1]=u>>8&255,e[n+2]=u>>16&255,e[n+3]=u>>24&255},readASCII:function(e,n,u){for(var d="",g=0;g<u;g++)d+=String.fromCharCode(e[n+g]);return d},writeASCII:function(e,n,u){for(var d=0;d<u.length;d++)e[n+d]=u.charCodeAt(d)},pad:function(e){return e.length<2?"0"+e:e},readUTF8:function(e,n,u){for(var d,g="",w=0;w<u;w++)g+="%"+a.bin.pad(e[n+w].toString(16));try{d=decodeURIComponent(g)}catch{return a.bin.readASCII(e,n,u)}return d},writeUTF8:function(e,n,u){for(var d=u.length,g=0,w=0;w<d;w++){var t=u.charCodeAt(w);if((4294967168&t)==0)e[n+g]=t,g++;else if((4294965248&t)==0)e[n+g]=192|t>>6,e[n+g+1]=128|t>>0&63,g+=2;else if((4294901760&t)==0)e[n+g]=224|t>>12,e[n+g+1]=128|t>>6&63,e[n+g+2]=128|t>>0&63,g+=3;else{if((4292870144&t)!=0)throw"e";e[n+g]=240|t>>18,e[n+g+1]=128|t>>12&63,e[n+g+2]=128|t>>6&63,e[n+g+3]=128|t>>0&63,g+=4}}return g},sizeUTF8:function(e){for(var n=e.length,u=0,d=0;d<n;d++){var g=e.charCodeAt(d);if((4294967168&g)==0)u++;else if((4294965248&g)==0)u+=2;else if((4294901760&g)==0)u+=3;else{if((4292870144&g)!=0)throw"e";u+=4}}return u}},a.F={},a.F.deflateRaw=function(e,n,u,d){var g=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][d],w=a.F.U,t=a.F._goodIndex;a.F._hash;var o=a.F._putsE,l=0,s=u<<3,h=0,U=e.length;if(d==0){for(;l<U;)o(n,s,l+(_=Math.min(65535,U-l))==U?1:0),s=a.F._copyExact(e,l,_,n,s+8),l+=_;return s>>>3}var E=w.lits,y=w.strt,z=w.prev,P=0,$=0,R=0,v=0,M=0,f=0;for(U>2&&(y[f=a.F._hash(e,0)]=0),l=0;l<U;l++){if(M=f,l+1<U-2){f=a.F._hash(e,l+1);var c=l+1&32767;z[c]=y[f],y[f]=c}if(h<=l){(P>14e3||$>26697)&&U-l>100&&(h<l&&(E[P]=l-h,P+=2,h=l),s=a.F._writeBlock(l==U-1||h==U?1:0,E,P,v,e,R,l-R,n,s),P=$=v=0,R=l);var k=0;l<U-2&&(k=a.F._bestMatch(e,l,z,M,Math.min(g[2],U-l),g[3]));var _=k>>>16,x=65535&k;if(k!=0){x=65535&k;var F=t(_=k>>>16,w.of0);w.lhst[257+F]++;var p=t(x,w.df0);w.dhst[p]++,v+=w.exb[F]+w.dxb[p],E[P]=_<<23|l-h,E[P+1]=x<<16|F<<8|p,P+=2,h=l+_}else w.lhst[e[l]]++;$++}}for(R==l&&e.length!=0||(h<l&&(E[P]=l-h,P+=2,h=l),s=a.F._writeBlock(1,E,P,v,e,R,l-R,n,s),P=0,$=0,P=$=v=0,R=l);(7&s)!=0;)s++;return s>>>3},a.F._bestMatch=function(e,n,u,d,g,w){var t=32767&n,o=u[t],l=t-o+32768&32767;if(o==t||d!=a.F._hash(e,n-l))return 0;for(var s=0,h=0,U=Math.min(32767,n);l<=U&&--w!=0&&o!=t;){if(s==0||e[n+s]==e[n+s-l]){var E=a.F._howLong(e,n,l);if(E>s){if(h=l,(s=E)>=g)break;l+2<E&&(E=l+2);for(var y=0,z=0;z<E-2;z++){var P=n-l+z+32768&32767,$=P-u[P]+32768&32767;$>y&&(y=$,o=P)}}}l+=(t=o)-(o=u[t])+32768&32767}return s<<16|h},a.F._howLong=function(e,n,u){if(e[n]!=e[n-u]||e[n+1]!=e[n+1-u]||e[n+2]!=e[n+2-u])return 0;var d=n,g=Math.min(e.length,n+258);for(n+=3;n<g&&e[n]==e[n-u];)n++;return n-d},a.F._hash=function(e,n){return(e[n]<<8|e[n+1])+(e[n+2]<<4)&65535},a.saved=0,a.F._writeBlock=function(e,n,u,d,g,w,t,o,l){var s,h,U,E,y,z,P,$,R,v=a.F.U,M=a.F._putsF,f=a.F._putsE;v.lhst[256]++,h=(s=a.F.getTrees())[0],U=s[1],E=s[2],y=s[3],z=s[4],P=s[5],$=s[6],R=s[7];var c=32+((l+3&7)==0?0:8-(l+3&7))+(t<<3),k=d+a.F.contSize(v.fltree,v.lhst)+a.F.contSize(v.fdtree,v.dhst),_=d+a.F.contSize(v.ltree,v.lhst)+a.F.contSize(v.dtree,v.dhst);_+=14+3*P+a.F.contSize(v.itree,v.ihst)+(2*v.ihst[16]+3*v.ihst[17]+7*v.ihst[18]);for(var x=0;x<286;x++)v.lhst[x]=0;for(x=0;x<30;x++)v.dhst[x]=0;for(x=0;x<19;x++)v.ihst[x]=0;var F=c<k&&c<_?0:k<_?1:2;if(M(o,l,e),M(o,l+1,F),l+=3,F==0){for(;(7&l)!=0;)l++;l=a.F._copyExact(g,w,t,o,l)}else{var p,b;if(F==1&&(p=v.fltree,b=v.fdtree),F==2){a.F.makeCodes(v.ltree,h),a.F.revCodes(v.ltree,h),a.F.makeCodes(v.dtree,U),a.F.revCodes(v.dtree,U),a.F.makeCodes(v.itree,E),a.F.revCodes(v.itree,E),p=v.ltree,b=v.dtree,f(o,l,y-257),f(o,l+=5,z-1),f(o,l+=5,P-4),l+=4;for(var r=0;r<P;r++)f(o,l+3*r,v.itree[1+(v.ordr[r]<<1)]);l+=3*P,l=a.F._codeTiny($,v.itree,o,l),l=a.F._codeTiny(R,v.itree,o,l)}for(var i=w,O=0;O<u;O+=2){for(var C=n[O],T=C>>>23,L=i+(8388607&C);i<L;)l=a.F._writeLit(g[i++],p,o,l);if(T!=0){var V=n[O+1],H=V>>16,N=V>>8&255,S=255&V;f(o,l=a.F._writeLit(257+N,p,o,l),T-v.of0[N]),l+=v.exb[N],M(o,l=a.F._writeLit(S,b,o,l),H-v.df0[S]),l+=v.dxb[S],i+=T}}l=a.F._writeLit(256,p,o,l)}return l},a.F._copyExact=function(e,n,u,d,g){var w=g>>>3;return d[w]=u,d[w+1]=u>>>8,d[w+2]=255-d[w],d[w+3]=255-d[w+1],w+=4,d.set(new Uint8Array(e.buffer,n,u),w),g+(u+4<<3)},a.F.getTrees=function(){for(var e=a.F.U,n=a.F._hufTree(e.lhst,e.ltree,15),u=a.F._hufTree(e.dhst,e.dtree,15),d=[],g=a.F._lenCodes(e.ltree,d),w=[],t=a.F._lenCodes(e.dtree,w),o=0;o<d.length;o+=2)e.ihst[d[o]]++;for(o=0;o<w.length;o+=2)e.ihst[w[o]]++;for(var l=a.F._hufTree(e.ihst,e.itree,7),s=19;s>4&&e.itree[1+(e.ordr[s-1]<<1)]==0;)s--;return[n,u,l,g,t,s,d,w]},a.F.getSecond=function(e){for(var n=[],u=0;u<e.length;u+=2)n.push(e[u+1]);return n},a.F.nonZero=function(e){for(var n="",u=0;u<e.length;u+=2)e[u+1]!=0&&(n+=(u>>1)+",");return n},a.F.contSize=function(e,n){for(var u=0,d=0;d<n.length;d++)u+=n[d]*e[1+(d<<1)];return u},a.F._codeTiny=function(e,n,u,d){for(var g=0;g<e.length;g+=2){var w=e[g],t=e[g+1];d=a.F._writeLit(w,n,u,d);var o=w==16?2:w==17?3:7;w>15&&(a.F._putsE(u,d,t,o),d+=o)}return d},a.F._lenCodes=function(e,n){for(var u=e.length;u!=2&&e[u-1]==0;)u-=2;for(var d=0;d<u;d+=2){var g=e[d+1],w=d+3<u?e[d+3]:-1,t=d+5<u?e[d+5]:-1,o=d==0?-1:e[d-1];if(g==0&&w==g&&t==g){for(var l=d+5;l+2<u&&e[l+2]==g;)l+=2;(s=Math.min(l+1-d>>>1,138))<11?n.push(17,s-3):n.push(18,s-11),d+=2*s-2}else if(g==o&&w==g&&t==g){for(l=d+5;l+2<u&&e[l+2]==g;)l+=2;var s=Math.min(l+1-d>>>1,6);n.push(16,s-3),d+=2*s-2}else n.push(g,0)}return u>>>1},a.F._hufTree=function(e,n,u){var d=[],g=e.length,w=n.length,t=0;for(t=0;t<w;t+=2)n[t]=0,n[t+1]=0;for(t=0;t<g;t++)e[t]!=0&&d.push({lit:t,f:e[t]});var o=d.length,l=d.slice(0);if(o==0)return 0;if(o==1){var s=d[0].lit;return l=s==0?1:0,n[1+(s<<1)]=1,n[1+(l<<1)]=1,1}d.sort((function($,R){return $.f-R.f}));var h=d[0],U=d[1],E=0,y=1,z=2;for(d[0]={lit:-1,f:h.f+U.f,l:h,r:U,d:0};y!=o-1;)h=E!=y&&(z==o||d[E].f<d[z].f)?d[E++]:d[z++],U=E!=y&&(z==o||d[E].f<d[z].f)?d[E++]:d[z++],d[y++]={lit:-1,f:h.f+U.f,l:h,r:U};var P=a.F.setDepth(d[y-1],0);for(P>u&&(a.F.restrictDepth(l,u,P),P=u),t=0;t<o;t++)n[1+(l[t].lit<<1)]=l[t].d;return P},a.F.setDepth=function(e,n){return e.lit!=-1?(e.d=n,n):Math.max(a.F.setDepth(e.l,n+1),a.F.setDepth(e.r,n+1))},a.F.restrictDepth=function(e,n,u){var d=0,g=1<<u-n,w=0;for(e.sort((function(o,l){return l.d==o.d?o.f-l.f:l.d-o.d})),d=0;d<e.length&&e[d].d>n;d++){var t=e[d].d;e[d].d=n,w+=g-(1<<u-t)}for(w>>>=u-n;w>0;)(t=e[d].d)<n?(e[d].d++,w-=1<<n-t-1):d++;for(;d>=0;d--)e[d].d==n&&w<0&&(e[d].d--,w++);w!=0&&console.log("debt left")},a.F._goodIndex=function(e,n){var u=0;return n[16|u]<=e&&(u|=16),n[8|u]<=e&&(u|=8),n[4|u]<=e&&(u|=4),n[2|u]<=e&&(u|=2),n[1|u]<=e&&(u|=1),u},a.F._writeLit=function(e,n,u,d){return a.F._putsF(u,d,n[e<<1]),d+n[1+(e<<1)]},a.F.inflate=function(e,n){var u=Uint8Array;if(e[0]==3&&e[1]==0)return n||new u(0);var d=a.F,g=d._bitsF,w=d._bitsE,t=d._decodeTiny,o=d.makeCodes,l=d.codes2map,s=d._get17,h=d.U,U=n==null;U&&(n=new u(e.length>>>2<<3));for(var E,y,z=0,P=0,$=0,R=0,v=0,M=0,f=0,c=0,k=0;z==0;)if(z=g(e,k,1),P=g(e,k+1,2),k+=3,P!=0){if(U&&(n=a.F._check(n,c+(1<<17))),P==1&&(E=h.flmap,y=h.fdmap,M=511,f=31),P==2){$=w(e,k,5)+257,R=w(e,k+5,5)+1,v=w(e,k+10,4)+4,k+=14;for(var _=0;_<38;_+=2)h.itree[_]=0,h.itree[_+1]=0;var x=1;for(_=0;_<v;_++){var F=w(e,k+3*_,3);h.itree[1+(h.ordr[_]<<1)]=F,F>x&&(x=F)}k+=3*v,o(h.itree,x),l(h.itree,x,h.imap),E=h.lmap,y=h.dmap,k=t(h.imap,(1<<x)-1,$+R,e,k,h.ttree);var p=d._copyOut(h.ttree,0,$,h.ltree);M=(1<<p)-1;var b=d._copyOut(h.ttree,$,R,h.dtree);f=(1<<b)-1,o(h.ltree,p),l(h.ltree,p,E),o(h.dtree,b),l(h.dtree,b,y)}for(;;){var r=E[s(e,k)&M];k+=15&r;var i=r>>>4;if(!(i>>>8))n[c++]=i;else{if(i==256)break;var O=c+i-254;if(i>264){var C=h.ldef[i-257];O=c+(C>>>3)+w(e,k,7&C),k+=7&C}var T=y[s(e,k)&f];k+=15&T;var L=T>>>4,V=h.ddef[L],H=(V>>>4)+g(e,k,15&V);for(k+=15&V,U&&(n=a.F._check(n,c+(1<<17)));c<O;)n[c]=n[c++-H],n[c]=n[c++-H],n[c]=n[c++-H],n[c]=n[c++-H];c=O}}}else{(7&k)!=0&&(k+=8-(7&k));var N=4+(k>>>3),S=e[N-4]|e[N-3]<<8;U&&(n=a.F._check(n,c+S)),n.set(new u(e.buffer,e.byteOffset+N,S),c),k=N+S<<3,c+=S}return n.length==c?n:n.slice(0,c)},a.F._check=function(e,n){var u=e.length;if(n<=u)return e;var d=new Uint8Array(Math.max(u<<1,n));return d.set(e,0),d},a.F._decodeTiny=function(e,n,u,d,g,w){for(var t=a.F._bitsE,o=a.F._get17,l=0;l<u;){var s=e[o(d,g)&n];g+=15&s;var h=s>>>4;if(h<=15)w[l]=h,l++;else{var U=0,E=0;h==16?(E=3+t(d,g,2),g+=2,U=w[l-1]):h==17?(E=3+t(d,g,3),g+=3):h==18&&(E=11+t(d,g,7),g+=7);for(var y=l+E;l<y;)w[l]=U,l++}}return g},a.F._copyOut=function(e,n,u,d){for(var g=0,w=0,t=d.length>>>1;w<u;){var o=e[w+n];d[w<<1]=0,d[1+(w<<1)]=o,o>g&&(g=o),w++}for(;w<t;)d[w<<1]=0,d[1+(w<<1)]=0,w++;return g},a.F.makeCodes=function(e,n){for(var u,d,g,w,t=a.F.U,o=e.length,l=t.bl_count,s=0;s<=n;s++)l[s]=0;for(s=1;s<o;s+=2)l[e[s]]++;var h=t.next_code;for(u=0,l[0]=0,d=1;d<=n;d++)u=u+l[d-1]<<1,h[d]=u;for(g=0;g<o;g+=2)(w=e[g+1])!=0&&(e[g]=h[w],h[w]++)},a.F.codes2map=function(e,n,u){for(var d=e.length,g=a.F.U.rev15,w=0;w<d;w+=2)if(e[w+1]!=0)for(var t=w>>1,o=e[w+1],l=t<<4|o,s=n-o,h=e[w]<<s,U=h+(1<<s);h!=U;)u[g[h]>>>15-n]=l,h++},a.F.revCodes=function(e,n){for(var u=a.F.U.rev15,d=15-n,g=0;g<e.length;g+=2){var w=e[g]<<n-e[g+1];e[g]=u[w]>>>d}},a.F._putsE=function(e,n,u){u<<=7&n;var d=n>>>3;e[d]|=u,e[d+1]|=u>>>8},a.F._putsF=function(e,n,u){u<<=7&n;var d=n>>>3;e[d]|=u,e[d+1]|=u>>>8,e[d+2]|=u>>>16},a.F._bitsE=function(e,n,u){return(e[n>>>3]|e[1+(n>>>3)]<<8)>>>(7&n)&(1<<u)-1},a.F._bitsF=function(e,n,u){return(e[n>>>3]|e[1+(n>>>3)]<<8|e[2+(n>>>3)]<<16)>>>(7&n)&(1<<u)-1},a.F._get17=function(e,n){return(e[n>>>3]|e[1+(n>>>3)]<<8|e[2+(n>>>3)]<<16)>>>(7&n)},a.F._get25=function(e,n){return(e[n>>>3]|e[1+(n>>>3)]<<8|e[2+(n>>>3)]<<16|e[3+(n>>>3)]<<24)>>>(7&n)},a.F.U=(q=Uint16Array,A=Uint32Array,{next_code:new q(16),bl_count:new q(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new q(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new A(32),flmap:new q(512),fltree:[],fdmap:new q(32),fdtree:[],lmap:new q(32768),ltree:[],ttree:[],dmap:new q(32768),dtree:[],imap:new q(512),itree:[],rev15:new q(32768),lhst:new A(286),dhst:new A(30),ihst:new A(19),lits:new A(15e3),strt:new q(65536),prev:new q(32768)}),(function(){for(var e=a.F.U,n=0;n<32768;n++){var u=n;u=(4278255360&(u=(4042322160&(u=(3435973836&(u=(2863311530&u)>>>1|(1431655765&u)<<1))>>>2|(858993459&u)<<2))>>>4|(252645135&u)<<4))>>>8|(16711935&u)<<8,e.rev15[n]=(u>>>16|u<<16)>>>17}function d(g,w,t){for(;w--!=0;)g.push(0,t)}for(n=0;n<32;n++)e.ldef[n]=e.of0[n]<<3|e.exb[n],e.ddef[n]=e.df0[n]<<4|e.dxb[n];d(e.fltree,144,8),d(e.fltree,112,9),d(e.fltree,24,7),d(e.fltree,8,8),a.F.makeCodes(e.fltree,9),a.F.codes2map(e.fltree,9,e.flmap),a.F.revCodes(e.fltree,9),d(e.fdtree,32,5),a.F.makeCodes(e.fdtree,5),a.F.codes2map(e.fdtree,5,e.fdmap),a.F.revCodes(e.fdtree,5),d(e.itree,19,0),d(e.ltree,286,0),d(e.dtree,30,0),d(e.ttree,320,0)})()})();var lt=et({__proto__:null,default:Qe},[Qe]);const ve=(function(){var m={nextZero(t,o){for(;t[o]!=0;)o++;return o},readUshort:(t,o)=>t[o]<<8|t[o+1],writeUshort(t,o,l){t[o]=l>>8&255,t[o+1]=255&l},readUint:(t,o)=>16777216*t[o]+(t[o+1]<<16|t[o+2]<<8|t[o+3]),writeUint(t,o,l){t[o]=l>>24&255,t[o+1]=l>>16&255,t[o+2]=l>>8&255,t[o+3]=255&l},readASCII(t,o,l){let s="";for(let h=0;h<l;h++)s+=String.fromCharCode(t[o+h]);return s},writeASCII(t,o,l){for(let s=0;s<l.length;s++)t[o+s]=l.charCodeAt(s)},readBytes(t,o,l){const s=[];for(let h=0;h<l;h++)s.push(t[o+h]);return s},pad:t=>t.length<2?`0${t}`:t,readUTF8(t,o,l){let s,h="";for(let U=0;U<l;U++)h+=`%${m.pad(t[o+U].toString(16))}`;try{s=decodeURIComponent(h)}catch{return m.readASCII(t,o,l)}return s}};function q(t,o,l,s){const h=o*l,U=n(s),E=Math.ceil(o*U/8),y=new Uint8Array(4*h),z=new Uint32Array(y.buffer),{ctype:P}=s,{depth:$}=s,R=m.readUshort;if(P==6){const C=h<<2;if($==8)for(var v=0;v<C;v+=4)y[v]=t[v],y[v+1]=t[v+1],y[v+2]=t[v+2],y[v+3]=t[v+3];if($==16)for(v=0;v<C;v++)y[v]=t[v<<1]}else if(P==2){const C=s.tabs.tRNS;if(C==null){if($==8)for(v=0;v<h;v++){var M=3*v;z[v]=255<<24|t[M+2]<<16|t[M+1]<<8|t[M]}if($==16)for(v=0;v<h;v++)M=6*v,z[v]=255<<24|t[M+4]<<16|t[M+2]<<8|t[M]}else{var f=C[0];const T=C[1],L=C[2];if($==8)for(v=0;v<h;v++){var c=v<<2;M=3*v,z[v]=255<<24|t[M+2]<<16|t[M+1]<<8|t[M],t[M]==f&&t[M+1]==T&&t[M+2]==L&&(y[c+3]=0)}if($==16)for(v=0;v<h;v++)c=v<<2,M=6*v,z[v]=255<<24|t[M+4]<<16|t[M+2]<<8|t[M],R(t,M)==f&&R(t,M+2)==T&&R(t,M+4)==L&&(y[c+3]=0)}}else if(P==3){const C=s.tabs.PLTE,T=s.tabs.tRNS,L=T?T.length:0;if($==1)for(var k=0;k<l;k++){var _=k*E,x=k*o;for(v=0;v<o;v++){c=x+v<<2;var F=3*(p=t[_+(v>>3)]>>7-((7&v)<<0)&1);y[c]=C[F],y[c+1]=C[F+1],y[c+2]=C[F+2],y[c+3]=p<L?T[p]:255}}if($==2)for(k=0;k<l;k++)for(_=k*E,x=k*o,v=0;v<o;v++)c=x+v<<2,F=3*(p=t[_+(v>>2)]>>6-((3&v)<<1)&3),y[c]=C[F],y[c+1]=C[F+1],y[c+2]=C[F+2],y[c+3]=p<L?T[p]:255;if($==4)for(k=0;k<l;k++)for(_=k*E,x=k*o,v=0;v<o;v++)c=x+v<<2,F=3*(p=t[_+(v>>1)]>>4-((1&v)<<2)&15),y[c]=C[F],y[c+1]=C[F+1],y[c+2]=C[F+2],y[c+3]=p<L?T[p]:255;if($==8)for(v=0;v<h;v++){var p;c=v<<2,F=3*(p=t[v]),y[c]=C[F],y[c+1]=C[F+1],y[c+2]=C[F+2],y[c+3]=p<L?T[p]:255}}else if(P==4){if($==8)for(v=0;v<h;v++){c=v<<2;var b=t[r=v<<1];y[c]=b,y[c+1]=b,y[c+2]=b,y[c+3]=t[r+1]}if($==16)for(v=0;v<h;v++){var r;c=v<<2,b=t[r=v<<2],y[c]=b,y[c+1]=b,y[c+2]=b,y[c+3]=t[r+2]}}else if(P==0)for(f=s.tabs.tRNS?s.tabs.tRNS:-1,k=0;k<l;k++){const C=k*E,T=k*o;if($==1)for(var i=0;i<o;i++){var O=(b=255*(t[C+(i>>>3)]>>>7-(7&i)&1))==255*f?0:255;z[T+i]=O<<24|b<<16|b<<8|b}else if($==2)for(i=0;i<o;i++)O=(b=85*(t[C+(i>>>2)]>>>6-((3&i)<<1)&3))==85*f?0:255,z[T+i]=O<<24|b<<16|b<<8|b;else if($==4)for(i=0;i<o;i++)O=(b=17*(t[C+(i>>>1)]>>>4-((1&i)<<2)&15))==17*f?0:255,z[T+i]=O<<24|b<<16|b<<8|b;else if($==8)for(i=0;i<o;i++)O=(b=t[C+i])==f?0:255,z[T+i]=O<<24|b<<16|b<<8|b;else if($==16)for(i=0;i<o;i++)b=t[C+(i<<1)],O=R(t,C+(i<<1))==f?0:255,z[T+i]=O<<24|b<<16|b<<8|b}return y}function A(t,o,l,s){const h=n(t),U=Math.ceil(l*h/8),E=new Uint8Array((U+1+t.interlace)*s);return o=t.tabs.CgBI?e(o,E):a(o,E),t.interlace==0?o=u(o,t,0,l,s):t.interlace==1&&(o=(function(z,P){const $=P.width,R=P.height,v=n(P),M=v>>3,f=Math.ceil($*v/8),c=new Uint8Array(R*f);let k=0;const _=[0,0,4,0,2,0,1],x=[0,4,0,2,0,1,0],F=[8,8,8,4,4,2,2],p=[8,8,4,4,2,2,1];let b=0;for(;b<7;){const i=F[b],O=p[b];let C=0,T=0,L=_[b];for(;L<R;)L+=i,T++;let V=x[b];for(;V<$;)V+=O,C++;const H=Math.ceil(C*v/8);u(z,P,k,C,T);let N=0,S=_[b];for(;S<R;){let D=x[b],Z=k+N*H<<3;for(;D<$;){var r;if(v==1&&(r=(r=z[Z>>3])>>7-(7&Z)&1,c[S*f+(D>>3)]|=r<<7-((7&D)<<0)),v==2&&(r=(r=z[Z>>3])>>6-(7&Z)&3,c[S*f+(D>>2)]|=r<<6-((3&D)<<1)),v==4&&(r=(r=z[Z>>3])>>4-(7&Z)&15,c[S*f+(D>>1)]|=r<<4-((1&D)<<2)),v>=8){const Q=S*f+D*M;for(let B=0;B<M;B++)c[Q+B]=z[(Z>>3)+B]}Z+=v,D+=O}N++,S+=i}C*T!=0&&(k+=T*(1+H)),b+=1}return c})(o,t)),o}function a(t,o){return e(new Uint8Array(t.buffer,2,t.length-6),o)}var e=(function(){const t={H:{}};return t.H.N=function(o,l){const s=Uint8Array;let h,U,E=0,y=0,z=0,P=0,$=0,R=0,v=0,M=0,f=0;if(o[0]==3&&o[1]==0)return l||new s(0);const c=t.H,k=c.b,_=c.e,x=c.R,F=c.n,p=c.A,b=c.Z,r=c.m,i=l==null;for(i&&(l=new s(o.length>>>2<<5));E==0;)if(E=k(o,f,1),y=k(o,f+1,2),f+=3,y!=0){if(i&&(l=t.H.W(l,M+(1<<17))),y==1&&(h=r.J,U=r.h,R=511,v=31),y==2){z=_(o,f,5)+257,P=_(o,f+5,5)+1,$=_(o,f+10,4)+4,f+=14;let C=1;for(var O=0;O<38;O+=2)r.Q[O]=0,r.Q[O+1]=0;for(O=0;O<$;O++){const V=_(o,f+3*O,3);r.Q[1+(r.X[O]<<1)]=V,V>C&&(C=V)}f+=3*$,F(r.Q,C),p(r.Q,C,r.u),h=r.w,U=r.d,f=x(r.u,(1<<C)-1,z+P,o,f,r.v);const T=c.V(r.v,0,z,r.C);R=(1<<T)-1;const L=c.V(r.v,z,P,r.D);v=(1<<L)-1,F(r.C,T),p(r.C,T,h),F(r.D,L),p(r.D,L,U)}for(;;){const C=h[b(o,f)&R];f+=15&C;const T=C>>>4;if(!(T>>>8))l[M++]=T;else{if(T==256)break;{let L=M+T-254;if(T>264){const D=r.q[T-257];L=M+(D>>>3)+_(o,f,7&D),f+=7&D}const V=U[b(o,f)&v];f+=15&V;const H=V>>>4,N=r.c[H],S=(N>>>4)+k(o,f,15&N);for(f+=15&N;M<L;)l[M]=l[M++-S],l[M]=l[M++-S],l[M]=l[M++-S],l[M]=l[M++-S];M=L}}}}else{(7&f)!=0&&(f+=8-(7&f));const C=4+(f>>>3),T=o[C-4]|o[C-3]<<8;i&&(l=t.H.W(l,M+T)),l.set(new s(o.buffer,o.byteOffset+C,T),M),f=C+T<<3,M+=T}return l.length==M?l:l.slice(0,M)},t.H.W=function(o,l){const s=o.length;if(l<=s)return o;const h=new Uint8Array(s<<1);return h.set(o,0),h},t.H.R=function(o,l,s,h,U,E){const y=t.H.e,z=t.H.Z;let P=0;for(;P<s;){const $=o[z(h,U)&l];U+=15&$;const R=$>>>4;if(R<=15)E[P]=R,P++;else{let v=0,M=0;R==16?(M=3+y(h,U,2),U+=2,v=E[P-1]):R==17?(M=3+y(h,U,3),U+=3):R==18&&(M=11+y(h,U,7),U+=7);const f=P+M;for(;P<f;)E[P]=v,P++}}return U},t.H.V=function(o,l,s,h){let U=0,E=0;const y=h.length>>>1;for(;E<s;){const z=o[E+l];h[E<<1]=0,h[1+(E<<1)]=z,z>U&&(U=z),E++}for(;E<y;)h[E<<1]=0,h[1+(E<<1)]=0,E++;return U},t.H.n=function(o,l){const s=t.H.m,h=o.length;let U,E,y,z;const P=s.j;for(var $=0;$<=l;$++)P[$]=0;for($=1;$<h;$+=2)P[o[$]]++;const R=s.K;for(U=0,P[0]=0,E=1;E<=l;E++)U=U+P[E-1]<<1,R[E]=U;for(y=0;y<h;y+=2)z=o[y+1],z!=0&&(o[y]=R[z],R[z]++)},t.H.A=function(o,l,s){const h=o.length,U=t.H.m.r;for(let E=0;E<h;E+=2)if(o[E+1]!=0){const y=E>>1,z=o[E+1],P=y<<4|z,$=l-z;let R=o[E]<<$;const v=R+(1<<$);for(;R!=v;)s[U[R]>>>15-l]=P,R++}},t.H.l=function(o,l){const s=t.H.m.r,h=15-l;for(let U=0;U<o.length;U+=2){const E=o[U]<<l-o[U+1];o[U]=s[E]>>>h}},t.H.M=function(o,l,s){s<<=7&l;const h=l>>>3;o[h]|=s,o[h+1]|=s>>>8},t.H.I=function(o,l,s){s<<=7&l;const h=l>>>3;o[h]|=s,o[h+1]|=s>>>8,o[h+2]|=s>>>16},t.H.e=function(o,l,s){return(o[l>>>3]|o[1+(l>>>3)]<<8)>>>(7&l)&(1<<s)-1},t.H.b=function(o,l,s){return(o[l>>>3]|o[1+(l>>>3)]<<8|o[2+(l>>>3)]<<16)>>>(7&l)&(1<<s)-1},t.H.Z=function(o,l){return(o[l>>>3]|o[1+(l>>>3)]<<8|o[2+(l>>>3)]<<16)>>>(7&l)},t.H.i=function(o,l){return(o[l>>>3]|o[1+(l>>>3)]<<8|o[2+(l>>>3)]<<16|o[3+(l>>>3)]<<24)>>>(7&l)},t.H.m=(function(){const o=Uint16Array,l=Uint32Array;return{K:new o(16),j:new o(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new o(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new l(32),J:new o(512),_:[],h:new o(32),$:[],w:new o(32768),C:[],v:[],d:new o(32768),D:[],u:new o(512),Q:[],r:new o(32768),s:new l(286),Y:new l(30),a:new l(19),t:new l(15e3),k:new o(65536),g:new o(32768)}})(),(function(){const o=t.H.m;for(var l=0;l<32768;l++){let h=l;h=(2863311530&h)>>>1|(1431655765&h)<<1,h=(3435973836&h)>>>2|(858993459&h)<<2,h=(4042322160&h)>>>4|(252645135&h)<<4,h=(4278255360&h)>>>8|(16711935&h)<<8,o.r[l]=(h>>>16|h<<16)>>>17}function s(h,U,E){for(;U--!=0;)h.push(0,E)}for(l=0;l<32;l++)o.q[l]=o.S[l]<<3|o.T[l],o.c[l]=o.p[l]<<4|o.z[l];s(o._,144,8),s(o._,112,9),s(o._,24,7),s(o._,8,8),t.H.n(o._,9),t.H.A(o._,9,o.J),t.H.l(o._,9),s(o.$,32,5),t.H.n(o.$,5),t.H.A(o.$,5,o.h),t.H.l(o.$,5),s(o.Q,19,0),s(o.C,286,0),s(o.D,30,0),s(o.v,320,0)})(),t.H.N})();function n(t){return[1,null,3,1,2,null,4][t.ctype]*t.depth}function u(t,o,l,s,h){let U=n(o);const E=Math.ceil(s*U/8);let y,z;U=Math.ceil(U/8);let P=t[l],$=0;if(P>1&&(t[l]=[0,0,1][P-2]),P==3)for($=U;$<E;$++)t[$+1]=t[$+1]+(t[$+1-U]>>>1)&255;for(let R=0;R<h;R++)if(y=l+R*E,z=y+R+1,P=t[z-1],$=0,P==0)for(;$<E;$++)t[y+$]=t[z+$];else if(P==1){for(;$<U;$++)t[y+$]=t[z+$];for(;$<E;$++)t[y+$]=t[z+$]+t[y+$-U]}else if(P==2)for(;$<E;$++)t[y+$]=t[z+$]+t[y+$-E];else if(P==3){for(;$<U;$++)t[y+$]=t[z+$]+(t[y+$-E]>>>1);for(;$<E;$++)t[y+$]=t[z+$]+(t[y+$-E]+t[y+$-U]>>>1)}else{for(;$<U;$++)t[y+$]=t[z+$]+d(0,t[y+$-E],0);for(;$<E;$++)t[y+$]=t[z+$]+d(t[y+$-U],t[y+$-E],t[y+$-U-E])}return t}function d(t,o,l){const s=t+o-l,h=s-t,U=s-o,E=s-l;return h*h<=U*U&&h*h<=E*E?t:U*U<=E*E?o:l}function g(t,o,l){l.width=m.readUint(t,o),o+=4,l.height=m.readUint(t,o),o+=4,l.depth=t[o],o++,l.ctype=t[o],o++,l.compress=t[o],o++,l.filter=t[o],o++,l.interlace=t[o],o++}function w(t,o,l,s,h,U,E,y,z){const P=Math.min(o,h),$=Math.min(l,U);let R=0,v=0;for(let b=0;b<$;b++)for(let r=0;r<P;r++)if(E>=0&&y>=0?(R=b*o+r<<2,v=(y+b)*h+E+r<<2):(R=(-y+b)*o-E+r<<2,v=b*h+r<<2),z==0)s[v]=t[R],s[v+1]=t[R+1],s[v+2]=t[R+2],s[v+3]=t[R+3];else if(z==1){var M=t[R+3]*.00392156862745098,f=t[R]*M,c=t[R+1]*M,k=t[R+2]*M,_=s[v+3]*(1/255),x=s[v]*_,F=s[v+1]*_,p=s[v+2]*_;const i=1-M,O=M+_*i,C=O==0?0:1/O;s[v+3]=255*O,s[v+0]=(f+x*i)*C,s[v+1]=(c+F*i)*C,s[v+2]=(k+p*i)*C}else if(z==2)M=t[R+3],f=t[R],c=t[R+1],k=t[R+2],_=s[v+3],x=s[v],F=s[v+1],p=s[v+2],M==_&&f==x&&c==F&&k==p?(s[v]=0,s[v+1]=0,s[v+2]=0,s[v+3]=0):(s[v]=f,s[v+1]=c,s[v+2]=k,s[v+3]=M);else if(z==3){if(M=t[R+3],f=t[R],c=t[R+1],k=t[R+2],_=s[v+3],x=s[v],F=s[v+1],p=s[v+2],M==_&&f==x&&c==F&&k==p)continue;if(M<220&&_>20)return!1}return!0}return{decode:function(o){const l=new Uint8Array(o);let s=8;const h=m,U=h.readUshort,E=h.readUint,y={tabs:{},frames:[]},z=new Uint8Array(l.length);let P,$=0,R=0;const v=[137,80,78,71,13,10,26,10];for(var M=0;M<8;M++)if(l[M]!=v[M])throw"The input is not a PNG file!";for(;s<l.length;){const b=h.readUint(l,s);s+=4;const r=h.readASCII(l,s,4);if(s+=4,r=="IHDR")g(l,s,y);else if(r=="iCCP"){for(var f=s;l[f]!=0;)f++;h.readASCII(l,s,f-s),l[f+1];const i=l.slice(f+2,s+b);let O=null;try{O=a(i)}catch{O=e(i)}y.tabs[r]=O}else if(r=="CgBI")y.tabs[r]=l.slice(s,s+4);else if(r=="IDAT"){for(M=0;M<b;M++)z[$+M]=l[s+M];$+=b}else if(r=="acTL")y.tabs[r]={num_frames:E(l,s),num_plays:E(l,s+4)},P=new Uint8Array(l.length);else if(r=="fcTL"){R!=0&&((p=y.frames[y.frames.length-1]).data=A(y,P.slice(0,R),p.rect.width,p.rect.height),R=0);const i={x:E(l,s+12),y:E(l,s+16),width:E(l,s+4),height:E(l,s+8)};let O=U(l,s+22);O=U(l,s+20)/(O==0?100:O);const C={rect:i,delay:Math.round(1e3*O),dispose:l[s+24],blend:l[s+25]};y.frames.push(C)}else if(r=="fdAT"){for(M=0;M<b-4;M++)P[R+M]=l[s+M+4];R+=b-4}else if(r=="pHYs")y.tabs[r]=[h.readUint(l,s),h.readUint(l,s+4),l[s+8]];else if(r=="cHRM")for(y.tabs[r]=[],M=0;M<8;M++)y.tabs[r].push(h.readUint(l,s+4*M));else if(r=="tEXt"||r=="zTXt"){y.tabs[r]==null&&(y.tabs[r]={});var c=h.nextZero(l,s),k=h.readASCII(l,s,c-s),_=s+b-c-1;if(r=="tEXt")F=h.readASCII(l,c+1,_);else{var x=a(l.slice(c+2,c+2+_));F=h.readUTF8(x,0,x.length)}y.tabs[r][k]=F}else if(r=="iTXt"){y.tabs[r]==null&&(y.tabs[r]={}),c=0,f=s,c=h.nextZero(l,f),k=h.readASCII(l,f,c-f);const i=l[f=c+1];var F;l[f+1],f+=2,c=h.nextZero(l,f),h.readASCII(l,f,c-f),f=c+1,c=h.nextZero(l,f),h.readUTF8(l,f,c-f),_=b-((f=c+1)-s),i==0?F=h.readUTF8(l,f,_):(x=a(l.slice(f,f+_)),F=h.readUTF8(x,0,x.length)),y.tabs[r][k]=F}else if(r=="PLTE")y.tabs[r]=h.readBytes(l,s,b);else if(r=="hIST"){const i=y.tabs.PLTE.length/3;for(y.tabs[r]=[],M=0;M<i;M++)y.tabs[r].push(U(l,s+2*M))}else if(r=="tRNS")y.ctype==3?y.tabs[r]=h.readBytes(l,s,b):y.ctype==0?y.tabs[r]=U(l,s):y.ctype==2&&(y.tabs[r]=[U(l,s),U(l,s+2),U(l,s+4)]);else if(r=="gAMA")y.tabs[r]=h.readUint(l,s)/1e5;else if(r=="sRGB")y.tabs[r]=l[s];else if(r=="bKGD")y.ctype==0||y.ctype==4?y.tabs[r]=[U(l,s)]:y.ctype==2||y.ctype==6?y.tabs[r]=[U(l,s),U(l,s+2),U(l,s+4)]:y.ctype==3&&(y.tabs[r]=l[s]);else if(r=="IEND")break;s+=b,h.readUint(l,s),s+=4}var p;return R!=0&&((p=y.frames[y.frames.length-1]).data=A(y,P.slice(0,R),p.rect.width,p.rect.height)),y.data=A(y,z,y.width,y.height),delete y.compress,delete y.interlace,delete y.filter,y},toRGBA8:function(o){const l=o.width,s=o.height;if(o.tabs.acTL==null)return[q(o.data,l,s,o).buffer];const h=[];o.frames[0].data==null&&(o.frames[0].data=o.data);const U=l*s*4,E=new Uint8Array(U),y=new Uint8Array(U),z=new Uint8Array(U);for(let $=0;$<o.frames.length;$++){const R=o.frames[$],v=R.rect.x,M=R.rect.y,f=R.rect.width,c=R.rect.height,k=q(R.data,f,c,o);if($!=0)for(var P=0;P<U;P++)z[P]=E[P];if(R.blend==0?w(k,f,c,E,l,s,v,M,0):R.blend==1&&w(k,f,c,E,l,s,v,M,1),h.push(E.buffer.slice(0)),R.dispose!=0){if(R.dispose==1)w(y,f,c,E,l,s,v,M,0);else if(R.dispose==2)for(P=0;P<U;P++)E[P]=z[P]}}return h},_paeth:d,_copyTile:w,_bin:m}})();(function(){const{_copyTile:m}=ve,{_bin:q}=ve,A=ve._paeth;var a={table:(function(){const f=new Uint32Array(256);for(let c=0;c<256;c++){let k=c;for(let _=0;_<8;_++)1&k?k=3988292384^k>>>1:k>>>=1;f[c]=k}return f})(),update(f,c,k,_){for(let x=0;x<_;x++)f=a.table[255&(f^c[k+x])]^f>>>8;return f},crc:(f,c,k)=>4294967295^a.update(4294967295,f,c,k)};function e(f,c,k,_){c[k]+=f[0]*_>>4,c[k+1]+=f[1]*_>>4,c[k+2]+=f[2]*_>>4,c[k+3]+=f[3]*_>>4}function n(f){return Math.max(0,Math.min(255,f))}function u(f,c){const k=f[0]-c[0],_=f[1]-c[1],x=f[2]-c[2],F=f[3]-c[3];return k*k+_*_+x*x+F*F}function d(f,c,k,_,x,F,p){p==null&&(p=1);const b=_.length,r=[];for(var i=0;i<b;i++){const S=_[i];r.push([S>>>0&255,S>>>8&255,S>>>16&255,S>>>24&255])}for(i=0;i<b;i++){let S=4294967295;for(var O=0,C=0;C<b;C++){var T=u(r[i],r[C]);C!=i&&T<S&&(S=T,O=C)}}const L=new Uint32Array(x.buffer),V=new Int16Array(c*k*4),H=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(i=0;i<H.length;i++)H[i]=255*((H[i]+.5)/16-.5);for(let S=0;S<k;S++)for(let D=0;D<c;D++){var N;i=4*(S*c+D),p!=2?N=[n(f[i]+V[i]),n(f[i+1]+V[i+1]),n(f[i+2]+V[i+2]),n(f[i+3]+V[i+3])]:(T=H[4*(3&S)+(3&D)],N=[n(f[i]+T),n(f[i+1]+T),n(f[i+2]+T),n(f[i+3]+T)]),O=0;let Z=16777215;for(C=0;C<b;C++){const W=u(N,r[C]);W<Z&&(Z=W,O=C)}const Q=r[O],B=[N[0]-Q[0],N[1]-Q[1],N[2]-Q[2],N[3]-Q[3]];p==1&&(D!=c-1&&e(B,V,i+4,7),S!=k-1&&(D!=0&&e(B,V,i+4*c-4,3),e(B,V,i+4*c,5),D!=c-1&&e(B,V,i+4*c+4,1))),F[i>>2]=O,L[i>>2]=_[O]}}function g(f,c,k,_,x){x==null&&(x={});const{crc:F}=a,p=q.writeUint,b=q.writeUshort,r=q.writeASCII;let i=8;const O=f.frames.length>1;let C,T=!1,L=33+(O?20:0);if(x.sRGB!=null&&(L+=13),x.pHYs!=null&&(L+=21),x.iCCP!=null&&(C=pako.deflate(x.iCCP),L+=21+C.length+4),f.ctype==3){for(var V=f.plte.length,H=0;H<V;H++)f.plte[H]>>>24!=255&&(T=!0);L+=8+3*V+4+(T?8+1*V+4:0)}for(var N=0;N<f.frames.length;N++)O&&(L+=38),L+=(Q=f.frames[N]).cimg.length+12,N!=0&&(L+=4);L+=12;const S=new Uint8Array(L),D=[137,80,78,71,13,10,26,10];for(H=0;H<8;H++)S[H]=D[H];if(p(S,i,13),i+=4,r(S,i,"IHDR"),i+=4,p(S,i,c),i+=4,p(S,i,k),i+=4,S[i]=f.depth,i++,S[i]=f.ctype,i++,S[i]=0,i++,S[i]=0,i++,S[i]=0,i++,p(S,i,F(S,i-17,17)),i+=4,x.sRGB!=null&&(p(S,i,1),i+=4,r(S,i,"sRGB"),i+=4,S[i]=x.sRGB,i++,p(S,i,F(S,i-5,5)),i+=4),x.iCCP!=null){const B=13+C.length;p(S,i,B),i+=4,r(S,i,"iCCP"),i+=4,r(S,i,"ICC profile"),i+=11,i+=2,S.set(C,i),i+=C.length,p(S,i,F(S,i-(B+4),B+4)),i+=4}if(x.pHYs!=null&&(p(S,i,9),i+=4,r(S,i,"pHYs"),i+=4,p(S,i,x.pHYs[0]),i+=4,p(S,i,x.pHYs[1]),i+=4,S[i]=x.pHYs[2],i++,p(S,i,F(S,i-13,13)),i+=4),O&&(p(S,i,8),i+=4,r(S,i,"acTL"),i+=4,p(S,i,f.frames.length),i+=4,p(S,i,x.loop!=null?x.loop:0),i+=4,p(S,i,F(S,i-12,12)),i+=4),f.ctype==3){for(p(S,i,3*(V=f.plte.length)),i+=4,r(S,i,"PLTE"),i+=4,H=0;H<V;H++){const B=3*H,W=f.plte[H],J=255&W,te=W>>>8&255,Ue=W>>>16&255;S[i+B+0]=J,S[i+B+1]=te,S[i+B+2]=Ue}if(i+=3*V,p(S,i,F(S,i-3*V-4,3*V+4)),i+=4,T){for(p(S,i,V),i+=4,r(S,i,"tRNS"),i+=4,H=0;H<V;H++)S[i+H]=f.plte[H]>>>24&255;i+=V,p(S,i,F(S,i-V-4,V+4)),i+=4}}let Z=0;for(N=0;N<f.frames.length;N++){var Q=f.frames[N];O&&(p(S,i,26),i+=4,r(S,i,"fcTL"),i+=4,p(S,i,Z++),i+=4,p(S,i,Q.rect.width),i+=4,p(S,i,Q.rect.height),i+=4,p(S,i,Q.rect.x),i+=4,p(S,i,Q.rect.y),i+=4,b(S,i,_[N]),i+=2,b(S,i,1e3),i+=2,S[i]=Q.dispose,i++,S[i]=Q.blend,i++,p(S,i,F(S,i-30,30)),i+=4);const B=Q.cimg;p(S,i,(V=B.length)+(N==0?0:4)),i+=4;const W=i;r(S,i,N==0?"IDAT":"fdAT"),i+=4,N!=0&&(p(S,i,Z++),i+=4),S.set(B,i),i+=V,p(S,i,F(S,W,i-W)),i+=4}return p(S,i,0),i+=4,r(S,i,"IEND"),i+=4,p(S,i,F(S,i-4,4)),i+=4,S.buffer}function w(f,c,k){for(let _=0;_<f.frames.length;_++){const x=f.frames[_];x.rect.width;const F=x.rect.height,p=new Uint8Array(F*x.bpl+F);x.cimg=s(x.img,F,x.bpp,x.bpl,p,c,k)}}function t(f,c,k,_,x){const F=x[0],p=x[1],b=x[2],r=x[3],i=x[4],O=x[5];let C=6,T=8,L=255;for(var V=0;V<f.length;V++){const oe=new Uint8Array(f[V]);for(var H=oe.length,N=0;N<H;N+=4)L&=oe[N+3]}const S=L!=255,D=(function(X,G,le,de,ee,ue){const ne=[];for(var K=0;K<X.length;K++){const ce=new Uint8Array(X[K]),be=new Uint32Array(ce.buffer);var qe;let pe=0,ye=0,we=G,Ce=le,Xe=de?1:0;if(K!=0){const Fn=ue||de||K==1||ne[K-2].dispose!=0?1:2;let Ye=0,on=1e9;for(let Te=0;Te<Fn;Te++){var Ae=new Uint8Array(X[K-1-Te]);const Cn=new Uint32Array(X[K-1-Te]);let xe=G,_e=le,Me=-1,ze=-1;for(let Ee=0;Ee<le;Ee++)for(let $e=0;$e<G;$e++)be[re=Ee*G+$e]!=Cn[re]&&($e<xe&&(xe=$e),$e>Me&&(Me=$e),Ee<_e&&(_e=Ee),Ee>ze&&(ze=Ee));Me==-1&&(xe=_e=Me=ze=0),ee&&((1&xe)==1&&xe--,(1&_e)==1&&_e--);const rn=(Me-xe+1)*(ze-_e+1);rn<on&&(on=rn,Ye=Te,pe=xe,ye=_e,we=Me-xe+1,Ce=ze-_e+1)}Ae=new Uint8Array(X[K-1-Ye]),Ye==1&&(ne[K-1].dispose=2),qe=new Uint8Array(we*Ce*4),m(Ae,G,le,qe,we,Ce,-pe,-ye,0),Xe=m(ce,G,le,qe,we,Ce,-pe,-ye,3)?1:0,Xe==1?l(ce,G,le,qe,{x:pe,y:ye,width:we,height:Ce}):m(ce,G,le,qe,we,Ce,-pe,-ye,0)}else qe=ce.slice(0);ne.push({rect:{x:pe,y:ye,width:we,height:Ce},img:qe,blend:Xe,dispose:0})}if(de)for(K=0;K<ne.length;K++){if((Fe=ne[K]).blend==1)continue;const ce=Fe.rect,be=ne[K-1].rect,pe=Math.min(ce.x,be.x),ye=Math.min(ce.y,be.y),we={x:pe,y:ye,width:Math.max(ce.x+ce.width,be.x+be.width)-pe,height:Math.max(ce.y+ce.height,be.y+be.height)-ye};ne[K-1].dispose=1,K-1!=0&&o(X,G,le,ne,K-1,we,ee),o(X,G,le,ne,K,we,ee)}let He=0;if(X.length!=1)for(var re=0;re<ne.length;re++){var Fe;He+=(Fe=ne[re]).rect.width*Fe.rect.height}return ne})(f,c,k,F,p,b),Z={},Q=[],B=[];if(_!=0){const oe=[];for(N=0;N<D.length;N++)oe.push(D[N].img.buffer);const X=(function(ee){let ue=0;for(var ne=0;ne<ee.length;ne++)ue+=ee[ne].byteLength;const K=new Uint8Array(ue);let qe=0;for(ne=0;ne<ee.length;ne++){const Ae=new Uint8Array(ee[ne]),He=Ae.length;for(let re=0;re<He;re+=4){let Fe=Ae[re],ce=Ae[re+1],be=Ae[re+2];const pe=Ae[re+3];pe==0&&(Fe=ce=be=0),K[qe+re]=Fe,K[qe+re+1]=ce,K[qe+re+2]=be,K[qe+re+3]=pe}qe+=He}return K.buffer})(oe),G=U(X,_);for(N=0;N<G.plte.length;N++)Q.push(G.plte[N].est.rgba);let le=0;for(N=0;N<D.length;N++){const de=(J=D[N]).img.length;var W=new Uint8Array(G.inds.buffer,le>>2,de>>2);B.push(W);const ee=new Uint8Array(G.abuf,le,de);O&&d(J.img,J.rect.width,J.rect.height,Q,ee,W),J.img.set(ee),le+=de}}else for(V=0;V<D.length;V++){var J=D[V];const oe=new Uint32Array(J.img.buffer);var te=J.rect.width;for(H=oe.length,W=new Uint8Array(H),B.push(W),N=0;N<H;N++){const X=oe[N];if(N!=0&&X==oe[N-1])W[N]=W[N-1];else if(N>te&&X==oe[N-te])W[N]=W[N-te];else{let G=Z[X];if(G==null&&(Z[X]=G=Q.length,Q.push(X),Q.length>=300))break;W[N]=G}}}const Ue=Q.length;for(Ue<=256&&i==0&&(T=Ue<=2?1:Ue<=4?2:Ue<=16?4:8,T=Math.max(T,r)),V=0;V<D.length;V++){(J=D[V]).rect.x,J.rect.y,te=J.rect.width;const oe=J.rect.height;let X=J.img;new Uint32Array(X.buffer);let G=4*te,le=4;if(Ue<=256&&i==0){G=Math.ceil(T*te/8);var ge=new Uint8Array(G*oe);const de=B[V];for(let ee=0;ee<oe;ee++){N=ee*G;const ue=ee*te;if(T==8)for(var Y=0;Y<te;Y++)ge[N+Y]=de[ue+Y];else if(T==4)for(Y=0;Y<te;Y++)ge[N+(Y>>1)]|=de[ue+Y]<<4-4*(1&Y);else if(T==2)for(Y=0;Y<te;Y++)ge[N+(Y>>2)]|=de[ue+Y]<<6-2*(3&Y);else if(T==1)for(Y=0;Y<te;Y++)ge[N+(Y>>3)]|=de[ue+Y]<<7-1*(7&Y)}X=ge,C=3,le=1}else if(S==0&&D.length==1){ge=new Uint8Array(te*oe*3);const de=te*oe;for(N=0;N<de;N++){const ee=3*N,ue=4*N;ge[ee]=X[ue],ge[ee+1]=X[ue+1],ge[ee+2]=X[ue+2]}X=ge,C=2,le=3,G=3*te}J.img=X,J.bpl=G,J.bpp=le}return{ctype:C,depth:T,plte:Q,frames:D}}function o(f,c,k,_,x,F,p){const b=Uint8Array,r=Uint32Array,i=new b(f[x-1]),O=new r(f[x-1]),C=x+1<f.length?new b(f[x+1]):null,T=new b(f[x]),L=new r(T.buffer);let V=c,H=k,N=-1,S=-1;for(let Z=0;Z<F.height;Z++)for(let Q=0;Q<F.width;Q++){const B=F.x+Q,W=F.y+Z,J=W*c+B,te=L[J];te==0||_[x-1].dispose==0&&O[J]==te&&(C==null||C[4*J+3]!=0)||(B<V&&(V=B),B>N&&(N=B),W<H&&(H=W),W>S&&(S=W))}N==-1&&(V=H=N=S=0),p&&((1&V)==1&&V--,(1&H)==1&&H--),F={x:V,y:H,width:N-V+1,height:S-H+1};const D=_[x];D.rect=F,D.blend=1,D.img=new Uint8Array(F.width*F.height*4),_[x-1].dispose==0?(m(i,c,k,D.img,F.width,F.height,-F.x,-F.y,0),l(T,c,k,D.img,F)):m(T,c,k,D.img,F.width,F.height,-F.x,-F.y,0)}function l(f,c,k,_,x){m(f,c,k,_,x.width,x.height,-x.x,-x.y,2)}function s(f,c,k,_,x,F,p){const b=[];let r,i=[0,1,2,3,4];F!=-1?i=[F]:(c*_>5e5||k==1)&&(i=[0]),p&&(r={level:0});const O=lt;for(var C=0;C<i.length;C++){for(let V=0;V<c;V++)h(x,f,V,_,k,i[C]);b.push(O.deflate(x,r))}let T,L=1e9;for(C=0;C<b.length;C++)b[C].length<L&&(T=C,L=b[C].length);return b[T]}function h(f,c,k,_,x,F){const p=k*_;let b=p+k;if(f[b]=F,b++,F==0)if(_<500)for(var r=0;r<_;r++)f[b+r]=c[p+r];else f.set(new Uint8Array(c.buffer,p,_),b);else if(F==1){for(r=0;r<x;r++)f[b+r]=c[p+r];for(r=x;r<_;r++)f[b+r]=c[p+r]-c[p+r-x]+256&255}else if(k==0){for(r=0;r<x;r++)f[b+r]=c[p+r];if(F==2)for(r=x;r<_;r++)f[b+r]=c[p+r];if(F==3)for(r=x;r<_;r++)f[b+r]=c[p+r]-(c[p+r-x]>>1)+256&255;if(F==4)for(r=x;r<_;r++)f[b+r]=c[p+r]-A(c[p+r-x],0,0)+256&255}else{if(F==2)for(r=0;r<_;r++)f[b+r]=c[p+r]+256-c[p+r-_]&255;if(F==3){for(r=0;r<x;r++)f[b+r]=c[p+r]+256-(c[p+r-_]>>1)&255;for(r=x;r<_;r++)f[b+r]=c[p+r]+256-(c[p+r-_]+c[p+r-x]>>1)&255}if(F==4){for(r=0;r<x;r++)f[b+r]=c[p+r]+256-A(0,c[p+r-_],0)&255;for(r=x;r<_;r++)f[b+r]=c[p+r]+256-A(c[p+r-x],c[p+r-_],c[p+r-x-_])&255}}}function U(f,c){const k=new Uint8Array(f),_=k.slice(0),x=new Uint32Array(_.buffer),F=E(_,c),p=F[0],b=F[1],r=k.length,i=new Uint8Array(r>>2);let O;if(k.length<2e7)for(var C=0;C<r;C+=4)O=y(p,T=k[C]*(1/255),L=k[C+1]*(1/255),V=k[C+2]*(1/255),H=k[C+3]*(1/255)),i[C>>2]=O.ind,x[C>>2]=O.est.rgba;else for(C=0;C<r;C+=4){var T=k[C]*.00392156862745098,L=k[C+1]*(1/255),V=k[C+2]*(1/255),H=k[C+3]*(1/255);for(O=p;O.left;)O=z(O.est,T,L,V,H)<=0?O.left:O.right;i[C>>2]=O.ind,x[C>>2]=O.est.rgba}return{abuf:_.buffer,inds:i,plte:b}}function E(f,c,k){k==null&&(k=1e-4);const _=new Uint32Array(f.buffer),x={i0:0,i1:f.length,bst:null,est:null,tdst:0,left:null,right:null};x.bst=R(f,x.i0,x.i1),x.est=v(x.bst);const F=[x];for(;F.length<c;){let b=0,r=0;for(var p=0;p<F.length;p++)F[p].est.L>b&&(b=F[p].est.L,r=p);if(b<k)break;const i=F[r],O=P(f,_,i.i0,i.i1,i.est.e,i.est.eMq255);if(i.i0>=O||i.i1<=O){i.est.L=0;continue}const C={i0:i.i0,i1:O,bst:null,est:null,tdst:0,left:null,right:null};C.bst=R(f,C.i0,C.i1),C.est=v(C.bst);const T={i0:O,i1:i.i1,bst:null,est:null,tdst:0,left:null,right:null};for(T.bst={R:[],m:[],N:i.bst.N-C.bst.N},p=0;p<16;p++)T.bst.R[p]=i.bst.R[p]-C.bst.R[p];for(p=0;p<4;p++)T.bst.m[p]=i.bst.m[p]-C.bst.m[p];T.est=v(T.bst),i.left=C,i.right=T,F[r]=C,F.push(T)}for(F.sort(((b,r)=>r.bst.N-b.bst.N)),p=0;p<F.length;p++)F[p].ind=p;return[x,F]}function y(f,c,k,_,x){if(f.left==null)return f.tdst=(function(C,T,L,V,H){const N=T-C[0],S=L-C[1],D=V-C[2],Z=H-C[3];return N*N+S*S+D*D+Z*Z})(f.est.q,c,k,_,x),f;const F=z(f.est,c,k,_,x);let p=f.left,b=f.right;F>0&&(p=f.right,b=f.left);const r=y(p,c,k,_,x);if(r.tdst<=F*F)return r;const i=y(b,c,k,_,x);return i.tdst<r.tdst?i:r}function z(f,c,k,_,x){const{e:F}=f;return F[0]*c+F[1]*k+F[2]*_+F[3]*x-f.eMq}function P(f,c,k,_,x,F){for(_-=4;k<_;){for(;$(f,k,x)<=F;)k+=4;for(;$(f,_,x)>F;)_-=4;if(k>=_)break;const p=c[k>>2];c[k>>2]=c[_>>2],c[_>>2]=p,k+=4,_-=4}for(;$(f,k,x)>F;)k-=4;return k+4}function $(f,c,k){return f[c]*k[0]+f[c+1]*k[1]+f[c+2]*k[2]+f[c+3]*k[3]}function R(f,c,k){const _=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],x=[0,0,0,0],F=k-c>>2;for(let p=c;p<k;p+=4){const b=f[p]*.00392156862745098,r=f[p+1]*(1/255),i=f[p+2]*(1/255),O=f[p+3]*(1/255);x[0]+=b,x[1]+=r,x[2]+=i,x[3]+=O,_[0]+=b*b,_[1]+=b*r,_[2]+=b*i,_[3]+=b*O,_[5]+=r*r,_[6]+=r*i,_[7]+=r*O,_[10]+=i*i,_[11]+=i*O,_[15]+=O*O}return _[4]=_[1],_[8]=_[2],_[9]=_[6],_[12]=_[3],_[13]=_[7],_[14]=_[11],{R:_,m:x,N:F}}function v(f){const{R:c}=f,{m:k}=f,{N:_}=f,x=k[0],F=k[1],p=k[2],b=k[3],r=_==0?0:1/_,i=[c[0]-x*x*r,c[1]-x*F*r,c[2]-x*p*r,c[3]-x*b*r,c[4]-F*x*r,c[5]-F*F*r,c[6]-F*p*r,c[7]-F*b*r,c[8]-p*x*r,c[9]-p*F*r,c[10]-p*p*r,c[11]-p*b*r,c[12]-b*x*r,c[13]-b*F*r,c[14]-b*p*r,c[15]-b*b*r],O=i,C=M;let T=[Math.random(),Math.random(),Math.random(),Math.random()],L=0,V=0;if(_!=0)for(let N=0;N<16&&(T=C.multVec(O,T),V=Math.sqrt(C.dot(T,T)),T=C.sml(1/V,T),!(N!=0&&Math.abs(V-L)<1e-9));N++)L=V;const H=[x*r,F*r,p*r,b*r];return{Cov:i,q:H,e:T,L,eMq255:C.dot(C.sml(255,H),T),eMq:C.dot(T,H),rgba:(Math.round(255*H[3])<<24|Math.round(255*H[2])<<16|Math.round(255*H[1])<<8|Math.round(255*H[0])<<0)>>>0}}var M={multVec:(f,c)=>[f[0]*c[0]+f[1]*c[1]+f[2]*c[2]+f[3]*c[3],f[4]*c[0]+f[5]*c[1]+f[6]*c[2]+f[7]*c[3],f[8]*c[0]+f[9]*c[1]+f[10]*c[2]+f[11]*c[3],f[12]*c[0]+f[13]*c[1]+f[14]*c[2]+f[15]*c[3]],dot:(f,c)=>f[0]*c[0]+f[1]*c[1]+f[2]*c[2]+f[3]*c[3],sml:(f,c)=>[f*c[0],f*c[1],f*c[2],f*c[3]]};ve.encode=function(c,k,_,x,F,p,b){x==null&&(x=0),b==null&&(b=!1);const r=t(c,k,_,x,[!1,!1,!1,0,b,!1]);return w(r,-1),g(r,k,_,F,p)},ve.encodeLL=function(c,k,_,x,F,p,b,r){const i={ctype:0+(x==1?0:2)+(F==0?0:4),depth:p,frames:[]},O=(x+F)*p,C=O*k;for(let T=0;T<c.length;T++)i.frames.push({rect:{x:0,y:0,width:k,height:_},img:new Uint8Array(c[T]),blend:0,dispose:1,bpp:Math.ceil(O/8),bpl:Math.ceil(C/8)});return w(i,0,!0),g(i,k,_,b,r)},ve.encode.compress=t,ve.encode.dither=d,ve.quantize=U,ve.quantize.getKDtree=E,ve.quantize.getNearest=y})();const mn={toArrayBuffer(m,q){const A=m.width,a=m.height,e=A<<2,n=m.getContext("2d").getImageData(0,0,A,a),u=new Uint32Array(n.data.buffer),d=(32*A+31)/32<<2,g=d*a,w=122+g,t=new ArrayBuffer(w),o=new DataView(t),l=1<<20;let s,h,U,E,y=l,z=0,P=0,$=0;function R(f){o.setUint16(P,f,!0),P+=2}function v(f){o.setUint32(P,f,!0),P+=4}function M(f){P+=f}R(19778),v(w),M(4),v(122),v(108),v(A),v(-a>>>0),R(1),R(32),v(3),v(g),v(2835),v(2835),M(8),v(16711680),v(65280),v(255),v(4278190080),v(1466527264),(function f(){for(;z<a&&y>0;){for(E=122+z*d,s=0;s<e;)y--,h=u[$++],U=h>>>24,o.setUint32(E+s,h<<8|U),s+=4;z++}$<u.length?(y=l,setTimeout(f,mn._dly)):q(t)})()},toBlob(m,q){this.toArrayBuffer(m,(A=>{q(new Blob([A],{type:"image/bmp"}))}))},_dly:9};var fe={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},ot={[fe.CHROME]:16384,[fe.FIREFOX]:11180,[fe.DESKTOP_SAFARI]:16384,[fe.IE]:8192,[fe.IOS]:4096,[fe.ETC]:8192};const tn=typeof window<"u",vn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,We=tn&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),rt=(tn||vn)&&(We&&We.getOriginalSymbol(window,"File")||typeof File<"u"&&File),gn=(tn||vn)&&(We&&We.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function ln(m,q,A=Date.now()){return new Promise((a=>{const e=m.split(","),n=e[0].match(/:(.*?);/)[1],u=globalThis.atob(e[1]);let d=u.length;const g=new Uint8Array(d);for(;d--;)g[d]=u.charCodeAt(d);const w=new Blob([g],{type:n});w.name=q,w.lastModified=A,a(w)}))}function wn(m){return new Promise(((q,A)=>{const a=new gn;a.onload=()=>q(a.result),a.onerror=e=>A(e),a.readAsDataURL(m)}))}function kn(m){return new Promise(((q,A)=>{const a=new Image;a.onload=()=>q(a),a.onerror=e=>A(e),a.src=m}))}function Se(){if(Se.cachedResult!==void 0)return Se.cachedResult;let m=fe.ETC;const{userAgent:q}=navigator;return/Chrom(e|ium)/i.test(q)?m=fe.CHROME:/iP(ad|od|hone)/i.test(q)&&/WebKit/i.test(q)?m=fe.IOS:/Safari/i.test(q)?m=fe.DESKTOP_SAFARI:/Firefox/i.test(q)?m=fe.FIREFOX:(/MSIE/i.test(q)||document.documentMode)&&(m=fe.IE),Se.cachedResult=m,Se.cachedResult}function yn(m,q){const A=Se(),a=ot[A];let e=m,n=q,u=e*n;const d=e>n?n/e:e/n;for(;u>a*a;){const g=(a+e)/2,w=(a+n)/2;g<w?(n=w,e=w*d):(n=g*d,e=g),u=e*n}return{width:e,height:n}}function Ze(m,q){let A,a;try{if(A=new OffscreenCanvas(m,q),a=A.getContext("2d"),a===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{A=document.createElement("canvas"),a=A.getContext("2d")}return A.width=m,A.height=q,[A,a]}function An(m,q){const{width:A,height:a}=yn(m.width,m.height),[e,n]=Ze(A,a);return q&&/jpe?g/.test(q)&&(n.fillStyle="white",n.fillRect(0,0,e.width,e.height)),n.drawImage(m,0,0,e.width,e.height),e}function Be(){return Be.cachedResult!==void 0||(Be.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Be.cachedResult}function Ge(m,q={}){return new Promise((function(A,a){let e,n;var u=function(){try{return n=An(e,q.fileType||m.type),A([e,n])}catch(g){return a(g)}},d=function(g){try{var w=function(t){try{throw t}catch(o){return a(o)}};try{let t;return wn(m).then((function(o){try{return t=o,kn(t).then((function(l){try{return e=l,(function(){try{return u()}catch(s){return a(s)}})()}catch(s){return w(s)}}),w)}catch(l){return w(l)}}),w)}catch(t){w(t)}}catch(t){return a(t)}};try{if(Be()||[fe.DESKTOP_SAFARI,fe.MOBILE_SAFARI].includes(Se()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(m).then((function(g){try{return e=g,u()}catch{return d()}}),d)}catch{d()}}))}function Ke(m,q,A,a,e=1){return new Promise((function(n,u){let d;if(q==="image/png"){let w,t,o;return w=m.getContext("2d"),{data:t}=w.getImageData(0,0,m.width,m.height),o=ve.encode([t.buffer],m.width,m.height,4096*e),d=new Blob([o],{type:q}),d.name=A,d.lastModified=a,g.call(this)}{let w=function(){return g.call(this)};if(q==="image/bmp")return new Promise((t=>mn.toBlob(m,t))).then((function(t){try{return d=t,d.name=A,d.lastModified=a,w.call(this)}catch(o){return u(o)}}).bind(this),u);{let t=function(){return w.call(this)};if(typeof OffscreenCanvas=="function"&&m instanceof OffscreenCanvas)return m.convertToBlob({type:q,quality:e}).then((function(o){try{return d=o,d.name=A,d.lastModified=a,t.call(this)}catch(l){return u(l)}}).bind(this),u);{let o;return o=m.toDataURL(q,e),ln(o,A,a).then((function(l){try{return d=l,t.call(this)}catch(s){return u(s)}}).bind(this),u)}}}function g(){return n(d)}}))}function ke(m){m.width=0,m.height=0}function Re(){return new Promise((function(m,q){let A,a,e,n;return Re.cachedResult!==void 0?m(Re.cachedResult):ln("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then((function(u){try{return A=u,Ge(A).then((function(d){try{return a=d[1],Ke(a,A.type,A.name,A.lastModified).then((function(g){try{return e=g,ke(a),Ge(e).then((function(w){try{return n=w[0],Re.cachedResult=n.width===1&&n.height===2,m(Re.cachedResult)}catch(t){return q(t)}}),q)}catch(w){return q(w)}}),q)}catch(g){return q(g)}}),q)}catch(d){return q(d)}}),q)}))}function xn(m){return new Promise(((q,A)=>{const a=new gn;a.onload=e=>{const n=new DataView(e.target.result);if(n.getUint16(0,!1)!=65496)return q(-2);const u=n.byteLength;let d=2;for(;d<u;){if(n.getUint16(d+2,!1)<=8)return q(-1);const g=n.getUint16(d,!1);if(d+=2,g==65505){if(n.getUint32(d+=2,!1)!=1165519206)return q(-1);const w=n.getUint16(d+=6,!1)==18761;d+=n.getUint32(d+4,w);const t=n.getUint16(d,w);d+=2;for(let o=0;o<t;o++)if(n.getUint16(d+12*o,w)==274)return q(n.getUint16(d+12*o+8,w))}else{if((65280&g)!=65280)break;d+=n.getUint16(d,!1)}}return q(-1)},a.onerror=e=>A(e),a.readAsArrayBuffer(m)}))}function _n(m,q){const{width:A}=m,{height:a}=m,{maxWidthOrHeight:e}=q;let n,u=m;return isFinite(e)&&(A>e||a>e)&&([u,n]=Ze(A,a),A>a?(u.width=e,u.height=a/A*e):(u.width=A/a*e,u.height=e),n.drawImage(m,0,0,u.width,u.height),ke(m)),u}function Un(m,q){const{width:A}=m,{height:a}=m,[e,n]=Ze(A,a);switch(q>4&&q<9?(e.width=a,e.height=A):(e.width=A,e.height=a),q){case 2:n.transform(-1,0,0,1,A,0);break;case 3:n.transform(-1,0,0,-1,A,a);break;case 4:n.transform(1,0,0,-1,0,a);break;case 5:n.transform(0,1,1,0,0,0);break;case 6:n.transform(0,1,-1,0,a,0);break;case 7:n.transform(0,-1,-1,0,a,A);break;case 8:n.transform(0,-1,1,0,0,A)}return n.drawImage(m,0,0,A,a),ke(m),e}function pn(m,q,A=0){return new Promise((function(a,e){let n,u,d,g,w,t,o,l,s,h,U,E,y,z,P,$,R,v,M,f;function c(_=5){if(q.signal&&q.signal.aborted)throw q.signal.reason;n+=_,q.onProgress(Math.min(n,100))}function k(_){if(q.signal&&q.signal.aborted)throw q.signal.reason;n=Math.min(Math.max(_,n),100),q.onProgress(n)}return n=A,u=q.maxIteration||10,d=1024*q.maxSizeMB*1024,c(),Ge(m,q).then((function(_){try{return[,g]=_,c(),w=_n(g,q),c(),new Promise((function(x,F){var p;if(!(p=q.exifOrientation))return xn(m).then((function(r){try{return p=r,b.call(this)}catch(i){return F(i)}}).bind(this),F);function b(){return x(p)}return b.call(this)})).then((function(x){try{return t=x,c(),Re().then((function(F){try{return o=F?w:Un(w,t),c(),l=q.initialQuality||1,s=q.fileType||m.type,Ke(o,s,m.name,m.lastModified,l).then((function(p){try{{let r=function(){if(u--&&(P>d||P>y)){let O,C;return O=f?.95*M.width:M.width,C=f?.95*M.height:M.height,[R,v]=Ze(O,C),v.drawImage(M,0,0,O,C),l*=s==="image/png"?.85:.95,Ke(R,s,m.name,m.lastModified,l).then((function(T){try{return $=T,ke(M),M=R,P=$.size,k(Math.min(99,Math.floor((z-P)/(z-d)*100))),r}catch(L){return e(L)}}),e)}return[1]},i=function(){return ke(M),ke(R),ke(w),ke(o),ke(g),k(100),a($)};if(h=p,c(),U=h.size>d,E=h.size>m.size,!U&&!E)return k(100),a(h);var b;return y=m.size,z=h.size,P=z,M=o,f=!q.alwaysKeepResolution&&U,(b=(function(O){for(;O;){if(O.then)return void O.then(b,e);try{if(O.pop){if(O.length)return O.pop()?i.call(this):O;O=r}else O=O.call(this)}catch(C){return e(C)}}}).bind(this))(r)}}catch(r){return e(r)}}).bind(this),e)}catch(p){return e(p)}}).bind(this),e)}catch(F){return e(F)}}).bind(this),e)}catch(x){return e(x)}}).bind(this),e)}))}const it=`
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
`;let nn;function at(m,q){return new Promise(((A,a)=>{nn||(nn=(function(u){const d=[];return d.push(u),URL.createObjectURL(new Blob(d))})(it));const e=new Worker(nn);e.addEventListener("message",(function(u){if(q.signal&&q.signal.aborted)e.terminate();else if(u.data.progress===void 0){if(u.data.error)return a(new Error(u.data.error)),void e.terminate();A(u.data.file),e.terminate()}else q.onProgress(u.data.progress)})),e.addEventListener("error",a),q.signal&&q.signal.addEventListener("abort",(()=>{a(q.signal.reason),e.terminate()})),e.postMessage({file:m,imageCompressionLibUrl:q.libURL,options:{...q,onProgress:void 0,signal:void 0}})}))}function se(m,q){return new Promise((function(A,a){let e,n,u,d,g,w;if(e={...q},u=0,{onProgress:d}=e,e.maxSizeMB=e.maxSizeMB||Number.POSITIVE_INFINITY,g=typeof e.useWebWorker!="boolean"||e.useWebWorker,delete e.useWebWorker,e.onProgress=s=>{u=s,typeof d=="function"&&d(u)},!(m instanceof Blob||m instanceof rt))return a(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(m.type))return a(new Error("The file given is not an image"));if(w=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!g||typeof Worker!="function"||w)return pn(m,e).then((function(s){try{return n=s,l.call(this)}catch(h){return a(h)}}).bind(this),a);var t=(function(){try{return l.call(this)}catch(s){return a(s)}}).bind(this),o=function(s){try{return pn(m,e).then((function(h){try{return n=h,t()}catch(U){return a(U)}}),a)}catch(h){return a(h)}};try{return e.libURL=e.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",at(m,e).then((function(s){try{return n=s,t()}catch{return o()}}),o)}catch{o()}function l(){try{n.name=m.name,n.lastModified=m.lastModified}catch{}try{e.preserveExif&&m.type==="image/jpeg"&&(!e.fileType||e.fileType&&e.fileType===m.type)&&(n=bn(m,n))}catch{}return A(n)}}))}se.getDataUrlFromFile=wn,se.getFilefromDataUrl=ln,se.loadImage=kn,se.drawImageInCanvas=An,se.drawFileInCanvas=Ge,se.canvasToFile=Ke,se.getExifOrientation=xn,se.handleMaxWidthOrHeight=_n,se.followExifOrientation=Un,se.cleanupCanvasMemory=ke,se.isAutoOrientationInBrowser=Re,se.approximateBelowMaximumCanvasSizeOfBrowser=yn,se.copyExifWithoutOrientation=bn,se.getBrowserName=Se,se.version="2.0.2";const st={key:0,class:"section has-text-centered"},dt={class:"container p-5"},ct={class:"level"},ft={class:"buttons"},ut=["disabled"],qt=["disabled"],pt={class:"columns"},ht={class:"column is-three-fifths"},bt={class:"field"},mt={class:"control"},vt={key:0,class:"help is-danger"},gt={class:"field"},wt={class:"select is-fullwidth"},kt=["disabled"],yt={value:"",disabled:""},At=["value"],xt={key:0,class:"help is-danger"},_t={class:"column"},Ut={class:"field"},Ft={class:"control"},Ct={key:0,class:"help is-danger"},Et={class:"field"},$t={class:"control"},It={class:"checkbox has-text-weight-bold",for:"isOpen"},St={class:"columns"},Mt={class:"column"},Ot={style:{border:"1px solid #dbdbdb","border-radius":"4px"}},Pt={class:"column is-12"},Rt={class:"file has-name is-fullwidth"},Tt={class:"file-label"},zt={class:"columns is-multiline mt-3"},Nt={class:"card p-1"},Vt={class:"card-image"},Ht={class:"image is-1by1"},Lt=["src"],Dt={class:"card-footer"},jt=["onClick"],Bt={class:""},Qt={class:"columns is-vcentered"},Wt={class:"column"},Gt={class:"field is-grouped is-grouped-multiline"},Kt={class:"checkbox tag is-light"},Zt=["value"],Xt={class:"column is-5"},Yt={class:"field has-addons"},Jt={class:"control has-icons-left is-expanded"},el={class:"columns is-multiline"},nl={class:"columns is-multiline"},tl={class:"card"},ll={class:"card-image"},ol={class:"image is-4by3"},rl=["src"],il={class:"card-content"},al={class:"media-content"},sl={class:"tags"},dl={class:"tag is-info"},cl={class:"tag is-info is-light"},fl={class:"is-5"},ul={class:"has-text-danger has-text-weight-bold"},ql={class:"content mt-3"},pl={class:"buttons"},hl=["onClick"],bl=["onClick"],ml={__name:"AdminProductView",setup(m){const q=Vn(),A=Dn(),{productTypes:a,isLoading:e}=sn(q),{products:n,pisLoading:u}=sn(A),d=me(!1),g=me(!1),w=me({name:"",price:0,isOpen:!0,typeId:"",description:"",imageUrl:[]}),t=me({name:"",price:0,isOpen:!0,typeId:"",description:"",imageUrl:[]}),o=me(!1),l=me(null),s=me([]),h=me([]),U=me(""),E=me([]),y=me([]),z=()=>{n.value&&(y.value=n.value.filter(p=>{const r=(p.name||"").toLowerCase().includes(U.value.toLowerCase()),i=E.value.includes(p.typeId);return r&&i}))};dn(n,()=>{z()},{deep:!0,immediate:!0});const P=p=>{const b=a.value.find(r=>r.id===p);return b?b.name:"未分類"},$=[];Rn(()=>{$.push(q.fetchProductTypes()),$.push(A.fetchProducts());const p=dn(a,b=>{b.length>0&&(E.value=b.map(r=>r.id),z(),p())})}),Tn(()=>{$.forEach(p=>p&&p())});const R=p=>{o.value=!0,l.value=p.id,t.value={...p},h.value=p.imageUrls?[...p.imageUrls]:[],s.value=[],g.value=!0},v=async()=>{if(x()){d.value=!0;try{let p=[];s.value.length>0&&(p=await A.uploadMultipleImages(s.value));const b={...t.value,imageUrls:o.value?[...t.value.imageUrls||[],...p]:p};o.value?await A.updateProduct(l.value,b):await A.addProduct(b),alert("儲存成功！"),f(),s.value=[],h.value=[]}catch(p){alert("儲存發生錯誤，請查看 Console",p)}finally{d.value=!1}}},M=async(p,b)=>{if(confirm(`確定要刪除「${b}」這個產品？此動作無法復原。`)){console.log("Store delete function:",A.deleteProduct);try{await A.deleteProduct(p),alert("已成功刪除")}catch(r){alert("刪除失敗，請稍後再試",r)}}},f=()=>{g.value=!1,o.value=!1,l.value=null,t.value={name:"",price:0,isOpen:!0,imageUrls:[]},h.value=[],s.value=[],w.value={name:""}},c=()=>{f()},k=async p=>{const b=Array.from(p.target.files),r={maxSizeMB:.8,maxWidthOrHeight:1280,useWebWorker:!0,fileType:"image/jpeg"};for(const i of b)try{const O=await se(i,r);s.value.push(O),h.value.push(URL.createObjectURL(O))}catch(O){console.error("圖片壓縮失敗:",O)}p.target.value=""},_=p=>{const b=h.value[p];h.value.splice(p,1),b.startsWith("blob:")?s.value=s.value.filter(r=>URL.createObjectURL(r)!==b):t.value.imageUrls=t.value.imageUrls.filter(r=>r!==b)},x=()=>{w.value={name:"",typeId:"",price:""};let p=!0;(!t.value.name||t.value.name.trim()==="")&&(w.value.name="請輸入產品名稱",p=!1),t.value.typeId||(w.value.typeId="請選擇產品類別",p=!1);const b=t.value.price;return b==null||b===""?(w.value.price="請輸入價格",p=!1):b<=0?(w.value.price="價格必須大於 0",p=!1):Number.isInteger(Number(b))||(w.value.price="價格必須是整數",p=!1),p},F=()=>{U.value="",E.value=a.value.map(p=>p.id),z()};return(p,b)=>(ie(),ae(Oe,null,[Ie(u)?(ie(),ae("div",st,[...b[9]||(b[9]=[I("button",{class:"button is-loading is-large is-white"},null,-1)])])):Le("",!0),I("div",dt,[I("div",ct,[b[10]||(b[10]=I("h1",{class:"subtitle has-text-weight-bold"},"產品維護列表",-1)),I("button",{class:"button is-info",onClick:b[0]||(b[0]=r=>g.value=!0)},"新增產品")]),cn(Hn,{modelValue:g.value,"onUpdate:modelValue":b[6]||(b[6]=r=>g.value=r)},{header:Je(()=>[I("span",{class:De([o.value?"tag is-large has-text-success":"tag is-large has-text-info","has-text-weight-bold"])},he(o.value?"修改產品":"建立產品"),3)]),footer:Je(()=>[I("div",ft,[I("button",{class:De(["button is-success",{"is-loading":d.value}]),disabled:d.value,onClick:v}," 確認 ",10,ut),I("button",{class:"button is-danger",disabled:d.value,onClick:c},"取消",8,qt)])]),default:Je(()=>[I("div",pt,[I("div",ht,[I("div",bt,[b[11]||(b[11]=I("label",{for:"name",class:"label"},"產品名稱",-1)),I("div",mt,[Pe(I("input",{"onUpdate:modelValue":b[1]||(b[1]=r=>t.value.name=r),id:"name",class:"input",type:"text",placeholder:"請輸入名稱"},null,512),[[en,t.value.name]])]),w.value.name?(ie(),ae("span",vt,he(w.value.name),1)):Le("",!0)]),I("div",gt,[b[12]||(b[12]=I("label",{class:"label"},"產品類別",-1)),I("div",{class:De(["control",{"is-loading":Ie(e)}])},[I("div",wt,[Pe(I("select",{"onUpdate:modelValue":b[2]||(b[2]=r=>t.value.typeId=r),disabled:Ie(e)},[I("option",yt,he(Ie(e)?"載入類別中...":"請選擇產品類別"),1),(ie(!0),ae(Oe,null,Ne(Ie(a),r=>(ie(),ae("option",{key:r.id,value:r.id},he(r.name),9,At))),128))],8,kt),[[zn,t.value.typeId]])])],2),w.value.typeId?(ie(),ae("p",xt,he(w.value.typeId),1)):Le("",!0)])]),I("div",_t,[I("div",Ut,[b[13]||(b[13]=I("label",{for:"price",class:"label"},"價格",-1)),I("div",Ft,[Pe(I("input",{"onUpdate:modelValue":b[3]||(b[3]=r=>t.value.price=r),id:"price",class:"input",type:"number",placeholder:"請輸入價格",min:"0",step:"1"},null,512),[[en,t.value.price]])]),w.value.price?(ie(),ae("span",Ct,he(w.value.price),1)):Le("",!0)]),I("div",Et,[I("div",$t,[I("label",It,[Pe(I("input",{id:"isOpen","onUpdate:modelValue":b[4]||(b[4]=r=>t.value.isOpen=r),type:"checkbox"},null,512),[[fn,t.value.isOpen]]),b[14]||(b[14]=je(" 啟用 ",-1))])])])])]),I("div",St,[I("div",Mt,[I("div",Ot,[cn(Ie(hn),{modelValue:t.value.description,"onUpdate:modelValue":b[5]||(b[5]=r=>t.value.description=r),editorStyle:"height: 200px"},null,8,["modelValue"])])])]),b[18]||(b[18]=I("hr",null,null,-1)),I("div",Pt,[b[17]||(b[17]=I("label",{class:"label"},"作品圖片 (可多張)",-1)),I("div",Rt,[I("label",Tt,[I("input",{class:"file-input",type:"file",multiple:"",onChange:k,accept:"image/*",id:"imageInput"},null,32),b[15]||(b[15]=I("span",{class:"file-cta"},[I("span",{class:"file-icon"},[I("i",{class:"fas fa-upload"})]),I("span",{class:"file-label"},"選取圖片")],-1))])]),I("div",zt,[(ie(!0),ae(Oe,null,Ne(h.value,(r,i)=>(ie(),ae("div",{class:"column is-3-desktop is-4-tablet is-6-mobile",key:i},[I("div",Nt,[I("div",Vt,[I("figure",Ht,[I("img",{src:r,style:{"object-fit":"cover","border-radius":"4px"}},null,8,Lt)])]),I("footer",Dt,[I("a",{href:"#",class:"card-footer-item has-text-danger",onClick:Nn(O=>_(i),["prevent"])},[...b[16]||(b[16]=[I("span",{class:"icon"},[I("i",{class:"fas fa-trash"})],-1),je(" 刪除 ",-1)])],8,jt)])])]))),128))])])]),_:1},8,["modelValue"]),I("div",Bt,[I("div",Qt,[I("div",Wt,[b[19]||(b[19]=I("label",{class:"label"},"篩選類別",-1)),I("div",Gt,[(ie(!0),ae(Oe,null,Ne(Ie(a),r=>(ie(),ae("div",{class:"control",key:r.id},[I("label",Kt,[Pe(I("input",{type:"checkbox",value:r.id,"onUpdate:modelValue":b[7]||(b[7]=i=>E.value=i),class:"mr-2"},null,8,Zt),[[fn,E.value]]),je(" "+he(r.name),1)])]))),128))])]),I("div",Xt,[I("div",Yt,[I("div",Jt,[Pe(I("input",{"onUpdate:modelValue":b[8]||(b[8]=r=>U.value=r),class:"input",type:"text",placeholder:"關鍵字搜尋..."},null,512),[[en,U.value]]),b[20]||(b[20]=I("span",{class:"icon is-left"},[I("i",{class:"fas fa-search"})],-1))]),I("div",{class:"control"},[I("button",{class:"button is-info",onClick:z},"搜尋")]),I("div",{class:"control"},[I("button",{class:"button is-light",onClick:F},"清空")])])])])]),I("div",el,[(ie(!0),ae(Oe,null,Ne(y.value,r=>(ie(),ae("div",{class:"column is-12-mobile is-6-tablet is-4-desktop",key:r.id}))),128))]),b[22]||(b[22]=I("hr",null,null,-1)),I("div",nl,[(ie(!0),ae(Oe,null,Ne(y.value,r=>(ie(),ae("div",{class:"column is-12-mobile is-6-tablet is-4-desktop",key:r.id},[I("div",tl,[I("div",ll,[I("figure",ol,[I("img",{src:r.imageUrls?.length>0?r.imageUrls[0]:"https://bulma.io/assets/images/placeholders/1280x960.png",alt:"Product Image"},null,8,rl)])]),I("div",il,[I("div",al,[I("div",sl,[I("span",dl,"類別："+he(P(r.typeId)),1),I("span",{class:De(["tag",r.isOpen?"is-success":"is-danger"])},he(r.isOpen?"開啟":"停售"),3),I("span",cl,[b[21]||(b[21]=I("span",{class:"icon is-small mr-1"},[I("i",{class:"fas fa-images"})],-1)),je(" "+he(r.imageUrls?.length||0)+" 張作品圖 ",1)])]),I("p",fl,"作品："+he(r.name),1),I("p",ul,"價格：$"+he(r.price),1)]),I("div",ql,[I("div",pl,[I("button",{class:"button is-success is-light",onClick:i=>R(r)}," 編輯 ",8,hl),I("button",{class:"button is-danger is-light",onClick:i=>M(r.id,r.name)}," 刪除 ",8,bl)])])])])]))),128))])])],64))}},kl=Pn(ml,[["__scopeId","data-v-07865448"]]);export{kl as default};
