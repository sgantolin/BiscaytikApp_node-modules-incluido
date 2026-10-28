<%@ Page language="C#"
 Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c"
 meta:progid="SharePoint.WebPartPage.Document" %>
 <%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls"
  Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
  <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages"
   Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
   <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls"
    Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
    <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation"
     Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
     <%@Register TagPrefix="biscaytik" Namespace="Turismo2013.WebParts"
      Assembly="Turismo2013.WebParts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=9f2cc5471da6bb42" %>
      <asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">

       <SharePointWebControls:CssRegistration ID="CssRegistration1"
        name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>"
        runat="server" />
       <PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
        <!-- Styles for edit mode only-->
        <SharePointWebControls:CssRegistration ID="CssRegistration2"
         name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
         After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>"
         runat="server" />
       </PublishingWebControls:EditModePanel>
       <SharePointWebControls:FieldValue id="PageStylesField" FieldName="HeaderStyleDefinitions" runat="server" />
      </asp:Content>

      <asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
       <SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
      </asp:Content>

      <asp:Content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
       <WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager">
       </WebPartPages:SPProxyWebPartManager>
      </asp:Content>

      <asp:Content ContentPlaceHolderId="PlaceHolderTitleBreadcrumb" runat="server">
       <SharePointWebControls:ListSiteMapPath ID="ListSiteMapPath1" runat="server"
        SiteMapProviders="CurrentNavigationSwitchableProvider" RenderCurrentNodeAsLink="false" PathSeparator=""
        CssClass="s4-breadcrumb" NodeStyle-CssClass="s4-breadcrumbNode"
        CurrentNodeStyle-CssClass="s4-breadcrumbCurrentNode" RootNodeStyle-CssClass="s4-breadcrumbRootNode"
        NodeImageOffsetX=0 NodeImageOffsetY=289 NodeImageWidth=16 NodeImageHeight=16
        NodeImageUrl="/_layouts/15/images/fgimg.png?rev=23" HideInteriorRootNodes="true" SkipLinkText="" />
      </asp:Content>

      <asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
       <a class="sr-only sr-only-focusable" href="#maincontent">Saltar al contenido</a>
       <div id="maincontent" role="main" class="page_title2" itemscope itemtype="https://schema.org/Event">
        <div class="row">
         <div class="BKTT-WebPartZone-fullWidth--TopContainer col-12">
          <div class=" container">
           <div class="container">
            <nav class="BKTT-Breadcrumb__list BKTT-Breadcrumb">
             <biscaytik:ExtendedBreadcrumb2026 ShowCurrentPage="false" SiteCollectionWeb="false"
              id="ExtendedBreadcrumb1" runat="server" />
            </nav>
           </div>
          </div>
          <biscaytik:HideWhenBlank ID="HideWhenBlank21" runat="server"
          FieldNameToCheck="PublishingRollupImage">
           <figure class="BKTT-FigureImg" itemprop="image" itemscope
           itemtype="https://schema.org/ImageObject">
            <PublishingWebControls:RichImageField ID="RichImageField21" FieldName="PublishingRollupImage"
             AllowHyperLinks="false" runat="server" />
           </figure>
          </biscaytik:HideWhenBlank>
          <div class="BKTT-EventoDetalle__header container mt-5">
           <div class="BKTT-EventoDetalle__heading">
            <h1 class="BKTT-EventoDetalle__title" itemprop="name">
             <span class="BKTT-Icon fa-light fa-party-horn"></span>
             <SharePointWebControls:TextField ID="TextField1" runat="server" FieldName="Title" />
            </h1>
           </div>
           <!-- Botón de compartir -->
           <div class="share-container">
            <button id="shareButton" class="BKTT-EventoDetalle__share" type="button"
            aria-label="Compartir evento"><span class="BKTT-Icon fa-light fa-arrow-up-from-bracket"
            aria-hidden="true"></span></button>
            <div id="shareOptions" class="share-options" hidden>
             <a id="shareWhatsApp" target="_blank" rel="noopener noreferrer">
              WhatsApp
             </a>
             <a id="shareFacebook" target="_blank" rel="noopener noreferrer">
              Facebook
             </a>
             <a id="shareX" target="_blank" rel="noopener noreferrer">
              X
             </a>
             <a id="shareLinkedIn" target="_blank" rel="noopener noreferrer">
              LinkedIn
             </a>
             <a id="shareEmail">
              Email
             </a>
            </div>
           </div>

           <style>
            .share-container {
             position: relative;
             display: inline-block;
             font-family: Arial, sans-serif;
            }

            .share-button {
             border: none;
             border-radius: 6px;
             padding: 10px 16px;
             cursor: pointer;
             background: #333;
             color: white;
             font-size: 15px;
            }

            .share-button:hover {
             background: #555;
            }

            .share-options {
             position: absolute;
             top: calc(100% + 8px);
             left: 0;
             z-index: 1000;
             min-width: 160px;
             padding: 6px;
             background: white;
             border: 1px solid #ddd;
             border-radius: 6px;
             box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
            }

            .share-options a {
             display: block;
             padding: 9px 12px;
             color: #333;
             text-decoration: none;
             border-radius: 4px;
            }

            .share-options a:hover {
             background: #f2f2f2;
            }
           </style>

           <script>
            const shareButton = document.getElementById("shareButton");
            const shareOptions = document.getElementById("shareOptions");

            const pageUrl = window.location.href;
            const pageTitle = document.title;
            const shareText = `Mira este contenido: ${pageTitle}`;

            // WhatsApp
            document.getElementById("shareWhatsApp").href = "https://wa.me/?text=" + encodeURIComponent(shareText + "\n" + pageUrl);
            // Facebook
            document.getElementById("shareFacebook").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl);
            // X
            document.getElementById("shareX").href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareText) + "&url=" + encodeURIComponent(pageUrl);
            // LinkedIn
            document.getElementById("shareLinkedIn").href = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(pageUrl);
            // Email
            document.getElementById("shareEmail").href = "mailto:?subject=" + encodeURIComponent(pageTitle) + "&body=" + encodeURIComponent(shareText + "\n\n" + pageUrl);

            shareButton.addEventListener("click", async function (e) {

             e.preventDefault();

             if (!navigator.share) {

              shareOptions.hidden = !shareOptions.hidden;
              return;

             }

             try {

              await navigator.share({
               title: pageTitle,
               text: shareText,
               url: pageUrl
              });

             }
             catch (error) {

              console.log(error.name);
              console.log(error.message);

              shareOptions.hidden = !shareOptions.hidden;

             }

            });

           </script>
          </div>
         </div>
        </div>
        <div class="WPZT-DetCont--Default BKTT-EventoDetalle">
         <div class="container">
          <div class="row g-4">
           <div class="BKTT-WebPartZone-H75--L col-lg-9">
            <nav class="BKTT-EventoDetalle__tabsWrapper" aria-label="Contenido del evento">
             <ul class="BKTT-EventoDetalle__tabs">
              <li><a href="#descripcion" class="is-active">Descripción</a>
              </li>
              <li><a href="#localizacion">Localización</a></li>
             </ul>
            </nav>
            <section id="descripcion" class="BKTT-EventoDetalle__section" itemprop="description"
            role="region" aria-labelledby="descripcion-heading">
             <dl class="BKTT-EventoDetalle__meta" aria-label="Información del evento">
              <biscaytik:HideWhenBlank ID="HideWhenBlank26" runat="server" FieldNameToCheck="TurismoEventStart">
               <div class="BKTT-EventoDetalle__metaItem">
                <dt class="sr-only">Fecha de inicio (y fin)</dt>
                <dd>
                 <span class="BKTT-Icon fa-light fa-calendar"></span>

                 <time class="BKTT-Label" itemprop="startDate"><SharePointWebControls:FieldValue ID="FieldValue26" FieldName="TurismoEventStart" runat="server" /></time>
                 <span>&nbsp;-&nbsp;</span>
                 <span class="BKTT-Label">
                  <biscaytik:HideWhenBlank ID="HideWhenBlank27" runat="server" FieldNameToCheck="TurismoEventEnd"></span>
                  <time itemprop="endDate"><SharePointWebControls:FieldValue ID="FieldValue27" FieldName="TurismoEventEnd" runat="server" /></time>
                 </biscaytik:HideWhenBlank>
                </dd>
               </div>
              </biscaytik:HideWhenBlank>
              <biscaytik:HideWhenBlank ID="HideWhenBlank28" runat="server" FieldNameToCheck="HoraInicio">
               <div class="BKTT-EventoDetalle__metaItem">
                <dt class="sr-only">Hora de inicio (y fin)</dt>
                <dd>
                 <span class="BKTT-Icon fa-light fa-clock"></span>
                 <SharePointWebControls:TextField ID="TextField28" FieldName="HoraInicio" runat="server" />
                 <biscaytik:HideWhenBlank ID="HideWhenBlank29" runat="server" FieldNameToCheck="HoraFin">
                  &nbsp;-&nbsp;
                  <SharePointWebControls:TextField ID="TextField29" FieldName="HoraFin" runat="server" />
                 </biscaytik:HideWhenBlank>
                </dd>
               </div>
              </biscaytik:HideWhenBlank>
              <biscaytik:HideWhenBlank ID="HideWhenBlank30" runat="server" FieldNameToCheck="Location">
               <div class="BKTT-EventoDetalle__metaItem">
                <dt class="sr-only">
                 <asp:Label text="<%$Resources:Turismo2013.Layouts,horario%>" runat="server" />
                </dt>
                <dd>
                 <span class="BKTT-Icon fa-light fa-location-dot" aria-hidden="true"></span>
                 <SharePointWebControls:TextField ID="TextField30" FieldName="Location" runat="server" />
                </dd>
               </div>
              </biscaytik:HideWhenBlank>
             </dl>

             <!-- SERVICIOS DEL EVENTO -->
             <biscaytik:HideWhenBlank ID="HideWhenBlankServicios" runat="server" FieldNameToCheck="TurismoServiciosEvento">
              <div class="BKTT-Tags mt-3 mb-3">
               <biscaytik:ServiciosWebControl id="servicioswc" runat="server" fieldname="TurismoServiciosEvento" listname="ServiciosEvento" />
              </div>
             </biscaytik:HideWhenBlank>

             <script type="text/javascript">
             (function() {
              function mostrarTextosServiciosEvento() {
               var items = document.querySelectorAll("ul.forminputservicios li.forminputservicios img, .BKTT-Tags img");
               items.forEach(function(img) {
                if (img.nextElementSibling && img.nextElementSibling.classList.contains("biscaytik-servicio-nombre")) {
                 return;
                }
                var texto = img.getAttribute("alt") || img.getAttribute("title");
                if (texto) {
                 var span = document.createElement("span");
                 span.className = "biscaytik-servicio-nombre";
                 span.textContent = texto;
                 span.style.marginLeft = "8px";
                 span.style.marginRight = "15px";
                 span.style.verticalAlign = "middle";
                 img.style.verticalAlign = "middle";
                 img.parentNode.appendChild(span);
                }
               });
              }

              if (document.readyState === "loading") {
               document.addEventListener("DOMContentLoaded", mostrarTextosServiciosEvento);
              } else {
               mostrarTextosServiciosEvento();
              }
             })();
             </script>
             <!-- FIN SERVICIOS DEL EVENTO -->

             <biscaytik:HideWhenBlank ID="HideWhenBlank10" runat="server" FieldNameToCheck="TurismoDescripcion">
              <h2 id="descripcion-heading">
               <asp:Label text="<%$Resources:Turismo2013.Layouts,descripcion%>" runat="server" />
              </h2>
              <p>
               <PublishingWebControls:RichHtmlField ID="RichHtmlField3" FieldName="TurismoDescripcion" runat="server" />
              </p>
             </biscaytik:HideWhenBlank>
             <biscaytik:HideWhenBlank ID="HideWhenBlank12" runat="server" FieldNameToCheck="TurismoGrupoGaleria">
              <biscaytik:GalleryContentPageWebPart id="GalleriaContent" runat="server"
               __WebPartId="{C0A48ADF-4184-48DA-BF35-A2237A8C8565}" __MarkupType="vsattributemarkup" WebPart="true"
               Height="" Width=""></biscaytik:GalleryContentPageWebPart>
             </biscaytik:HideWhenBlank>
            </section>
            <section id="localizacion" class="BKTT-EventoDetalle__section" itemprop="location" itemscope
             itemtype="https://schema.org/Place" role="region" aria-labelledby="localizacion-heading">
             <h2 id="localizacion-heading">Localización</h2>
             <dl>
              <biscaytik:HideWhenBlank ID="HideWhenBlank22" runat="server" FieldNameToCheck="WorkAddress">
               <!--SS dirección con microdatos PostalAddress-->
               <dt class="sr-only">
                <span class="BKTT-Label">Dirección</span>
               </dt>
               <dd>
                <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress" class="bktt_whitesp">
                 <SharePoint:FieldValue ID="FieldValue22" runat="server" FieldName="WorkAddress" />
                </div>
                <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                </div>
               </dd>
              </biscaytik:HideWhenBlank>

              <!-- Mapa -->
              <biscaytik:HideWhenBlank ID="HideWhenBlank23" runat="server" FieldNameToCheck="TurismoCoordenadas">
               <!--SS mapa ejem-->
               <!-- CSS de Leaflet -->
               <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
               <div id="map"
                style="width: 100%; height: 500px; overflow: hidden; background-color: var(--grey__background); margin-bottom: 2rem;">
               </div>

               <!-- JS de Leaflet -->
               <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

               <script>
                // Inicializar el mapa centrado en unas coordenadas y un nivel de zoom
                var map = L.map('map').setView([<SharePoint:FieldValue ID="FieldValue23" runat="server"
                 FieldName="TurismoCoordenadas" />], 13);

                // Añadir la capa base de OpenStreetMap
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                 maxZoom: 19,
                 attribution: '© OpenStreetMap'
                }).addTo(map);

                // Añadir un marcador
                var marker = L.marker([<SharePoint:FieldValue ID="FieldValue24" runat="server"
                 FieldName="TurismoCoordenadas" />]).addTo(map);

                marker.bindPopup("<b>¡Hola!</b><br />Estamos en la ubicación.").openPopup();

                setTimeout(function () {
                 map.invalidateSize();
                }, 500);
               </script>
              </biscaytik:HideWhenBlank>
              <!--end SS mapa ejem-->
              <!--end SS dirección con microdatos-->

              <div class="row">
               <div class="col">
                <biscaytik:HideWhenBlank ID="HideWhenBlank4" runat="server" FieldNameToCheck="TurismoWeb">
                 <dt class="sr-only">
                  <span class="BKTT-Label">
                   <asp:Label text="Web" runat="server" />
                  </span>
                 </dt>
                 <dd class="bktt-meta-web">
                  <span class="BKTT-Link">
                   <span class="BKTT-Icon fa-light fa-browser"></span>
                   <PublishingWebControls:RichLinkField ID="RichLinkField1" FieldName="TurismoWeb" runat="server" />
                  </span>
                 </dd>
                </biscaytik:HideWhenBlank>
               </div>
              </div>
             </dl>
             <div class="editmode">
              <PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server">
               <asp:Label text="IDGaleria" runat="server" />
               <SharePointWebControls:TextField ID="TextField5" FieldName="TurismoGrupoGaleria" runat="server" />
              </PublishingWebControls:EditModePanel>
              <!-- end divider line -->
              <biscaytik:HideWhenBlank ID="HideWhenBlank11" runat="server" FieldNameToCheck="TurismoCoordenadas">
               <div class="mapzonelayout">
                <biscaytik:GMapSingleCoordinateWebPart id="StaticMap" runat="server" Municipality="Mundaka"
                 __WebPartId="{7F294BEE-B080-4E86-B8F1-7E1C069CD5E6}" __MarkupType="vsattributemarkup" WebPart="true"
                 Height="" Width="" ChromeType="None">
                </biscaytik:GMapSingleCoordinateWebPart>
               </div>
              </biscaytik:HideWhenBlank>
             </div>
            </section>
           </div>
           <aside class="BKTT-WebPartZone-H25--R col-lg-3">
            <div class="BKTT-EventoDetalleAside" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer"
             role="region" aria-labelledby="destacado-heading">
             <h2 id="destacado-heading">Destacado</h2>
             <biscaytik:HideWhenBlank ID="HideWhenBlank18" runat="server" FieldNameToCheck="TextoDestacado">
              <p style="white-space: pre-line;">
               <SharePoint:FieldValue ID="FieldValue18" runat="server" FieldName="TextoDestacado" />
              </p>
             </biscaytik:HideWhenBlank>
             <biscaytik:HideWhenBlank ID="HideWhenBlank19" runat="server" FieldNameToCheck="TurismoWebReserva">
              <link itemprop="availability" href="https://schema.org/InStock" />
              <span class="BKTT-Button">
               <span class="BKTT-Icon fa-light fa-link" aria-hidden="true"></span>
               <SharePoint:FieldValue ID="FieldValue19" runat="server" FieldName="TurismoWebReserva" />
              </span>
             </biscaytik:HideWhenBlank>
            </div>
           </aside>
          </div>
          <!--add SS Eventos similares
          <div class="row">
           <section id="relacionados" role="region" aria-labelledby="relacionados-heading">
            <h2 id="relacionados-heading">Relacionados</h2>
            <h3>h3 de prueba en detalle</h3>
            <ul class="BKTT-CardContainer">
             <li class="BKTT-CardContainer__item col " itemscope="" itemtype="https://schema.org/Event">
              <div class="BKTT-CardContainer__card card">
               <figure class="BKTT-Card__figure" itemprop="image"><img
                 src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/puente.jpg"
                 class="card-img-top" alt="Plan cultural de un día" itemprop="image">
               </figure>
               <div class="BKTT-Card__main"><data><small class="BKTT-Card__note"></small></data>
                <h3 class="BKTT-Card__title"><a class="BKTT-Link" href="/plan-cultural-un-dia" itemprop="url"><span
                   class="BKTT-Label" itemprop="name">Plan cultural de un
                   día</span></a></h3>
                <div class="BKTT-Card__Body">
                 <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
                  <div class="BKTT-Date"><span class="BKTT-Icon fa-light fa-calendar me-2"></span><time
                    datetime="2026-01-22" itemprop="startDate">22/01/2026</time><span>
                    - </span><time datetime="2026-01-24" itemprop="endDate">24/01/2026</time>
                  </div>
                 </div>
                 <div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
                  <ul class="BKTT-Tags">
                   <li><span class="BKTT-Icon fa-light fa-location-dot me-2"></span><span class="BKTT-Label">Plaza de la
                     iglesia</span></li>
                  </ul>
                 </div>
                </div>
               </div>
              </div>
             </li>
             <li class="BKTT-CardContainer__item col " itemscope="" itemtype="https://schema.org/Event">
              <div class="BKTT-CardContainer__card card">
               <figure class="BKTT-Card__figure" itemprop="image"><img
                 src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/rio.jpg"
                 class="card-img-top" alt="Plan cultural de un día" itemprop="image">
               </figure>
               <div class="BKTT-Card__main"><data><small class="BKTT-Card__note"></small></data>
                <h3 class="BKTT-Card__title"><a class="BKTT-Link" href="/plan-cultural-un-dia" itemprop="url"><span
                   class="BKTT-Label" itemprop="name">Plan cultural de un
                   día</span></a></h3>
                <div class="BKTT-Card__Body">
                 <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
                  <div class="BKTT-Date"><span class="BKTT-Icon fa-light fa-calendar me-2"></span><time
                    datetime="2026-01-22" itemprop="startDate">22/01/2026</time><span>
                    - </span><time datetime="2026-01-24" itemprop="endDate">24/01/2026</time>
                  </div>
                 </div>
                 <div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
                  <ul class="BKTT-Tags">
                   <li><span class="BKTT-Icon fa-light fa-location-dot me-2"></span><span
                     class="BKTT-Label">Gastronomía</span>
                   </li>
                  </ul>
                 </div>
                </div>
               </div>
              </div>
             </li>
             <li class="BKTT-CardContainer__item col " itemscope="" itemtype="https://schema.org/Event">
              <div class="BKTT-CardContainer__card card">
               <figure class="BKTT-Card__figure" itemprop="image"><img
                 src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/hotel3.jpg"
                 class="card-img-top" alt="Plan cultural de un día" itemprop="image">
               </figure>
               <div class="BKTT-Card__main"><data><small class="BKTT-Card__note"></small></data>
                <h3 class="BKTT-Card__title"><a class="BKTT-Link" href="/plan-cultural-un-dia" itemprop="url"><span
                   class="BKTT-Label" itemprop="name">Plan cultural de un
                   día</span></a></h3>
                <div class="BKTT-Card__Body">
                 <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
                  <div class="BKTT-Date"><span class="BKTT-Icon fa-light fa-calendar me-2"></span><time
                    datetime="2026-01-12" itemprop="startDate">12/01/2026</time>
                  </div>
                 </div>
                 <div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
                  <ul class="BKTT-Tags">
                   <li><span class="BKTT-Icon fa-light fa-location-dot me-2"></span><span
                     class="BKTT-Label">Gastronomía</span>
                   </li>
                  </ul>
                 </div>
                </div>
               </div>
              </div>
             </li>
             <li class="BKTT-CardContainer__item col " itemscope="" itemtype="https://schema.org/Event">
              <div class="BKTT-CardContainer__card card">
               <figure class="BKTT-Card__figure" itemprop="image"><img
                 src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/iglesia.jpg"
                 class="card-img-top" alt="Plan cultural de un día" itemprop="image">
               </figure>
               <div class="BKTT-Card__main"><data><small class="BKTT-Card__note"></small></data>
                <h3 class="BKTT-Card__title"><a class="BKTT-Link" href="/plan-cultural-un-dia" itemprop="url"><span
                   class="BKTT-Label" itemprop="name">Plan cultural de un
                   día</span></a></h3>
                <div class="BKTT-Card__Body">
                 <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
                  <div class="BKTT-Date"><span class="BKTT-Icon fa-light fa-calendar me-2"></span><time
                    datetime="2026-01-12" itemprop="startDate">12/01/2026</time>
                  </div>
                 </div>
                 <div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
                  <ul class="BKTT-Tags">
                   <li><span class="BKTT-Icon fa-light fa-location-dot me-2"></span><span
                     class="BKTT-Label">Gastronomía</span>
                   </li>
                  </ul>
                 </div>
                </div>
               </div>
              </div>
             </li>
            </ul>
           </section>
          </div>
          end add SS Eventos similares-->
         </div>
        </div>
        <!--add SS interesante
        <section class="WPZB-HTML--FOOTER BKTT-EventoDetalleInterest">
         <div class="BKTT-CardGrid" style="background-color: var(--secondary-color);">
          <div class="container">
           <h2 class="BKTT-CardGrid__sectionTitle BKTT-TitleBar">Podría interesarte</h2>
           <div class="row mb-5">
            <div class="BKTT-CardGrid__item"><a class="BKTT-CardGrid__card card h-100" style="cursor: pointer;"><img
               src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/teatro.jpg"
               class="card-img-top" alt="Pub Leku Ona">
              <div class="BKTT-CardGrid__header" style="background-color: var(--custom-white);">
               <h5 class="BKTT-CardGrid__title" style="color: var(--primary-color);">Pub Leku Ona</h5>
              </div>
             </a></div>
            <div class="BKTT-CardGrid__item"><a class="BKTT-CardGrid__card card h-100" style="cursor: pointer;"><img
               src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/hotel1.jpg"
               class="card-img-top" alt="Hotel Boutique Bahía de Plentzia">
              <div class="BKTT-CardGrid__header" style="background-color: var(--custom-white);">
               <h5 class="BKTT-CardGrid__title" style="color: var(--primary-color);">Hotel Boutique
                Bahía de Plentzia</h5>
              </div>
             </a></div>
            <div class="BKTT-CardGrid__item"><a class="BKTT-CardGrid__card card h-100" style="cursor: pointer;"><img
               src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/canoa.jpg"
               class="card-img-top" alt="Comercio X">
              <div class="BKTT-CardGrid__header" style="background-color: var(--custom-white);">
               <h5 class="BKTT-CardGrid__title" style="color: var(--primary-color);">Comercio X</h5>
              </div>
             </a></div>
           </div>
          </div>
         </div>
        </section>
        end add SS interesante-->

        <script>
         (function () {
          function limpiarTodoDOM() {
           // 1. Limpieza de enlaces de contacto (Web)
           var linksContacto = document.querySelectorAll('#localizacion .BKTT-Link');
           linksContacto.forEach(function (linkSpan) {
            var a = linkSpan.querySelector('a');
            var esValido = false;

            if (a) {
             var href = (a.getAttribute('href') || '').trim();
             var clonA = a.cloneNode(true);
             clonA.querySelectorAll('.BKTT-Icon, svg, i, span[class*="fa-"]').forEach(function (ic) { ic.remove(); });
             var txtA = clonA.textContent.replace(/[\s\u00A0\u200B\n\r\t]+/g, '').trim();
             if (href && href !== '#' && href.indexOf('javascript') !== 0 && (txtA.length > 0 || a.querySelector('img'))) {
              esValido = true;
             }
            }

            if (!esValido) {
             var dd = linkSpan.closest('dd');
             if (dd) {
              dd.style.setProperty('display', 'none', 'important');
              var dt = dd.previousElementSibling;
              if (dt && dt.tagName === 'DT') dt.style.setProperty('display', 'none', 'important');
             }
            }
           });

           // 2. Limpieza universal de cualquier otro elemento con icono en toda la página
           var itemsConIcono = document.querySelectorAll('.BKTT-EventoDetalle__metaItem, .BKTT-Button, dl dd, .BKTT-Tags li');
           itemsConIcono.forEach(function (elem) {
            if (elem.querySelector('.BKTT-Link')) return;

            var tieneDato = false;
            var clon = elem.cloneNode(true);
            clon.querySelectorAll('.BKTT-Icon, svg, i, span[class*="fa-"], dt, [id$="_label"], .sr-only, script, style').forEach(function (el) { el.remove(); });
            var txt = clon.textContent.replace(/[\s\u00A0\u200B\n\r\t]+/g, '').trim();

            if (txt.length > 0) {
             tieneDato = true;
            }

            if (!tieneDato) {
             elem.style.setProperty('display', 'none', 'important');
             var prevDt = elem.previousElementSibling;
             if (prevDt && prevDt.tagName === 'DT') prevDt.style.setProperty('display', 'none', 'important');
            } else {
             elem.style.removeProperty('display');
            }
           });

           // 3. Ocultar columnas (.col) en localizacion si todos sus dd están ocultos
           var secLoc = document.getElementById('localizacion');
           if (secLoc) {
            secLoc.querySelectorAll('.row .col').forEach(function (col) {
             var dds = col.querySelectorAll('dd');
             if (dds.length > 0) {
              var ddsVisibles = Array.prototype.filter.call(dds, function (d) {
               return d.style.display !== 'none';
              });
              if (ddsVisibles.length === 0) {
               col.style.setProperty('display', 'none', 'important');
              } else {
               col.style.removeProperty('display');
              }
             }
            });

            // 4. Evaluar si la sección Localización debe mostrarse o esconderse
            var spAddressField = secLoc.querySelector('[itemprop="address"] span, [itemprop="address"]');
            var textoSP = '';
            if (spAddressField) {
             var clonAddr = spAddressField.cloneNode(true);
             clonAddr.querySelectorAll('.BKTT-Icon, svg, i, span[class*="fa-"]').forEach(function (i) { i.remove(); });
             textoSP = clonAddr.textContent.replace(/[\s\u00A0\u200B\n\r\t]+/g, '').trim();
            }

            var mapDiv = secLoc.querySelector('#map');
            var tieneMapa = false;
            if (mapDiv) {
             var st = mapDiv.getAttribute('style') || '';
             tieneMapa = st.indexOf('display: none') === -1 && mapDiv.children.length > 0;
            }

            var hayContactosVisibles = false;
            secLoc.querySelectorAll('.row .col').forEach(function (col) {
             if (col.style.display !== 'none') hayContactosVisibles = true;
            });

            if (!textoSP && !tieneMapa && !hayContactosVisibles) {
             secLoc.style.setProperty('display', 'none', 'important');
             var tabLoc = document.querySelector('.BKTT-EventoDetalle__tabs a[href="#localizacion"]');
             if (tabLoc && tabLoc.closest('li')) tabLoc.closest('li').style.setProperty('display', 'none', 'important');
            } else {
             secLoc.style.removeProperty('display');
             var tabLocVis = document.querySelector('.BKTT-EventoDetalle__tabs a[href="#localizacion"]');
             if (tabLocVis && tabLocVis.closest('li')) tabLocVis.closest('li').style.removeProperty('display');
            }
           }

           // 5. Evaluar Descripción
           var secDesc = document.getElementById('descripcion');
           if (secDesc) {
            var clonDesc = secDesc.cloneNode(true);
            clonDesc.querySelectorAll('h1, h2, h3, h4, h5, h6, .BKTT-Icon, svg, i, span[class*="fa-"], dt.sr-only, .sr-only').forEach(function (h) { h.remove(); });
            var descTxt = clonDesc.textContent.replace(/[\s\u00A0\u200B\n\r\t]+/g, '').trim();
            var descMedia = clonDesc.querySelector('img, iframe, .cwp, .card') !== null;
            if (!descTxt && !descMedia) {
             secDesc.style.setProperty('display', 'none', 'important');
             var tabDesc = document.querySelector('.BKTT-EventoDetalle__tabs a[href="#descripcion"]');
             if (tabDesc && tabDesc.closest('li')) tabDesc.closest('li').style.setProperty('display', 'none', 'important');
            } else {
             secDesc.style.removeProperty('display');
             var tabDescVis = document.querySelector('.BKTT-EventoDetalle__tabs a[href="#descripcion"]');
             if (tabDescVis && tabDescVis.closest('li')) tabDescVis.closest('li').style.removeProperty('display');
            }
           }

           // 6. Asignar pestaña activa
           var tabsVisibles = document.querySelectorAll('.BKTT-EventoDetalle__tabs li:not([style*="display: none"]) a');
           document.querySelectorAll('.BKTT-EventoDetalle__tabs a').forEach(function (a) { a.classList.remove('is-active'); });
           if (tabsVisibles.length > 0) {
            tabsVisibles[0].classList.add('is-active');
           } else {
            var nav = document.querySelector('.BKTT-EventoDetalle__tabsWrapper');
            if (nav) nav.style.setProperty('display', 'none', 'important');
           }
          }

          if (document.readyState === 'loading') {
           document.addEventListener('DOMContentLoaded', limpiarTodoDOM);
          } else {
           limpiarTodoDOM();
          }
          window.addEventListener('load', limpiarTodoDOM);
          setTimeout(limpiarTodoDOM, 100);
          setTimeout(limpiarTodoDOM, 400);
          setTimeout(limpiarTodoDOM, 1000);

          if (typeof _spBodyOnLoadFunctionNames !== 'undefined') {
           _spBodyOnLoadFunctionNames.push('limpiarTodoDOMWrapper');
           window.limpiarTodoDOMWrapper = limpiarTodoDOM;
          }
         })();
        </script>
      </asp:Content>