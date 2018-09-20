"use strict";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function arrToObj(e){return[].slice.call(e)}var OpenContactForm=function(){function e(t,r){_classCallCheck(this,e),this.contactform=t,this.arropenform=arrToObj(r)}return _createClass(e,[{key:"formopen",value:function(){var e=this;this.arropenform.find(function(t){return t.addEventListener("click",function(){return e.contactform.classList.toggle("opened-form")})})}},{key:"openSidebar",value:function(){var e=this;this.arropenform.find(function(t){return t.addEventListener("click",function(){e.contactform.classList.toggle("opened-form"),t.classList.toggle("opened-form")})})}}]),e}(),CounterProduct=function(){function e(t){_classCallCheck(this,e),this.btn=t,this.bntGroup=arrToObj(t)}return _createClass(e,[{key:"start",value:function(){var e=this;this.bntGroup.some(function(t){return t.addEventListener("click",function(t){return e.foo(t)})})}},{key:"foo",value:function(e){var t=Number(e.target.closest(".wrap-count").querySelector(".count-number").value);e.target.matches(".count-minus")&&t--,e.target.matches(".count-plus")&&t++,(t<=0||isNaN(t))&&(t=1),e.target.closest(".wrap-count").querySelector(".count-number").value=t}}]),e}(),Getactiveitemcard=function(){function e(t){_classCallCheck(this,e),this.arrItems=arrToObj(t),this.activeItemsTitle="",this.activeItemsColor="",this.activeItemsColorTitle="",this.resultTitle=document.querySelector(".img-caption .title"),this.resultTitleModal=document.querySelector(".title-js"),this.resultImgSrc=document.querySelector(".colorCardsModalbtn img"),this.resultImgTitle=document.querySelector(".colorCardsModalbtn-js"),this.resultImgSrceModal=document.querySelector(".selected-material .img-product img"),this.resultImgTitleModal=document.querySelector(".selected-material .title-product p"),this.resultImgTitleMaterialModal=document.querySelector(".selected-material .title-material")}return _createClass(e,[{key:"title",value:function(){this.setActiveCardMaterial(),this.switchwindow()}},{key:"color",value:function(){this.setActiveCardColor()}},{key:"setResultTitle",value:function(){this.resultTitle.textContent=this.activeItemsTitle,this.resultImgTitleMaterialModal.textContent=this.activeItemsTitle,$("#materialCardsModal").modal("hide")}},{key:"setResultImg",value:function(){this.resultImgSrc.attributes[0].value=this.activeItemsColor,this.resultImgSrceModal.attributes[0].value=this.activeItemsColor,this.resultImgTitle.textContent=this.activeItemsColorTitle,this.resultImgTitleModal.textContent=this.activeItemsColorTitle}},{key:"getActiveCardTitle",value:function(){var e=this;this.arrItems.filter(function(t){t.matches(".selected")&&(e.activeItemsTitle=t.children[0].children[0].children[1].innerHTML)}),this.setResultTitle()}},{key:"getActiveCardColor",value:function(){var e=this;this.arrItems.filter(function(t){!t.matches(".selected")||(e.activeItemsColor=t.children[0].children[0].children[0].attributes[0].value),!t.matches(".selected")||(e.activeItemsColorTitle=t.children[0].children[1].children[0].innerHTML),console.log(e.activeItemsColor,e.activeItemsColorTitle)}),this.setResultImg()}},{key:"setActiveCardColor",value:function(){var e=this;this.setActiveCard(function(){return e.getActiveCardColor()})}},{key:"setActiveCardMaterial",value:function(){var e=this;this.setActiveCard(function(){return e.getActiveCardTitle()})}},{key:"setActiveCard",value:function(e){var t=this;this.arrItems.find(function(r){return r.addEventListener("click",function(){t.resetActiveCard(),!r.matches(".selected")&&r.classList.add("selected"),e()})})}},{key:"resetActiveCard",value:function(){this.arrItems.filter(function(e){return e.classList.remove("selected")})}},{key:"switchwindow",value:function(){this.resultTitleModal.addEventListener("click",function(){return $("#colorCardsModal").modal("hide")})}}]),e}(),DeletItemInCart=function(){function e(t){_classCallCheck(this,e),this.btncloseitem=t,this.arrbtncloseitem=arrToObj(t),this.valuecounter=""}return _createClass(e,[{key:"init",value:function(){var e=this;this.arrbtncloseitem.filter(function(t){t.addEventListener("click",function(t){e.valuecounter=t.path[2].children[0].children[1].value,t.path[2].children[0].children[1].value=0,t.path[5].classList.toggle("deleted")})})}}]),e}(),OpenCloseForm=function(){function e(){_classCallCheck(this,e),this.menuForm=document.body.querySelector(".menu-form"),this.sidebarBtn=document.body.querySelector(".sidebar-btn"),this.actionsBtns=arrToObj(document.body.querySelectorAll(".form-container .actions-btn-js")),this.formInputs=arrToObj(document.body.querySelectorAll(".ordering-form-inputs")),this.formBtns=arrToObj(document.body.querySelectorAll(".btn-toggle-js"))}return _createClass(e,[{key:"openSidebar",value:function(){var e=this;this.sidebarBtn.addEventListener("click",function(){e.menuForm.classList.toggle("opened-form"),e.sidebarBtn.classList.toggle("opened-form"),e.formInputs[0].matches(".d-none")&&(e.formInputs.filter(function(e){return e.classList.toggle("d-none")}),e.formBtns.filter(function(e){return e.classList.toggle("d-none")}))})}},{key:"toggleForm",value:function(){var e=this;this.actionsBtns.find(function(t){return t.addEventListener("click",function(){e.formInputs[0].matches(".d-none")||(e.formInputs.filter(function(e){return e.classList.toggle("d-none")}),e.formBtns.filter(function(e){return e.classList.toggle("d-none")}))})})}},{key:"initial",value:function(){this.openSidebar(),this.toggleForm()}}]),e}(),CloseForm=function(){function e(t,r){_classCallCheck(this,e),this.section=t,this.btn=r}return _createClass(e,[{key:"onCloseForm",value:function(){var e=this;window.addEventListener("scroll",function(){e.section.matches(".opened-form")&&e.section.classList.remove("opened-form"),e.btn.matches(".opened-form")&&e.btn.classList.remove("opened-form")})}}]),e}(),openCloseForm=new OpenCloseForm,getMaterial=new Getactiveitemcard(document.querySelectorAll(".material-cards-item")),getColor=new Getactiveitemcard(document.querySelectorAll(".color-cards-item")),getContact=new OpenContactForm(document.body.querySelector(".input-wrapper"),document.body.querySelectorAll(".actions-btn-js")),counter=new CounterProduct(document.querySelectorAll(".wrap-count button"),document.querySelector(".count-number")),openedSidebar=new OpenContactForm(document.body.querySelector(".menu-form"),document.body.querySelectorAll(".sidebar-btn")),closeForm=new CloseForm(document.body.querySelector(".menu-form"),document.body.querySelector(".sidebar-btn")),deletcard=new DeletItemInCart(document.querySelectorAll(".ordering-item .wrap-close-icon"));