!function(t){t.fn.mauGallery=function(a){var a=t.extend(t.fn.mauGallery.defaults,a),e=[];return this.each(function(){t.fn.mauGallery.methods.createRowWrapper(t(this)),a.lightBox&&t.fn.mauGallery.methods.createLightBox(t(this),a.lightboxId,a.navigation),t.fn.mauGallery.listeners(a),t(this).children(".gallery-item").each(function(l){t.fn.mauGallery.methods.responsiveImageItem(t(this)),t.fn.mauGallery.methods.moveItemInRowWrapper(t(this)),t.fn.mauGallery.methods.wrapItemInColumn(t(this),a.columns);var i=t(this).data("gallery-tag");a.showTags&&void 0!==i&&-1===e.indexOf(i)&&e.push(i)}),a.showTags&&t.fn.mauGallery.methods.showItemTags(t(this),a.tagsPosition,e),t(this).fadeIn(500)})},t.fn.mauGallery.defaults={columns:3,lightBox:!0,lightboxId:null,showTags:!0,tagsPosition:"bottom",navigation:!0},t.fn.mauGallery.listeners=function(a){t(".gallery-item").on("click",function(){a.lightBox&&"IMG"===t(this).prop("tagName")&&t.fn.mauGallery.methods.openLightBox(t(this),a.lightboxId)}),t(".gallery").on("click",".nav-link",t.fn.mauGallery.methods.filterByTag),t(".gallery").on("click",".mg-prev",()=>t.fn.mauGallery.methods.prevImage(a.lightboxId)),t(".gallery").on("click",".mg-next",()=>t.fn.mauGallery.methods.nextImage(a.lightboxId))},t.fn.mauGallery.methods={createRowWrapper(t){t.children().first().hasClass("row")||t.append('<div class="gallery-items-row row"></div>')},wrapItemInColumn(t,a){if(a.constructor===Number)t.wrap(`<div class='item-column mb-4 col-${Math.ceil(12/a)}'></div>`);else if(a.constructor===Object){var e="";a.xs&&(e+=` col-${Math.ceil(12/a.xs)}`),a.sm&&(e+=` col-sm-${Math.ceil(12/a.sm)}`),a.md&&(e+=` col-md-${Math.ceil(12/a.md)}`),a.lg&&(e+=` col-lg-${Math.ceil(12/a.lg)}`),a.xl&&(e+=` col-xl-${Math.ceil(12/a.xl)}`),t.wrap(`<div class='item-column mb-4${e}'></div>`)}else console.error(`Columns should be defined as numbers or objects. ${typeof a} is not supported.`)},moveItemInRowWrapper(t){t.appendTo(".gallery-items-row")},responsiveImageItem(t){"IMG"===t.prop("tagName")&&t.addClass("img-fluid")},openLightBox(a,e){t(`#${e}`).find(".lightboxImage").attr("src",a.attr("src")),t(`#${e}`).modal("toggle")},prevImage(){let a=null;t("img.gallery-item").each(function(){t(this).attr("src")===t(".lightboxImage").attr("src")&&(a=t(this))});let e=t(".tags-bar span.active-tag").data("images-toggle"),l=[];"Tous"===e?t(".item-column").each(function(){t(this).children("img").length&&l.push(t(this).children("img"))}):t(".item-column").each(function(){t(this).children("img").data("gallery-tag")===e&&l.push(t(this).children("img"))});let i=0,s=null;t(l).each(function(e){t(a).attr("src")===t(this).attr("src")&&(i=e-1)}),s=l[i]||l[l.length-1],t(".lightboxImage").attr("src",t(s).attr("src"))},nextImage(){let a=null;t("img.gallery-item").each(function(){t(this).attr("src")===t(".lightboxImage").attr("src")&&(a=t(this))});let e=t(".tags-bar span.active-tag").data("images-toggle"),l=[];"all"===e?t(".item-column").each(function(){t(this).children("img").length&&l.push(t(this).children("img"))}):t(".item-column").each(function(){t(this).children("img").data("gallery-tag")===e&&l.push(t(this).children("img"))});let i=0,s=null;t(l).each(function(e){t(a).attr("src")===t(this).attr("src")&&(i=e+1)}),s=l[i]||l[0],t(".lightboxImage").attr("src",t(s).attr("src"))},createLightBox(t,a,e){t.append(`<div class="modal fade" id="${a||"galleryLightbox"}" tabindex="-1" role="dialog"  aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            ${e?'<div class="mg-prev" style="cursor:pointer;position:absolute;top:50%;left:-15px;background:white;"><</div>':'<span style="display:none;" />'}
                            <img class="lightboxImage img-fluid" alt = "Affichage dynamique" />
                            ${e?'<div class="mg-next" style="cursor:pointer;position:absolute;top:50%;right:-15px;background:white;}">></div>':'<span style="display:none;" />'}
                        </div>
                    </div>
                </div>
            </div>`)},showItemTags(a,e,l){var i='<li class="nav-item"><span class="nav-link active active-tag"  data-images-toggle="all">Tous</span></li>';t.each(l,function(t,a){i+=`<li class="nav-item active">
                <span class="nav-link"  data-images-toggle="${a}">${a}</span></li>`});var s=`<ul class="my-4 tags-bar nav nav-pills">${i}</ul>`;"bottom"===e?a.append(s):"top"===e?a.prepend(s):console.error(`Unknown tags position: ${e}`)},filterByTag(){if(!t(this).hasClass("active-tag")){t(".active.active-tag").removeClass("active active-tag"),t(this).addClass("active-tag active");var a=t(this).data("images-toggle");t(".gallery-item").each(function(){t(this).parents(".item-column").hide(),"all"===a?t(this).parents(".item-column").show(300):t(this).data("gallery-tag")===a&&t(this).parents(".item-column").show(300)})}}}}(jQuery);