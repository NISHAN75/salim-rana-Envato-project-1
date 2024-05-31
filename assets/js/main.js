/*-----------------------------------------------------------------------------------

    Template Name: Example HTML Template
    Author: Theme_Pure
    Support: help.themepure.net
    Description: Example HTML Template
    Version: 1.0.0

-----------------------------------------------------------------------------------

/************ TABLE OF CONTENTS ***************

	-----------------
    01. THEME CSS
	-----------------
		1.1 Theme Default
		1.2 Common Classes
		1.3 Default Spacing

	-----------------
    02. COMPONENTS css
	-----------------
		2.1 Back to top
		2.2 Theme Settings
		2.3 Buttons
		2.4 Animations
		2.5 Preloader
		2.6 Background 
		2.7 Carousel
		2.8 Nice Select
		2.9 Pagination
		2.10 Offcanvas
		2.11 Breadcrumb
		2.12 Accordion
		2.13 Tab
		2.14 Modal
		2.15 Section Title
		2.16 Search
		2.17 Hotspot
		2.18 Ragne Slider
	-----------------
    03. HEADER CSS
	-----------------
		3.1 Header Style 1
		3.2 Header Style 2
		3.3 Header Style 3
		3.4 Header Style 5

    ---------------------------------
	04. MENU CSS
	---------------------------------
		4.1 Main menu css
		4.2 Meanmenu css
		4.3 Mobile css
		4.4 Category menu css

	---------------------------------
	05. BLOG CSS
	---------------------------------
		5.1 Postbox css
		5.2 Recent Post css
		5.3 Sidebar css
		5.4 Blog css
		5.5 Blog Grid css

	---------------------------------
	06. FOOTER CSS
	---------------------------------
		6.1 Footer Style 1
		6.2 Footer Style 2
		6.3 Footer Style 3
		6.4 Footer Style 4
		6.5 Footer Style 5

	---------------------------------
	07. PAGES CSS
	---------------------------------
		7.1 Slider css
		7.2 About css
		7.3 Feature css
		7.4 Subscribe css
		7.5 Instagram css
		7.6 Testimonial css
		7.7 Brand css
		7.8 CTA css
		7.9 Login css
		7.10 Contact css
		7.11 Error css
		7.12 Profile css

	---------------------------------
	08. ECOMMERCE CSS
	---------------------------------
		8.1 Ecommerce Common CSS
		8.2 Cartmini CSS
		8.3 Cart Modal CSS
		8.4 Category CSS
		8.5 Banner CSS
		8.6 Tooltip CSS
		8.7 Featured Product CSS
		8.8 Trending CSS
		8.9 Product Card CSS
		8.10 Product Card Style 2 CSS
		8.11 Product Card Style 3 CSS
		8.12 Product Card Style 4 CSS
		8.13 Product Card Style 5 CSS
		8.14 Product Details CSS
		8.15 Product Widget CSS
		8.16 Shop CSS
		8.17 Filter Offcanvas CSS
		8.18 Product Quantity CSS
		8.19 Cart CSS
		8.20 Order CSS
		8.21 Checkout CSS
		8.22 compare CSS
		8.23 Collection CSS
		8.24 Deal CSS
		8.25 Side Banner CSS
		8.26 Coupon CSS


**********************************************/
/*----------------------------------------*/
/*  1.1 Theme Default
/*----------------------------------------*/
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Federo&display=swap");
:root {
  --tp-theme-color: #0057fc;
  --tp-theme-color-2: #ffeb15;
  --tp-heading-color:#0a0e1a;
  --tp-body-color:#57595c;
  --tp-theme-nblue:#001c52;
  --tp-common-black: #0A0E1A;
  --tp-black: black;
  --tp-white: white;
  --tp-grey-color: #f6f6f6;
  --tp-grey-color-2: #f6f6f6;
  --tp-grey-color-3: #f6f6f6;
  --tp-grey-color-4: #f6f6f6;
}

:root {
  --tp-fonts-heading: "Federo", sans-serif;
  --tp-fonts-body: "DM Sans", sans-serif;
}

.tp-btn {
  font-size: 18px;
  font-family: var(--tp-font-heading);
  background: var(--tp-theme-color);
  padding: 16.5px 48px;
  border-radius: 5px;
  line-height: 1.5;
  display: inline-block;
  color: var(--tp-white);
}

.tp-btn-sec {
  font-size: 18px;
  font-family: var(--tp-font-heading);
  background: var(--tp-theme-color-2);
  padding: 16.5px 48px;
  border-radius: 5px;
  line-height: 1.5;
  display: inline-block;
}

.tp-btn-sec-lg {
  padding: 21.5px 48px;
}

.tp-section-title {
  font-size: 60px;
  line-height: 1.16;
}

.tp-section-title-white {
  color: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*---------------------------------
	typography css start 
---------------------------------*/
body {
  font-family: var(--tp-fonts-body);
  font-size: 14px;
  font-weight: normal;
  color: var(--tp-black);
  line-height: 1.8;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--tp-fonts-heading);
  color: var(--tp-theme-sec-color);
  margin-top: 0px;
  font-weight: 700;
  line-height: 1.2;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 38px;
}

h3 {
  font-size: 28px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 16px;
}

ul {
  margin: 0px;
  padding: 0px;
}

p {
  font-family: var(--tp-fonts-body);
  font-size: 17px;
  font-weight: 400;
  color: var(--tp-text-body);
  margin-bottom: 15px;
  line-height: 1.65;
}

a:not([href]):not([class]),
a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

a:focus,
.button:focus {
  text-decoration: none;
  outline: none;
}

a:focus,
a:hover {
  color: inherit;
  text-decoration: none;
}

a,
button {
  color: inherit;
  outline: none;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.uppercase {
  text-transform: uppercase;
}

.capitalize {
  text-transform: capitalize;
}

input[type=text],
input[type=email],
input[type=tel],
input[type=number],
input[type=password],
input[type=url],
textarea {
  outline: none;
  background-color: transparent;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 14px;
  color: var(--tp-common-black);
  border: 0;
  text-transform: uppercase;
  font-weight: 500;
}

input[type=text]::-webkit-input-placeholder,
input[type=email]::-webkit-input-placeholder,
input[type=tel]::-webkit-input-placeholder,
input[type=number]::-webkit-input-placeholder,
input[type=password]::-webkit-input-placeholder,
input[type=url]::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #95999d;
}

input[type=text]:-moz-placeholder,
input[type=email]:-moz-placeholder,
input[type=tel]:-moz-placeholder,
input[type=number]:-moz-placeholder,
input[type=password]:-moz-placeholder,
input[type=url]:-moz-placeholder,
textarea:-moz-placeholder {
  color: #95999d;
}

input[type=text]::-moz-placeholder,
input[type=email]::-moz-placeholder,
input[type=tel]::-moz-placeholder,
input[type=number]::-moz-placeholder,
input[type=password]::-moz-placeholder,
input[type=url]::-moz-placeholder,
textarea::-moz-placeholder {
  color: #95999d;
}

input[type=text]::-ms-input-placeholder,
input[type=email]::-ms-input-placeholder,
input[type=tel]::-ms-input-placeholder,
input[type=number]::-ms-input-placeholder,
input[type=password]::-ms-input-placeholder,
input[type=url]::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: #95999d;
}

input[type=text]:focus,
input[type=email]:focus,
input[type=tel]:focus,
input[type=number]:focus,
input[type=password]:focus,
input[type=url]:focus,
textarea:focus {
  border-color: var(--tp-common-black);
}

input[type=text]:focus::placeholder,
input[type=email]:focus::placeholder,
input[type=tel]:focus::placeholder,
input[type=number]:focus::placeholder,
input[type=password]:focus::placeholder,
input[type=url]:focus::placeholder,
textarea:focus::placeholder {
  opacity: 0;
}

textarea {
  line-height: 1.4;
  padding-top: 17px;
  padding-bottom: 17px;
}

*::-moz-selection {
  background: #333;
  color: #fff;
  text-shadow: none;
}

*::selection {
  background: var(--tp-common-black);
  color: var(--tp-common-white);
  text-shadow: none;
}

*::-moz-placeholder {
  color: var(--tp-common-black);
  font-size: 14px;
  opacity: 1;
}

*::placeholder {
  color: var(--tp-common-black);
  font-size: 14px;
  opacity: 1;
}

.w-img img {
  width: 100%;
}

.m-img img {
  max-width: 100%;
}

.fix {
  overflow: hidden;
}

.clear {
  clear: both;
}

.z-index-1 {
  z-index: 1;
}

.z-index-2 {
  z-index: 2;
}

.z-index-11 {
  z-index: 11;
}

.overflow-y-visible {
  overflow-x: hidden;
  overflow-y: visible;
}

.overflow-x-visible {
  overflow-x: visible;
  overflow-y: hidden;
}

.p-relative {
  position: relative;
}

.p-absolute {
  position: absolute;
}

.tp-black-bg {
  background-color: var(--tp-common-black);
}

.tp-blue-bg {
  background-color: var(--tp-theme-color);
}

.bg-fix {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

img {
  max-width: 100%;
  height: auto;
}

/*--
    - Margin & Padding
-----------------------------------------*/
/*-- Margin Top --*/
.mt-1 {
  margin-top: 1px;
}

.mt-2 {
  margin-top: 2px;
}

.mt-3 {
  margin-top: 3px;
}

.mt-4 {
  margin-top: 4px;
}

.mt-5 {
  margin-top: 5px;
}

.mt-6 {
  margin-top: 6px;
}

.mt-7 {
  margin-top: 7px;
}

.mt-8 {
  margin-top: 8px;
}

.mt-9 {
  margin-top: 9px;
}

.mt-10 {
  margin-top: 10px;
}

.mt-11 {
  margin-top: 11px;
}

.mt-12 {
  margin-top: 12px;
}

.mt-13 {
  margin-top: 13px;
}

.mt-14 {
  margin-top: 14px;
}

.mt-15 {
  margin-top: 15px;
}

.mt-16 {
  margin-top: 16px;
}

.mt-17 {
  margin-top: 17px;
}

.mt-18 {
  margin-top: 18px;
}

.mt-19 {
  margin-top: 19px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-21 {
  margin-top: 21px;
}

.mt-22 {
  margin-top: 22px;
}

.mt-23 {
  margin-top: 23px;
}

.mt-24 {
  margin-top: 24px;
}

.mt-25 {
  margin-top: 25px;
}

.mt-26 {
  margin-top: 26px;
}

.mt-27 {
  margin-top: 27px;
}

.mt-28 {
  margin-top: 28px;
}

.mt-29 {
  margin-top: 29px;
}

.mt-30 {
  margin-top: 30px;
}

.mt-31 {
  margin-top: 31px;
}

.mt-32 {
  margin-top: 32px;
}

.mt-33 {
  margin-top: 33px;
}

.mt-34 {
  margin-top: 34px;
}

.mt-35 {
  margin-top: 35px;
}

.mt-36 {
  margin-top: 36px;
}

.mt-37 {
  margin-top: 37px;
}

.mt-38 {
  margin-top: 38px;
}

.mt-39 {
  margin-top: 39px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-41 {
  margin-top: 41px;
}

.mt-42 {
  margin-top: 42px;
}

.mt-43 {
  margin-top: 43px;
}

.mt-44 {
  margin-top: 44px;
}

.mt-45 {
  margin-top: 45px;
}

.mt-46 {
  margin-top: 46px;
}

.mt-47 {
  margin-top: 47px;
}

.mt-48 {
  margin-top: 48px;
}

.mt-49 {
  margin-top: 49px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-51 {
  margin-top: 51px;
}

.mt-52 {
  margin-top: 52px;
}

.mt-53 {
  margin-top: 53px;
}

.mt-54 {
  margin-top: 54px;
}

.mt-55 {
  margin-top: 55px;
}

.mt-56 {
  margin-top: 56px;
}

.mt-57 {
  margin-top: 57px;
}

.mt-58 {
  margin-top: 58px;
}

.mt-59 {
  margin-top: 59px;
}

.mt-60 {
  margin-top: 60px;
}

.mt-61 {
  margin-top: 61px;
}

.mt-62 {
  margin-top: 62px;
}

.mt-63 {
  margin-top: 63px;
}

.mt-64 {
  margin-top: 64px;
}

.mt-65 {
  margin-top: 65px;
}

.mt-66 {
  margin-top: 66px;
}

.mt-67 {
  margin-top: 67px;
}

.mt-68 {
  margin-top: 68px;
}

.mt-69 {
  margin-top: 69px;
}

.mt-70 {
  margin-top: 70px;
}

.mt-71 {
  margin-top: 71px;
}

.mt-72 {
  margin-top: 72px;
}

.mt-73 {
  margin-top: 73px;
}

.mt-74 {
  margin-top: 74px;
}

.mt-75 {
  margin-top: 75px;
}

.mt-76 {
  margin-top: 76px;
}

.mt-77 {
  margin-top: 77px;
}

.mt-78 {
  margin-top: 78px;
}

.mt-79 {
  margin-top: 79px;
}

.mt-80 {
  margin-top: 80px;
}

.mt-81 {
  margin-top: 81px;
}

.mt-82 {
  margin-top: 82px;
}

.mt-83 {
  margin-top: 83px;
}

.mt-84 {
  margin-top: 84px;
}

.mt-85 {
  margin-top: 85px;
}

.mt-86 {
  margin-top: 86px;
}

.mt-87 {
  margin-top: 87px;
}

.mt-88 {
  margin-top: 88px;
}

.mt-89 {
  margin-top: 89px;
}

.mt-90 {
  margin-top: 90px;
}

.mt-91 {
  margin-top: 91px;
}

.mt-92 {
  margin-top: 92px;
}

.mt-93 {
  margin-top: 93px;
}

.mt-94 {
  margin-top: 94px;
}

.mt-95 {
  margin-top: 95px;
}

.mt-96 {
  margin-top: 96px;
}

.mt-97 {
  margin-top: 97px;
}

.mt-98 {
  margin-top: 98px;
}

.mt-99 {
  margin-top: 99px;
}

.mt-100 {
  margin-top: 100px;
}

/*-- Margin Bottom --*/
.mb-1 {
  margin-bottom: 1px;
}

.mb-2 {
  margin-bottom: 2px;
}

.mb-3 {
  margin-bottom: 3px;
}

.mb-4 {
  margin-bottom: 4px;
}

.mb-5 {
  margin-bottom: 5px;
}

.mb-6 {
  margin-bottom: 6px;
}

.mb-7 {
  margin-bottom: 7px;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-9 {
  margin-bottom: 9px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-11 {
  margin-bottom: 11px;
}

.mb-12 {
  margin-bottom: 12px;
}

.mb-13 {
  margin-bottom: 13px;
}

.mb-14 {
  margin-bottom: 14px;
}

.mb-15 {
  margin-bottom: 15px;
}

.mb-16 {
  margin-bottom: 16px;
}

.mb-17 {
  margin-bottom: 17px;
}

.mb-18 {
  margin-bottom: 18px;
}

.mb-19 {
  margin-bottom: 19px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-21 {
  margin-bottom: 21px;
}

.mb-22 {
  margin-bottom: 22px;
}

.mb-23 {
  margin-bottom: 23px;
}

.mb-24 {
  margin-bottom: 24px;
}

.mb-25 {
  margin-bottom: 25px;
}

.mb-26 {
  margin-bottom: 26px;
}

.mb-27 {
  margin-bottom: 27px;
}

.mb-28 {
  margin-bottom: 28px;
}

.mb-29 {
  margin-bottom: 29px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-31 {
  margin-bottom: 31px;
}

.mb-32 {
  margin-bottom: 32px;
}

.mb-33 {
  margin-bottom: 33px;
}

.mb-34 {
  margin-bottom: 34px;
}

.mb-35 {
  margin-bottom: 35px;
}

.mb-36 {
  margin-bottom: 36px;
}

.mb-37 {
  margin-bottom: 37px;
}

.mb-38 {
  margin-bottom: 38px;
}

.mb-39 {
  margin-bottom: 39px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-41 {
  margin-bottom: 41px;
}

.mb-42 {
  margin-bottom: 42px;
}

.mb-43 {
  margin-bottom: 43px;
}

.mb-44 {
  margin-bottom: 44px;
}

.mb-45 {
  margin-bottom: 45px;
}

.mb-46 {
  margin-bottom: 46px;
}

.mb-47 {
  margin-bottom: 47px;
}

.mb-48 {
  margin-bottom: 48px;
}

.mb-49 {
  margin-bottom: 49px;
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-51 {
  margin-bottom: 51px;
}

.mb-52 {
  margin-bottom: 52px;
}

.mb-53 {
  margin-bottom: 53px;
}

.mb-54 {
  margin-bottom: 54px;
}

.mb-55 {
  margin-bottom: 55px;
}

.mb-56 {
  margin-bottom: 56px;
}

.mb-57 {
  margin-bottom: 57px;
}

.mb-58 {
  margin-bottom: 58px;
}

.mb-59 {
  margin-bottom: 59px;
}

.mb-60 {
  margin-bottom: 60px;
}

.mb-61 {
  margin-bottom: 61px;
}

.mb-62 {
  margin-bottom: 62px;
}

.mb-63 {
  margin-bottom: 63px;
}

.mb-64 {
  margin-bottom: 64px;
}

.mb-65 {
  margin-bottom: 65px;
}

.mb-66 {
  margin-bottom: 66px;
}

.mb-67 {
  margin-bottom: 67px;
}

.mb-68 {
  margin-bottom: 68px;
}

.mb-69 {
  margin-bottom: 69px;
}

.mb-70 {
  margin-bottom: 70px;
}

.mb-71 {
  margin-bottom: 71px;
}

.mb-72 {
  margin-bottom: 72px;
}

.mb-73 {
  margin-bottom: 73px;
}

.mb-74 {
  margin-bottom: 74px;
}

.mb-75 {
  margin-bottom: 75px;
}

.mb-76 {
  margin-bottom: 76px;
}

.mb-77 {
  margin-bottom: 77px;
}

.mb-78 {
  margin-bottom: 78px;
}

.mb-79 {
  margin-bottom: 79px;
}

.mb-80 {
  margin-bottom: 80px;
}

.mb-81 {
  margin-bottom: 81px;
}

.mb-82 {
  margin-bottom: 82px;
}

.mb-83 {
  margin-bottom: 83px;
}

.mb-84 {
  margin-bottom: 84px;
}

.mb-85 {
  margin-bottom: 85px;
}

.mb-86 {
  margin-bottom: 86px;
}

.mb-87 {
  margin-bottom: 87px;
}

.mb-88 {
  margin-bottom: 88px;
}

.mb-89 {
  margin-bottom: 89px;
}

.mb-90 {
  margin-bottom: 90px;
}

.mb-91 {
  margin-bottom: 91px;
}

.mb-92 {
  margin-bottom: 92px;
}

.mb-93 {
  margin-bottom: 93px;
}

.mb-94 {
  margin-bottom: 94px;
}

.mb-95 {
  margin-bottom: 95px;
}

.mb-96 {
  margin-bottom: 96px;
}

.mb-97 {
  margin-bottom: 97px;
}

.mb-98 {
  margin-bottom: 98px;
}

.mb-99 {
  margin-bottom: 99px;
}

.mb-100 {
  margin-bottom: 100px;
}

/*-- Margin Left --*/
.ml-1 {
  margin-left: 1px;
}

.ml-2 {
  margin-left: 2px;
}

.ml-3 {
  margin-left: 3px;
}

.ml-4 {
  margin-left: 4px;
}

.ml-5 {
  margin-left: 5px;
}

.ml-6 {
  margin-left: 6px;
}

.ml-7 {
  margin-left: 7px;
}

.ml-8 {
  margin-left: 8px;
}

.ml-9 {
  margin-left: 9px;
}

.ml-10 {
  margin-left: 10px;
}

.ml-11 {
  margin-left: 11px;
}

.ml-12 {
  margin-left: 12px;
}

.ml-13 {
  margin-left: 13px;
}

.ml-14 {
  margin-left: 14px;
}

.ml-15 {
  margin-left: 15px;
}

.ml-16 {
  margin-left: 16px;
}

.ml-17 {
  margin-left: 17px;
}

.ml-18 {
  margin-left: 18px;
}

.ml-19 {
  margin-left: 19px;
}

.ml-20 {
  margin-left: 20px;
}

.ml-21 {
  margin-left: 21px;
}

.ml-22 {
  margin-left: 22px;
}

.ml-23 {
  margin-left: 23px;
}

.ml-24 {
  margin-left: 24px;
}

.ml-25 {
  margin-left: 25px;
}

.ml-26 {
  margin-left: 26px;
}

.ml-27 {
  margin-left: 27px;
}

.ml-28 {
  margin-left: 28px;
}

.ml-29 {
  margin-left: 29px;
}

.ml-30 {
  margin-left: 30px;
}

.ml-31 {
  margin-left: 31px;
}

.ml-32 {
  margin-left: 32px;
}

.ml-33 {
  margin-left: 33px;
}

.ml-34 {
  margin-left: 34px;
}

.ml-35 {
  margin-left: 35px;
}

.ml-36 {
  margin-left: 36px;
}

.ml-37 {
  margin-left: 37px;
}

.ml-38 {
  margin-left: 38px;
}

.ml-39 {
  margin-left: 39px;
}

.ml-40 {
  margin-left: 40px;
}

.ml-41 {
  margin-left: 41px;
}

.ml-42 {
  margin-left: 42px;
}

.ml-43 {
  margin-left: 43px;
}

.ml-44 {
  margin-left: 44px;
}

.ml-45 {
  margin-left: 45px;
}

.ml-46 {
  margin-left: 46px;
}

.ml-47 {
  margin-left: 47px;
}

.ml-48 {
  margin-left: 48px;
}

.ml-49 {
  margin-left: 49px;
}

.ml-50 {
  margin-left: 50px;
}

.ml-51 {
  margin-left: 51px;
}

.ml-52 {
  margin-left: 52px;
}

.ml-53 {
  margin-left: 53px;
}

.ml-54 {
  margin-left: 54px;
}

.ml-55 {
  margin-left: 55px;
}

.ml-56 {
  margin-left: 56px;
}

.ml-57 {
  margin-left: 57px;
}

.ml-58 {
  margin-left: 58px;
}

.ml-59 {
  margin-left: 59px;
}

.ml-60 {
  margin-left: 60px;
}

.ml-61 {
  margin-left: 61px;
}

.ml-62 {
  margin-left: 62px;
}

.ml-63 {
  margin-left: 63px;
}

.ml-64 {
  margin-left: 64px;
}

.ml-65 {
  margin-left: 65px;
}

.ml-66 {
  margin-left: 66px;
}

.ml-67 {
  margin-left: 67px;
}

.ml-68 {
  margin-left: 68px;
}

.ml-69 {
  margin-left: 69px;
}

.ml-70 {
  margin-left: 70px;
}

.ml-71 {
  margin-left: 71px;
}

.ml-72 {
  margin-left: 72px;
}

.ml-73 {
  margin-left: 73px;
}

.ml-74 {
  margin-left: 74px;
}

.ml-75 {
  margin-left: 75px;
}

.ml-76 {
  margin-left: 76px;
}

.ml-77 {
  margin-left: 77px;
}

.ml-78 {
  margin-left: 78px;
}

.ml-79 {
  margin-left: 79px;
}

.ml-80 {
  margin-left: 80px;
}

.ml-81 {
  margin-left: 81px;
}

.ml-82 {
  margin-left: 82px;
}

.ml-83 {
  margin-left: 83px;
}

.ml-84 {
  margin-left: 84px;
}

.ml-85 {
  margin-left: 85px;
}

.ml-86 {
  margin-left: 86px;
}

.ml-87 {
  margin-left: 87px;
}

.ml-88 {
  margin-left: 88px;
}

.ml-89 {
  margin-left: 89px;
}

.ml-90 {
  margin-left: 90px;
}

.ml-91 {
  margin-left: 91px;
}

.ml-92 {
  margin-left: 92px;
}

.ml-93 {
  margin-left: 93px;
}

.ml-94 {
  margin-left: 94px;
}

.ml-95 {
  margin-left: 95px;
}

.ml-96 {
  margin-left: 96px;
}

.ml-97 {
  margin-left: 97px;
}

.ml-98 {
  margin-left: 98px;
}

.ml-99 {
  margin-left: 99px;
}

.ml-100 {
  margin-left: 100px;
}

/*-- Margin Right --*/
.mr-1 {
  margin-right: 1px;
}

.mr-2 {
  margin-right: 2px;
}

.mr-3 {
  margin-right: 3px;
}

.mr-4 {
  margin-right: 4px;
}

.mr-5 {
  margin-right: 5px;
}

.mr-6 {
  margin-right: 6px;
}

.mr-7 {
  margin-right: 7px;
}

.mr-8 {
  margin-right: 8px;
}

.mr-9 {
  margin-right: 9px;
}

.mr-10 {
  margin-right: 10px;
}

.mr-11 {
  margin-right: 11px;
}

.mr-12 {
  margin-right: 12px;
}

.mr-13 {
  margin-right: 13px;
}

.mr-14 {
  margin-right: 14px;
}

.mr-15 {
  margin-right: 15px;
}

.mr-16 {
  margin-right: 16px;
}

.mr-17 {
  margin-right: 17px;
}

.mr-18 {
  margin-right: 18px;
}

.mr-19 {
  margin-right: 19px;
}

.mr-20 {
  margin-right: 20px;
}

.mr-21 {
  margin-right: 21px;
}

.mr-22 {
  margin-right: 22px;
}

.mr-23 {
  margin-right: 23px;
}

.mr-24 {
  margin-right: 24px;
}

.mr-25 {
  margin-right: 25px;
}

.mr-26 {
  margin-right: 26px;
}

.mr-27 {
  margin-right: 27px;
}

.mr-28 {
  margin-right: 28px;
}

.mr-29 {
  margin-right: 29px;
}

.mr-30 {
  margin-right: 30px;
}

.mr-31 {
  margin-right: 31px;
}

.mr-32 {
  margin-right: 32px;
}

.mr-33 {
  margin-right: 33px;
}

.mr-34 {
  margin-right: 34px;
}

.mr-35 {
  margin-right: 35px;
}

.mr-36 {
  margin-right: 36px;
}

.mr-37 {
  margin-right: 37px;
}

.mr-38 {
  margin-right: 38px;
}

.mr-39 {
  margin-right: 39px;
}

.mr-40 {
  margin-right: 40px;
}

.mr-41 {
  margin-right: 41px;
}

.mr-42 {
  margin-right: 42px;
}

.mr-43 {
  margin-right: 43px;
}

.mr-44 {
  margin-right: 44px;
}

.mr-45 {
  margin-right: 45px;
}

.mr-46 {
  margin-right: 46px;
}

.mr-47 {
  margin-right: 47px;
}

.mr-48 {
  margin-right: 48px;
}

.mr-49 {
  margin-right: 49px;
}

.mr-50 {
  margin-right: 50px;
}

.mr-51 {
  margin-right: 51px;
}

.mr-52 {
  margin-right: 52px;
}

.mr-53 {
  margin-right: 53px;
}

.mr-54 {
  margin-right: 54px;
}

.mr-55 {
  margin-right: 55px;
}

.mr-56 {
  margin-right: 56px;
}

.mr-57 {
  margin-right: 57px;
}

.mr-58 {
  margin-right: 58px;
}

.mr-59 {
  margin-right: 59px;
}

.mr-60 {
  margin-right: 60px;
}

.mr-61 {
  margin-right: 61px;
}

.mr-62 {
  margin-right: 62px;
}

.mr-63 {
  margin-right: 63px;
}

.mr-64 {
  margin-right: 64px;
}

.mr-65 {
  margin-right: 65px;
}

.mr-66 {
  margin-right: 66px;
}

.mr-67 {
  margin-right: 67px;
}

.mr-68 {
  margin-right: 68px;
}

.mr-69 {
  margin-right: 69px;
}

.mr-70 {
  margin-right: 70px;
}

.mr-71 {
  margin-right: 71px;
}

.mr-72 {
  margin-right: 72px;
}

.mr-73 {
  margin-right: 73px;
}

.mr-74 {
  margin-right: 74px;
}

.mr-75 {
  margin-right: 75px;
}

.mr-76 {
  margin-right: 76px;
}

.mr-77 {
  margin-right: 77px;
}

.mr-78 {
  margin-right: 78px;
}

.mr-79 {
  margin-right: 79px;
}

.mr-80 {
  margin-right: 80px;
}

.mr-81 {
  margin-right: 81px;
}

.mr-82 {
  margin-right: 82px;
}

.mr-83 {
  margin-right: 83px;
}

.mr-84 {
  margin-right: 84px;
}

.mr-85 {
  margin-right: 85px;
}

.mr-86 {
  margin-right: 86px;
}

.mr-87 {
  margin-right: 87px;
}

.mr-88 {
  margin-right: 88px;
}

.mr-89 {
  margin-right: 89px;
}

.mr-90 {
  margin-right: 90px;
}

.mr-91 {
  margin-right: 91px;
}

.mr-92 {
  margin-right: 92px;
}

.mr-93 {
  margin-right: 93px;
}

.mr-94 {
  margin-right: 94px;
}

.mr-95 {
  margin-right: 95px;
}

.mr-96 {
  margin-right: 96px;
}

.mr-97 {
  margin-right: 97px;
}

.mr-98 {
  margin-right: 98px;
}

.mr-99 {
  margin-right: 99px;
}

.mr-100 {
  margin-right: 100px;
}

/*-- Padding Top --*/
.pt-1 {
  padding-top: 1px;
}

.pt-2 {
  padding-top: 2px;
}

.pt-3 {
  padding-top: 3px;
}

.pt-4 {
  padding-top: 4px;
}

.pt-5 {
  padding-top: 5px;
}

.pt-6 {
  padding-top: 6px;
}

.pt-7 {
  padding-top: 7px;
}

.pt-8 {
  padding-top: 8px;
}

.pt-9 {
  padding-top: 9px;
}

.pt-10 {
  padding-top: 10px;
}

.pt-11 {
  padding-top: 11px;
}

.pt-12 {
  padding-top: 12px;
}

.pt-13 {
  padding-top: 13px;
}

.pt-14 {
  padding-top: 14px;
}

.pt-15 {
  padding-top: 15px;
}

.pt-16 {
  padding-top: 16px;
}

.pt-17 {
  padding-top: 17px;
}

.pt-18 {
  padding-top: 18px;
}

.pt-19 {
  padding-top: 19px;
}

.pt-20 {
  padding-top: 20px;
}

.pt-21 {
  padding-top: 21px;
}

.pt-22 {
  padding-top: 22px;
}

.pt-23 {
  padding-top: 23px;
}

.pt-24 {
  padding-top: 24px;
}

.pt-25 {
  padding-top: 25px;
}

.pt-26 {
  padding-top: 26px;
}

.pt-27 {
  padding-top: 27px;
}

.pt-28 {
  padding-top: 28px;
}

.pt-29 {
  padding-top: 29px;
}

.pt-30 {
  padding-top: 30px;
}

.pt-31 {
  padding-top: 31px;
}

.pt-32 {
  padding-top: 32px;
}

.pt-33 {
  padding-top: 33px;
}

.pt-34 {
  padding-top: 34px;
}

.pt-35 {
  padding-top: 35px;
}

.pt-36 {
  padding-top: 36px;
}

.pt-37 {
  padding-top: 37px;
}

.pt-38 {
  padding-top: 38px;
}

.pt-39 {
  padding-top: 39px;
}

.pt-40 {
  padding-top: 40px;
}

.pt-41 {
  padding-top: 41px;
}

.pt-42 {
  padding-top: 42px;
}

.pt-43 {
  padding-top: 43px;
}

.pt-44 {
  padding-top: 44px;
}

.pt-45 {
  padding-top: 45px;
}

.pt-46 {
  padding-top: 46px;
}

.pt-47 {
  padding-top: 47px;
}

.pt-48 {
  padding-top: 48px;
}

.pt-49 {
  padding-top: 49px;
}

.pt-50 {
  padding-top: 50px;
}

.pt-51 {
  padding-top: 51px;
}

.pt-52 {
  padding-top: 52px;
}

.pt-53 {
  padding-top: 53px;
}

.pt-54 {
  padding-top: 54px;
}

.pt-55 {
  padding-top: 55px;
}

.pt-56 {
  padding-top: 56px;
}

.pt-57 {
  padding-top: 57px;
}

.pt-58 {
  padding-top: 58px;
}

.pt-59 {
  padding-top: 59px;
}

.pt-60 {
  padding-top: 60px;
}

.pt-61 {
  padding-top: 61px;
}

.pt-62 {
  padding-top: 62px;
}

.pt-63 {
  padding-top: 63px;
}

.pt-64 {
  padding-top: 64px;
}

.pt-65 {
  padding-top: 65px;
}

.pt-66 {
  padding-top: 66px;
}

.pt-67 {
  padding-top: 67px;
}

.pt-68 {
  padding-top: 68px;
}

.pt-69 {
  padding-top: 69px;
}

.pt-70 {
  padding-top: 70px;
}

.pt-71 {
  padding-top: 71px;
}

.pt-72 {
  padding-top: 72px;
}

.pt-73 {
  padding-top: 73px;
}

.pt-74 {
  padding-top: 74px;
}

.pt-75 {
  padding-top: 75px;
}

.pt-76 {
  padding-top: 76px;
}

.pt-77 {
  padding-top: 77px;
}

.pt-78 {
  padding-top: 78px;
}

.pt-79 {
  padding-top: 79px;
}

.pt-80 {
  padding-top: 80px;
}

.pt-81 {
  padding-top: 81px;
}

.pt-82 {
  padding-top: 82px;
}

.pt-83 {
  padding-top: 83px;
}

.pt-84 {
  padding-top: 84px;
}

.pt-85 {
  padding-top: 85px;
}

.pt-86 {
  padding-top: 86px;
}

.pt-87 {
  padding-top: 87px;
}

.pt-88 {
  padding-top: 88px;
}

.pt-89 {
  padding-top: 89px;
}

.pt-90 {
  padding-top: 90px;
}

.pt-91 {
  padding-top: 91px;
}

.pt-92 {
  padding-top: 92px;
}

.pt-93 {
  padding-top: 93px;
}

.pt-94 {
  padding-top: 94px;
}

.pt-95 {
  padding-top: 95px;
}

.pt-96 {
  padding-top: 96px;
}

.pt-97 {
  padding-top: 97px;
}

.pt-98 {
  padding-top: 98px;
}

.pt-99 {
  padding-top: 99px;
}

.pt-100 {
  padding-top: 100px;
}

.pt-101 {
  padding-top: 101px;
}

.pt-102 {
  padding-top: 102px;
}

.pt-103 {
  padding-top: 103px;
}

.pt-104 {
  padding-top: 104px;
}

.pt-105 {
  padding-top: 105px;
}

.pt-106 {
  padding-top: 106px;
}

.pt-107 {
  padding-top: 107px;
}

.pt-108 {
  padding-top: 108px;
}

.pt-109 {
  padding-top: 109px;
}

.pt-110 {
  padding-top: 110px;
}

.pt-111 {
  padding-top: 111px;
}

.pt-112 {
  padding-top: 112px;
}

.pt-113 {
  padding-top: 113px;
}

.pt-114 {
  padding-top: 114px;
}

.pt-115 {
  padding-top: 115px;
}

.pt-116 {
  padding-top: 116px;
}

.pt-117 {
  padding-top: 117px;
}

.pt-118 {
  padding-top: 118px;
}

.pt-119 {
  padding-top: 119px;
}

.pt-120 {
  padding-top: 120px;
}

.pt-121 {
  padding-top: 121px;
}

.pt-122 {
  padding-top: 122px;
}

.pt-123 {
  padding-top: 123px;
}

.pt-124 {
  padding-top: 124px;
}

.pt-125 {
  padding-top: 125px;
}

.pt-126 {
  padding-top: 126px;
}

.pt-127 {
  padding-top: 127px;
}

.pt-128 {
  padding-top: 128px;
}

.pt-129 {
  padding-top: 129px;
}

.pt-130 {
  padding-top: 130px;
}

.pt-131 {
  padding-top: 131px;
}

.pt-132 {
  padding-top: 132px;
}

.pt-133 {
  padding-top: 133px;
}

.pt-134 {
  padding-top: 134px;
}

.pt-135 {
  padding-top: 135px;
}

.pt-136 {
  padding-top: 136px;
}

.pt-137 {
  padding-top: 137px;
}

.pt-138 {
  padding-top: 138px;
}

.pt-139 {
  padding-top: 139px;
}

.pt-140 {
  padding-top: 140px;
}

.pt-141 {
  padding-top: 141px;
}

.pt-142 {
  padding-top: 142px;
}

.pt-143 {
  padding-top: 143px;
}

.pt-144 {
  padding-top: 144px;
}

.pt-145 {
  padding-top: 145px;
}

.pt-146 {
  padding-top: 146px;
}

.pt-147 {
  padding-top: 147px;
}

.pt-148 {
  padding-top: 148px;
}

.pt-149 {
  padding-top: 149px;
}

.pt-150 {
  padding-top: 150px;
}

/*-- Padding Bottom --*/
.pb-1 {
  padding-bottom: 1px;
}

.pb-2 {
  padding-bottom: 2px;
}

.pb-3 {
  padding-bottom: 3px;
}

.pb-4 {
  padding-bottom: 4px;
}

.pb-5 {
  padding-bottom: 5px;
}

.pb-6 {
  padding-bottom: 6px;
}

.pb-7 {
  padding-bottom: 7px;
}

.pb-8 {
  padding-bottom: 8px;
}

.pb-9 {
  padding-bottom: 9px;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-11 {
  padding-bottom: 11px;
}

.pb-12 {
  padding-bottom: 12px;
}

.pb-13 {
  padding-bottom: 13px;
}

.pb-14 {
  padding-bottom: 14px;
}

.pb-15 {
  padding-bottom: 15px;
}

.pb-16 {
  padding-bottom: 16px;
}

.pb-17 {
  padding-bottom: 17px;
}

.pb-18 {
  padding-bottom: 18px;
}

.pb-19 {
  padding-bottom: 19px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-21 {
  padding-bottom: 21px;
}

.pb-22 {
  padding-bottom: 22px;
}

.pb-23 {
  padding-bottom: 23px;
}

.pb-24 {
  padding-bottom: 24px;
}

.pb-25 {
  padding-bottom: 25px;
}

.pb-26 {
  padding-bottom: 26px;
}

.pb-27 {
  padding-bottom: 27px;
}

.pb-28 {
  padding-bottom: 28px;
}

.pb-29 {
  padding-bottom: 29px;
}

.pb-30 {
  padding-bottom: 30px;
}

.pb-31 {
  padding-bottom: 31px;
}

.pb-32 {
  padding-bottom: 32px;
}

.pb-33 {
  padding-bottom: 33px;
}

.pb-34 {
  padding-bottom: 34px;
}

.pb-35 {
  padding-bottom: 35px;
}

.pb-36 {
  padding-bottom: 36px;
}

.pb-37 {
  padding-bottom: 37px;
}

.pb-38 {
  padding-bottom: 38px;
}

.pb-39 {
  padding-bottom: 39px;
}

.pb-40 {
  padding-bottom: 40px;
}

.pb-41 {
  padding-bottom: 41px;
}

.pb-42 {
  padding-bottom: 42px;
}

.pb-43 {
  padding-bottom: 43px;
}

.pb-44 {
  padding-bottom: 44px;
}

.pb-45 {
  padding-bottom: 45px;
}

.pb-46 {
  padding-bottom: 46px;
}

.pb-47 {
  padding-bottom: 47px;
}

.pb-48 {
  padding-bottom: 48px;
}

.pb-49 {
  padding-bottom: 49px;
}

.pb-50 {
  padding-bottom: 50px;
}

.pb-51 {
  padding-bottom: 51px;
}

.pb-52 {
  padding-bottom: 52px;
}

.pb-53 {
  padding-bottom: 53px;
}

.pb-54 {
  padding-bottom: 54px;
}

.pb-55 {
  padding-bottom: 55px;
}

.pb-56 {
  padding-bottom: 56px;
}

.pb-57 {
  padding-bottom: 57px;
}

.pb-58 {
  padding-bottom: 58px;
}

.pb-59 {
  padding-bottom: 59px;
}

.pb-60 {
  padding-bottom: 60px;
}

.pb-61 {
  padding-bottom: 61px;
}

.pb-62 {
  padding-bottom: 62px;
}

.pb-63 {
  padding-bottom: 63px;
}

.pb-64 {
  padding-bottom: 64px;
}

.pb-65 {
  padding-bottom: 65px;
}

.pb-66 {
  padding-bottom: 66px;
}

.pb-67 {
  padding-bottom: 67px;
}

.pb-68 {
  padding-bottom: 68px;
}

.pb-69 {
  padding-bottom: 69px;
}

.pb-70 {
  padding-bottom: 70px;
}

.pb-71 {
  padding-bottom: 71px;
}

.pb-72 {
  padding-bottom: 72px;
}

.pb-73 {
  padding-bottom: 73px;
}

.pb-74 {
  padding-bottom: 74px;
}

.pb-75 {
  padding-bottom: 75px;
}

.pb-76 {
  padding-bottom: 76px;
}

.pb-77 {
  padding-bottom: 77px;
}

.pb-78 {
  padding-bottom: 78px;
}

.pb-79 {
  padding-bottom: 79px;
}

.pb-80 {
  padding-bottom: 80px;
}

.pb-81 {
  padding-bottom: 81px;
}

.pb-82 {
  padding-bottom: 82px;
}

.pb-83 {
  padding-bottom: 83px;
}

.pb-84 {
  padding-bottom: 84px;
}

.pb-85 {
  padding-bottom: 85px;
}

.pb-86 {
  padding-bottom: 86px;
}

.pb-87 {
  padding-bottom: 87px;
}

.pb-88 {
  padding-bottom: 88px;
}

.pb-89 {
  padding-bottom: 89px;
}

.pb-90 {
  padding-bottom: 90px;
}

.pb-91 {
  padding-bottom: 91px;
}

.pb-92 {
  padding-bottom: 92px;
}

.pb-93 {
  padding-bottom: 93px;
}

.pb-94 {
  padding-bottom: 94px;
}

.pb-95 {
  padding-bottom: 95px;
}

.pb-96 {
  padding-bottom: 96px;
}

.pb-97 {
  padding-bottom: 97px;
}

.pb-98 {
  padding-bottom: 98px;
}

.pb-99 {
  padding-bottom: 99px;
}

.pb-100 {
  padding-bottom: 100px;
}

.pb-101 {
  padding-bottom: 101px;
}

.pb-102 {
  padding-bottom: 102px;
}

.pb-103 {
  padding-bottom: 103px;
}

.pb-104 {
  padding-bottom: 104px;
}

.pb-105 {
  padding-bottom: 105px;
}

.pb-106 {
  padding-bottom: 106px;
}

.pb-107 {
  padding-bottom: 107px;
}

.pb-108 {
  padding-bottom: 108px;
}

.pb-109 {
  padding-bottom: 109px;
}

.pb-110 {
  padding-bottom: 110px;
}

.pb-111 {
  padding-bottom: 111px;
}

.pb-112 {
  padding-bottom: 112px;
}

.pb-113 {
  padding-bottom: 113px;
}

.pb-114 {
  padding-bottom: 114px;
}

.pb-115 {
  padding-bottom: 115px;
}

.pb-116 {
  padding-bottom: 116px;
}

.pb-117 {
  padding-bottom: 117px;
}

.pb-118 {
  padding-bottom: 118px;
}

.pb-119 {
  padding-bottom: 119px;
}

.pb-120 {
  padding-bottom: 120px;
}

.pb-121 {
  padding-bottom: 121px;
}

.pb-122 {
  padding-bottom: 122px;
}

.pb-123 {
  padding-bottom: 123px;
}

.pb-124 {
  padding-bottom: 124px;
}

.pb-125 {
  padding-bottom: 125px;
}

.pb-126 {
  padding-bottom: 126px;
}

.pb-127 {
  padding-bottom: 127px;
}

.pb-128 {
  padding-bottom: 128px;
}

.pb-129 {
  padding-bottom: 129px;
}

.pb-130 {
  padding-bottom: 130px;
}

.pb-131 {
  padding-bottom: 131px;
}

.pb-132 {
  padding-bottom: 132px;
}

.pb-133 {
  padding-bottom: 133px;
}

.pb-134 {
  padding-bottom: 134px;
}

.pb-135 {
  padding-bottom: 135px;
}

.pb-136 {
  padding-bottom: 136px;
}

.pb-137 {
  padding-bottom: 137px;
}

.pb-138 {
  padding-bottom: 138px;
}

.pb-139 {
  padding-bottom: 139px;
}

.pb-140 {
  padding-bottom: 140px;
}

.pb-141 {
  padding-bottom: 141px;
}

.pb-142 {
  padding-bottom: 142px;
}

.pb-143 {
  padding-bottom: 143px;
}

.pb-144 {
  padding-bottom: 144px;
}

.pb-145 {
  padding-bottom: 145px;
}

.pb-146 {
  padding-bottom: 146px;
}

.pb-147 {
  padding-bottom: 147px;
}

.pb-148 {
  padding-bottom: 148px;
}

.pb-149 {
  padding-bottom: 149px;
}

.pb-150 {
  padding-bottom: 150px;
}

/*-- Padding Left --*/
.pl-1 {
  padding-left: 1px;
}

.pl-2 {
  padding-left: 2px;
}

.pl-3 {
  padding-left: 3px;
}

.pl-4 {
  padding-left: 4px;
}

.pl-5 {
  padding-left: 5px;
}

.pl-6 {
  padding-left: 6px;
}

.pl-7 {
  padding-left: 7px;
}

.pl-8 {
  padding-left: 8px;
}

.pl-9 {
  padding-left: 9px;
}

.pl-10 {
  padding-left: 10px;
}

.pl-11 {
  padding-left: 11px;
}

.pl-12 {
  padding-left: 12px;
}

.pl-13 {
  padding-left: 13px;
}

.pl-14 {
  padding-left: 14px;
}

.pl-15 {
  padding-left: 15px;
}

.pl-16 {
  padding-left: 16px;
}

.pl-17 {
  padding-left: 17px;
}

.pl-18 {
  padding-left: 18px;
}

.pl-19 {
  padding-left: 19px;
}

.pl-20 {
  padding-left: 20px;
}

.pl-21 {
  padding-left: 21px;
}

.pl-22 {
  padding-left: 22px;
}

.pl-23 {
  padding-left: 23px;
}

.pl-24 {
  padding-left: 24px;
}

.pl-25 {
  padding-left: 25px;
}

.pl-26 {
  padding-left: 26px;
}

.pl-27 {
  padding-left: 27px;
}

.pl-28 {
  padding-left: 28px;
}

.pl-29 {
  padding-left: 29px;
}

.pl-30 {
  padding-left: 30px;
}

.pl-31 {
  padding-left: 31px;
}

.pl-32 {
  padding-left: 32px;
}

.pl-33 {
  padding-left: 33px;
}

.pl-34 {
  padding-left: 34px;
}

.pl-35 {
  padding-left: 35px;
}

.pl-36 {
  padding-left: 36px;
}

.pl-37 {
  padding-left: 37px;
}

.pl-38 {
  padding-left: 38px;
}

.pl-39 {
  padding-left: 39px;
}

.pl-40 {
  padding-left: 40px;
}

.pl-41 {
  padding-left: 41px;
}

.pl-42 {
  padding-left: 42px;
}

.pl-43 {
  padding-left: 43px;
}

.pl-44 {
  padding-left: 44px;
}

.pl-45 {
  padding-left: 45px;
}

.pl-46 {
  padding-left: 46px;
}

.pl-47 {
  padding-left: 47px;
}

.pl-48 {
  padding-left: 48px;
}

.pl-49 {
  padding-left: 49px;
}

.pl-50 {
  padding-left: 50px;
}

.pl-51 {
  padding-left: 51px;
}

.pl-52 {
  padding-left: 52px;
}

.pl-53 {
  padding-left: 53px;
}

.pl-54 {
  padding-left: 54px;
}

.pl-55 {
  padding-left: 55px;
}

.pl-56 {
  padding-left: 56px;
}

.pl-57 {
  padding-left: 57px;
}

.pl-58 {
  padding-left: 58px;
}

.pl-59 {
  padding-left: 59px;
}

.pl-60 {
  padding-left: 60px;
}

.pl-61 {
  padding-left: 61px;
}

.pl-62 {
  padding-left: 62px;
}

.pl-63 {
  padding-left: 63px;
}

.pl-64 {
  padding-left: 64px;
}

.pl-65 {
  padding-left: 65px;
}

.pl-66 {
  padding-left: 66px;
}

.pl-67 {
  padding-left: 67px;
}

.pl-68 {
  padding-left: 68px;
}

.pl-69 {
  padding-left: 69px;
}

.pl-70 {
  padding-left: 70px;
}

.pl-71 {
  padding-left: 71px;
}

.pl-72 {
  padding-left: 72px;
}

.pl-73 {
  padding-left: 73px;
}

.pl-74 {
  padding-left: 74px;
}

.pl-75 {
  padding-left: 75px;
}

.pl-76 {
  padding-left: 76px;
}

.pl-77 {
  padding-left: 77px;
}

.pl-78 {
  padding-left: 78px;
}

.pl-79 {
  padding-left: 79px;
}

.pl-80 {
  padding-left: 80px;
}

.pl-81 {
  padding-left: 81px;
}

.pl-82 {
  padding-left: 82px;
}

.pl-83 {
  padding-left: 83px;
}

.pl-84 {
  padding-left: 84px;
}

.pl-85 {
  padding-left: 85px;
}

.pl-86 {
  padding-left: 86px;
}

.pl-87 {
  padding-left: 87px;
}

.pl-88 {
  padding-left: 88px;
}

.pl-89 {
  padding-left: 89px;
}

.pl-90 {
  padding-left: 90px;
}

.pl-91 {
  padding-left: 91px;
}

.pl-92 {
  padding-left: 92px;
}

.pl-93 {
  padding-left: 93px;
}

.pl-94 {
  padding-left: 94px;
}

.pl-95 {
  padding-left: 95px;
}

.pl-96 {
  padding-left: 96px;
}

.pl-97 {
  padding-left: 97px;
}

.pl-98 {
  padding-left: 98px;
}

.pl-99 {
  padding-left: 99px;
}

.pl-100 {
  padding-left: 100px;
}

.pl-101 {
  padding-left: 101px;
}

.pl-102 {
  padding-left: 102px;
}

.pl-103 {
  padding-left: 103px;
}

.pl-104 {
  padding-left: 104px;
}

.pl-105 {
  padding-left: 105px;
}

.pl-106 {
  padding-left: 106px;
}

.pl-107 {
  padding-left: 107px;
}

.pl-108 {
  padding-left: 108px;
}

.pl-109 {
  padding-left: 109px;
}

.pl-110 {
  padding-left: 110px;
}

.pl-111 {
  padding-left: 111px;
}

.pl-112 {
  padding-left: 112px;
}

.pl-113 {
  padding-left: 113px;
}

.pl-114 {
  padding-left: 114px;
}

.pl-115 {
  padding-left: 115px;
}

.pl-116 {
  padding-left: 116px;
}

.pl-117 {
  padding-left: 117px;
}

.pl-118 {
  padding-left: 118px;
}

.pl-119 {
  padding-left: 119px;
}

.pl-120 {
  padding-left: 120px;
}

.pl-121 {
  padding-left: 121px;
}

.pl-122 {
  padding-left: 122px;
}

.pl-123 {
  padding-left: 123px;
}

.pl-124 {
  padding-left: 124px;
}

.pl-125 {
  padding-left: 125px;
}

.pl-126 {
  padding-left: 126px;
}

.pl-127 {
  padding-left: 127px;
}

.pl-128 {
  padding-left: 128px;
}

.pl-129 {
  padding-left: 129px;
}

.pl-130 {
  padding-left: 130px;
}

.pl-131 {
  padding-left: 131px;
}

.pl-132 {
  padding-left: 132px;
}

.pl-133 {
  padding-left: 133px;
}

.pl-134 {
  padding-left: 134px;
}

.pl-135 {
  padding-left: 135px;
}

.pl-136 {
  padding-left: 136px;
}

.pl-137 {
  padding-left: 137px;
}

.pl-138 {
  padding-left: 138px;
}

.pl-139 {
  padding-left: 139px;
}

.pl-140 {
  padding-left: 140px;
}

.pl-141 {
  padding-left: 141px;
}

.pl-142 {
  padding-left: 142px;
}

.pl-143 {
  padding-left: 143px;
}

.pl-144 {
  padding-left: 144px;
}

.pl-145 {
  padding-left: 145px;
}

.pl-146 {
  padding-left: 146px;
}

.pl-147 {
  padding-left: 147px;
}

.pl-148 {
  padding-left: 148px;
}

.pl-149 {
  padding-left: 149px;
}

.pl-150 {
  padding-left: 150px;
}

/*-- Padding Right --*/
.pr-1 {
  padding-right: 1px;
}

.pr-2 {
  padding-right: 2px;
}

.pr-3 {
  padding-right: 3px;
}

.pr-4 {
  padding-right: 4px;
}

.pr-5 {
  padding-right: 5px;
}

.pr-6 {
  padding-right: 6px;
}

.pr-7 {
  padding-right: 7px;
}

.pr-8 {
  padding-right: 8px;
}

.pr-9 {
  padding-right: 9px;
}

.pr-10 {
  padding-right: 10px;
}

.pr-11 {
  padding-right: 11px;
}

.pr-12 {
  padding-right: 12px;
}

.pr-13 {
  padding-right: 13px;
}

.pr-14 {
  padding-right: 14px;
}

.pr-15 {
  padding-right: 15px;
}

.pr-16 {
  padding-right: 16px;
}

.pr-17 {
  padding-right: 17px;
}

.pr-18 {
  padding-right: 18px;
}

.pr-19 {
  padding-right: 19px;
}

.pr-20 {
  padding-right: 20px;
}

.pr-21 {
  padding-right: 21px;
}

.pr-22 {
  padding-right: 22px;
}

.pr-23 {
  padding-right: 23px;
}

.pr-24 {
  padding-right: 24px;
}

.pr-25 {
  padding-right: 25px;
}

.pr-26 {
  padding-right: 26px;
}

.pr-27 {
  padding-right: 27px;
}

.pr-28 {
  padding-right: 28px;
}

.pr-29 {
  padding-right: 29px;
}

.pr-30 {
  padding-right: 30px;
}

.pr-31 {
  padding-right: 31px;
}

.pr-32 {
  padding-right: 32px;
}

.pr-33 {
  padding-right: 33px;
}

.pr-34 {
  padding-right: 34px;
}

.pr-35 {
  padding-right: 35px;
}

.pr-36 {
  padding-right: 36px;
}

.pr-37 {
  padding-right: 37px;
}

.pr-38 {
  padding-right: 38px;
}

.pr-39 {
  padding-right: 39px;
}

.pr-40 {
  padding-right: 40px;
}

.pr-41 {
  padding-right: 41px;
}

.pr-42 {
  padding-right: 42px;
}

.pr-43 {
  padding-right: 43px;
}

.pr-44 {
  padding-right: 44px;
}

.pr-45 {
  padding-right: 45px;
}

.pr-46 {
  padding-right: 46px;
}

.pr-47 {
  padding-right: 47px;
}

.pr-48 {
  padding-right: 48px;
}

.pr-49 {
  padding-right: 49px;
}

.pr-50 {
  padding-right: 50px;
}

.pr-51 {
  padding-right: 51px;
}

.pr-52 {
  padding-right: 52px;
}

.pr-53 {
  padding-right: 53px;
}

.pr-54 {
  padding-right: 54px;
}

.pr-55 {
  padding-right: 55px;
}

.pr-56 {
  padding-right: 56px;
}

.pr-57 {
  padding-right: 57px;
}

.pr-58 {
  padding-right: 58px;
}

.pr-59 {
  padding-right: 59px;
}

.pr-60 {
  padding-right: 60px;
}

.pr-61 {
  padding-right: 61px;
}

.pr-62 {
  padding-right: 62px;
}

.pr-63 {
  padding-right: 63px;
}

.pr-64 {
  padding-right: 64px;
}

.pr-65 {
  padding-right: 65px;
}

.pr-66 {
  padding-right: 66px;
}

.pr-67 {
  padding-right: 67px;
}

.pr-68 {
  padding-right: 68px;
}

.pr-69 {
  padding-right: 69px;
}

.pr-70 {
  padding-right: 70px;
}

.pr-71 {
  padding-right: 71px;
}

.pr-72 {
  padding-right: 72px;
}

.pr-73 {
  padding-right: 73px;
}

.pr-74 {
  padding-right: 74px;
}

.pr-75 {
  padding-right: 75px;
}

.pr-76 {
  padding-right: 76px;
}

.pr-77 {
  padding-right: 77px;
}

.pr-78 {
  padding-right: 78px;
}

.pr-79 {
  padding-right: 79px;
}

.pr-80 {
  padding-right: 80px;
}

.pr-81 {
  padding-right: 81px;
}

.pr-82 {
  padding-right: 82px;
}

.pr-83 {
  padding-right: 83px;
}

.pr-84 {
  padding-right: 84px;
}

.pr-85 {
  padding-right: 85px;
}

.pr-86 {
  padding-right: 86px;
}

.pr-87 {
  padding-right: 87px;
}

.pr-88 {
  padding-right: 88px;
}

.pr-89 {
  padding-right: 89px;
}

.pr-90 {
  padding-right: 90px;
}

.pr-91 {
  padding-right: 91px;
}

.pr-92 {
  padding-right: 92px;
}

.pr-93 {
  padding-right: 93px;
}

.pr-94 {
  padding-right: 94px;
}

.pr-95 {
  padding-right: 95px;
}

.pr-96 {
  padding-right: 96px;
}

.pr-97 {
  padding-right: 97px;
}

.pr-98 {
  padding-right: 98px;
}

.pr-99 {
  padding-right: 99px;
}

.pr-100 {
  padding-right: 100px;
}

.pr-101 {
  padding-right: 101px;
}

.pr-102 {
  padding-right: 102px;
}

.pr-103 {
  padding-right: 103px;
}

.pr-104 {
  padding-right: 104px;
}

.pr-105 {
  padding-right: 105px;
}

.pr-106 {
  padding-right: 106px;
}

.pr-107 {
  padding-right: 107px;
}

.pr-108 {
  padding-right: 108px;
}

.pr-109 {
  padding-right: 109px;
}

.pr-110 {
  padding-right: 110px;
}

.pr-111 {
  padding-right: 111px;
}

.pr-112 {
  padding-right: 112px;
}

.pr-113 {
  padding-right: 113px;
}

.pr-114 {
  padding-right: 114px;
}

.pr-115 {
  padding-right: 115px;
}

.pr-116 {
  padding-right: 116px;
}

.pr-117 {
  padding-right: 117px;
}

.pr-118 {
  padding-right: 118px;
}

.pr-119 {
  padding-right: 119px;
}

.pr-120 {
  padding-right: 120px;
}

.pr-121 {
  padding-right: 121px;
}

.pr-122 {
  padding-right: 122px;
}

.pr-123 {
  padding-right: 123px;
}

.pr-124 {
  padding-right: 124px;
}

.pr-125 {
  padding-right: 125px;
}

.pr-126 {
  padding-right: 126px;
}

.pr-127 {
  padding-right: 127px;
}

.pr-128 {
  padding-right: 128px;
}

.pr-129 {
  padding-right: 129px;
}

.pr-130 {
  padding-right: 130px;
}

.pr-131 {
  padding-right: 131px;
}

.pr-132 {
  padding-right: 132px;
}

.pr-133 {
  padding-right: 133px;
}

.pr-134 {
  padding-right: 134px;
}

.pr-135 {
  padding-right: 135px;
}

.pr-136 {
  padding-right: 136px;
}

.pr-137 {
  padding-right: 137px;
}

.pr-138 {
  padding-right: 138px;
}

.pr-139 {
  padding-right: 139px;
}

.pr-140 {
  padding-right: 140px;
}

.pr-141 {
  padding-right: 141px;
}

.pr-142 {
  padding-right: 142px;
}

.pr-143 {
  padding-right: 143px;
}

.pr-144 {
  padding-right: 144px;
}

.pr-145 {
  padding-right: 145px;
}

.pr-146 {
  padding-right: 146px;
}

.pr-147 {
  padding-right: 147px;
}

.pr-148 {
  padding-right: 148px;
}

.pr-149 {
  padding-right: 149px;
}

.pr-150 {
  padding-right: 150px;
}

.pt-290 {
  padding-top: 290px;
}

.pb-170 {
  padding-bottom: 170px;
}

.tp-transparent-header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
}

.tp-main-menu ul li {
  display: inline-block;
  margin-right: 42px;
  position: relative;
}

.tp-main-menu ul li a {
  font-size: 18px;
  color: white;
  font-family: var(--tp-fonts-heading);
  padding: 37px 0;
  display: inline-block;
  transition: all 0.3s linear;
}

.tp-main-menu ul li .sub-menu {
  position: absolute;
  left: 0;
  top: 105%;
  width: 213px;
  background-color: #fff;
  padding: 16px 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s linear;
}

.tp-main-menu ul li .sub-menu li {
  display: block;
  margin-right: 0;
}

.tp-main-menu ul li .sub-menu li a {
  color: #000;
  display: block;
  padding: 4px 25px;
  font-size: 17px;
  transition: all 0.3s linear;
}

.tp-main-menu ul li .sub-menu li .sub-menu {
  left: 100%;
  top: 0;
  opacity: 0;
  visibility: hidden;
}

.tp-main-menu ul li .sub-menu li:hover > a {
  color: #0057FC;
}

.tp-main-menu ul li .sub-menu li:hover > .sub-menu {
  opacity: 1;
  visibility: visible;
}

.tp-main-menu ul li:hover a {
  color: var(--tp-theme-color-2);
}

.tp-main-menu ul li:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  top: 100%;
}

.tp-header-border {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.tp-header-search {
  margin-right: 40px;
}

.tp-header-bar button {
  background: #23252D;
  padding: 40px 25px;
}

.tp-header-cta {
  display: flex;
  align-items: center;
  padding: 28px 40px;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

.tp-header-cta-text span {
  font-size: 15px;
  line-height: 1;
  color: #B1B4BA;
  margin-bottom: 15px;
  display: block;
}

.tp-header-cta-text h4 {
  font-size: 18px;
  line-height: 1.3;
  color: #fff;
  margin-bottom: 0;
}

.tp-header-cta-icon {
  margin-right: 15px;
}

.tp-hero-title {
  font-size: 110px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 0;
}

.tp-hero-title span {
  background: radial-gradient(42.24% 2817.5% at 52.45% 54.17%, rgba(255, 232, 21, 0.95) 0%, #3C7FFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tp-hero-title i {
  color: #B1B4BA;
  font-size: 30px;
  font-style: normal;
  display: inline-block;
  transform: translateY(-5px);
}

.tp-header-shap-5 {
  right: 300px;
  bottom: 131px;
  width: 170px;
  z-index: 1;
}

.tp-header-shap-4 {
  top: 212px;
  right: 193px;
  width: 145px;
  z-index: 1;
}

.tp-header-shap-2 {
  top: 295px;
  left: 386px;
  width: 512px;
  z-index: 1;
}

.tp-header-shap-1 {
  top: 370px;
  left: 0;
  width: 255px;
  height: 255px;
  z-index: 1;
}

.tp-header-shap-3 {
  left: 59%;
  top: 31%;
  width: 85px;
  z-index: 1;
}

.hero-info {
  font-size: 15px;
  font-weight: 500;
  color: #B1B4BA;
  text-transform: uppercase;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  top: 100px;
  height: 100%;
  z-index: 11;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.hero-social {
  transform: rotate(-90deg);
  display: block ruby;
}

.hero-info-text {
  transform: rotate(-90deg);
  display: block ruby;
}

.hero-info a {
  padding: 0 10px;
  transition: all 0.3s linear;
}

.hero-info a:hover {
  color: var(--tp-theme-color-2);
}

.tp-about-video-icon a {
  height: 80px;
  width: 80px;
  border: 1px solid #57595c;
  border-radius: 50%;
  text-align: center;
  line-height: 75px;
  display: inline-block;
}

.tp-about-video h4 {
  font-size: 30px;
  color: #57595c;
}

.tp-nesletter-bg {
  padding: 80px;
  border-radius: 20px;
}

.tp-nesletter-box input {
  border-color: #fff;
  color: #fff;
}

.tp-nesletter-box input:focus {
  border-color: #fff;
}

.tp-nesletter-box input:focus::placeholder {
  opacity: 0;
}

.tp-nesletter-box input::-webkit-input-placeholder {
  color: #fff;
}

.tp-nesletter-box input:-moz-placeholder {
  color: #fff;
}

.tp-nesletter-box input::-moz-placeholder {
  color: #fff;
}

.tp-nesletter-box input::-ms-input-placeholder {
  color: #fff;
}



/*# sourceMappingURL=main.js.map */
