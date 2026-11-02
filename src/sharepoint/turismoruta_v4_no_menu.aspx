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
     <%@ Register TagPrefix="biscaytik" Namespace="Turismo2013.WebParts"
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
       <a class="sr-only sr-only-focusable" href="#maincontent"><asp:Literal text="<%$Resources:Turismo2013.Layouts,saltarAlContenido%>" runat="server" />
       </a>
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
          <biscaytik:HideWhenBlank ID="HideWhenBlank12" runat="server" FieldNameToCheck="TurismoGrupoGaleria">
           <figure class="BKTT-FigureImg" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            <biscaytik:GalleryContentPageWebPart id="GalleriaContent" runat="server"
             __WebPartId="{C0A48ADF-4184-48DA-BF35-A2237A8C8565}" __MarkupType="vsattributemarkup" WebPart="true"
             Height="" Width=""></biscaytik:GalleryContentPageWebPart>
           </biscaytik:HideWhenBlank>
         </figure>
          <div class="BKTT-Detalle__header container mt-5">
           <div class="BKTT-Detalle__heading">
            <h1 class="BKTT-Detalle__title" itemprop="name">
             <span class="BKTT-Icon fa-light fa-route"></span>
             <SharePointWebControls:TextField ID="TextField1" runat="server" FieldName="Title" />
            </h1>
           </div>
           <!-- Botón de compartir -->
           <div class="share-container">
            <button id="shareButton" class="BKTT-EventoDetalle__share" type="button" aria-label="Compartir ruta">
             <span class="BKTT-Icon fa-light fa-arrow-up-from-bracket" aria-hidden="true"></span></button>
            <div id="shareOptions" class="share-options" hidden>
             <a id="shareWhatsApp" target="_blank" rel="noopener noreferrer">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,whatsApp%>" runat="server" />
             </a>
             <a id="shareFacebook" target="_blank" rel="noopener noreferrer">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,facebook%>" runat="server" />
             </a>
             <a id="shareX" target="_blank" rel="noopener noreferrer">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,x%>" runat="server" />
             </a>
             <a id="shareLinkedIn" target="_blank" rel="noopener noreferrer">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,linkedIn%>" runat="server" />
             </a>
             <a id="shareEmail">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,email%>" runat="server" />
             </a>
            </div>
           </div>

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
        <div class="WPZT-DetCont--Default BKTT-Detalle">
         <div class="container">
          <div class="row g-4">
           <div class="BKTT-WebPartZone-H75--L col-lg-9">
            <nav class="BKTT-Detalle__tabsWrapper" aria-label="Contenido del evento">
             <ul class="BKTT-Detalle__tabs">
              <li><a href="#servicios" class="is-active">
                <asp:Literal text="<%$Resources:Turismo2013.Layouts,servicios%>" runat="server" />
               </a></li>
              <li><a href="#descripcion">
                <asp:Literal text="<%$Resources:Turismo2013.Layouts,descripcion%>" runat="server" />
               </a></li>
              <li><a href="#horarios">
                <asp:Literal text="<%$Resources:Turismo2013.Layouts,horarios%>" runat="server" />
               </a></li>
              <li><a href="#itinerario">
                <asp:Literal text="<%$Resources:Turismo2013.Layouts,itinerario%>" runat="server" />
               </a></li>
             </ul>
            </nav>
            <section id="servicios" role="region" aria-labelledby="servicios-heading">
             <div class="BKTT-Deta">
              <span class="BKTT-Icon fa-light fa-route me-2"></span>
              <span class="BKTT-Label" itemprop="distance">
               <SharePoint:FieldValue ID="FVDistanciaRuta" FieldName="TurismoDistanciaRuta" runat="server" />
              </span>
              <span style="vertical-align:middle;"> Km</span>
             </div>

             <div class="BKTT-Deta">
              <span class="BKTT-Icon fa-light fa-comment me-2"></span>
              <span class="BKTT-Label" itemprop="inLanguage">
               <SharePoint:FieldValue ID="FVIdiomaRuta" FieldName="TurismoIdiomaRuta" runat="server" />
              </span>
             </div>

             <div class="BKTT-Deta">
              <span class="BKTT-Icon fa-light fa-hourglass me-2"></span>
              <span class="BKTT-Label" itemprop="duration">
               <SharePoint:FieldValue ID="FVDuracionRuta" FieldName="TurismoDuracionRuta" runat="server" />
              </span>
             </div>
             <h2 id="servicios-heading" class="mt-3">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,servicios%>" runat="server" />
             </h2>
             <biscaytik:HideWhenBlank ID="HideWhenBlank9" runat="server" FieldNameToCheck="TurismoServiciosRuta">
              <div class="BKTT-Tags">
               <biscaytik:ServiciosWebControl id="servicioswc" runat="server" fieldname="TurismoServiciosRuta"
                listname="ServiciosRuta" />
              </div>
             </biscaytik:HideWhenBlank>

             <script type="text/javascript">
              function mostrarTextosServiciosRuta() {
               var items = document.querySelectorAll("#servicios .BKTT-Tags img, ul.forminputservicios li.forminputservicios img");
               items.forEach(function (img) {
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
              mostrarTextosServiciosRuta();
              document.addEventListener("DOMContentLoaded", mostrarTextosServiciosRuta);
              window.addEventListener("load", mostrarTextosServiciosRuta);
             </script>
            </section>
            <section id="descripcion" class="BKTT-EventoDetalle__section" role="region" itemprop="description"
             aria-labelledby="descripcion-heading">
             <biscaytik:HideWhenBlank ID="HideWhenBlank10" runat="server" FieldNameToCheck="TurismoDescripcion">
              <h2 id="descripcion-heading">
               <asp:Literal text="<%$Resources:Turismo2013.Layouts,descripcion%>" runat="server" />
              </h2>
             </biscaytik:HideWhenBlank>
             <p>
              <PublishingWebControls:RichHtmlField ID="RichHtmlField3" FieldName="TurismoDescripcion" runat="server" />
             </p>
            </section>
            <section id="horarios" role="region" aria-labelledby="horarios-heading">
             <h2 id="horarios-heading">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,horarios%>" runat="server" />
             </h2>
             <!-- Origen de datos (Ocultos para consumo del script) -->
             <div style="display:none;" aria-hidden="true">
              <div id="raw-data-manana">
               <SharePointWebControls:FieldValue ID="fvManana" FieldName="RutaHoraManana" runat="server" />
              </div>
              <div id="raw-data-tarde">
               <SharePointWebControls:FieldValue ID="fvTarde" FieldName="RutaHoraTarde" runat="server" />
              </div>
              <div id="raw-data-noche">
               <SharePointWebControls:FieldValue ID="fvNoche" FieldName="RutaHoraNoche" runat="server" />
              </div>
             </div>

             <!-- Pestañas -->
             <div class="BKTT-HorariosTabs" id="BKTT-HorariosTabs" role="tablist" style="display:none;">
              <button type="button" class="BKTT-HorariosTab" data-period="manana" role="tab" aria-selected="false">
               <asp:Literal text="<%$Resources:Turismo2013.Layouts,manana%>" runat="server" />
              </button>
              <button type="button" class="BKTT-HorariosTab" data-period="tarde" role="tab" aria-selected="false">
               <asp:Literal text="<%$Resources:Turismo2013.Layouts,tarde%>" runat="server" />
              </button>
              <button type="button" class="BKTT-HorariosTab" data-period="noche" role="tab" aria-selected="false">
               <asp:Literal text="<%$Resources:Turismo2013.Layouts,noche%>" runat="server" />
              </button>
             </div>

             <!-- Contenedor donde se pintan las horas -->
             <div class="BKTT-HorariosContainer" id="BKTT-HorariosContainer" role="tabpanel"></div>

             <!-- Lógica JS -->
             <script type="text/javascript">
              (function () {
               var horariosData = { manana: [], tarde: [], noche: [] };

               function parseLines(elementId) {
                var el = document.getElementById(elementId);
                if (!el) return [];
                var clone = el.cloneNode(true);
                var breaks = clone.querySelectorAll("br, p, div");
                breaks.forEach(function (node) {
                 node.insertAdjacentText("afterend", "\n");
                });
                var text = clone.innerText || clone.textContent || "";
                return text
                 .split(/\r?\n/)
                 .map(function (item) { return item.trim(); })
                 .filter(function (item) { return item.length > 0; });
               }

               function renderHoras(periodo) {
                var container = document.getElementById("BKTT-HorariosContainer");
                if (!container) return;
                container.innerHTML = "";
                var lineas = horariosData[periodo] || [];

                if (lineas.length === 0) {
                 var emptyDiv = document.createElement("div");
                 emptyDiv.className = "BKTT-HorariosEmpty";
                 emptyDiv.innerText = "<asp:Literal text='<%$Resources:Turismo2013.Layouts,noHayHorariosDisponibles%>' runat='server' />";
                 container.appendChild(emptyDiv);
                 return;
                }

                lineas.forEach(function (hora) {
                 var card = document.createElement("div");
                 card.className = "BKTT-HoraItem";
                 card.innerText = hora;
                 container.appendChild(card);
                });
               }

               function initHorarios() {
                horariosData.manana = parseLines("raw-data-manana");
                horariosData.tarde = parseLines("raw-data-tarde");
                horariosData.noche = parseLines("raw-data-noche");

                var tabs = document.querySelectorAll(".BKTT-HorariosTab");
                var primerPeriodoDisponible = null;

                tabs.forEach(function (tab) {
                 var period = tab.getAttribute("data-period");
                 var tieneHoras = horariosData[period] && horariosData[period].length > 0;

                 if (tieneHoras) {
                  tab.style.display = "";
                  if (!primerPeriodoDisponible) primerPeriodoDisponible = period;

                  tab.onclick = function () {
                   tabs.forEach(function (t) {
                    t.classList.remove("is-active");
                    t.setAttribute("aria-selected", "false");
                   });
                   this.classList.add("is-active");
                   this.setAttribute("aria-selected", "true");
                   renderHoras(period);
                  };
                 } else {
                  tab.style.display = "none";
                 }
                });

                var tabsContainer = document.getElementById("BKTT-HorariosTabs");
                var container = document.getElementById("BKTT-HorariosContainer");

                if (primerPeriodoDisponible) {
                 if (tabsContainer) tabsContainer.style.display = "flex";
                 var tabActiva = document.querySelector('.BKTT-HorariosTab[data-period="' + primerPeriodoDisponible + '"]');
                 if (tabActiva) {
                  tabActiva.classList.add("is-active");
                  tabActiva.setAttribute("aria-selected", "true");
                 }
                 renderHoras(primerPeriodoDisponible);
                } else {
                 if (tabsContainer) tabsContainer.style.display = "none";
                 if (container) {
                  container.innerHTML = '<div class="BKTT-HorariosEmpty"><asp:Literal text="<%$Resources:Turismo2013.Layouts,noHayHorariosProgramados%>" runat="server" /></div>';
                 }
                }
               }

               if (typeof _spBodyOnLoadFunctionNames !== "undefined") {
                _spBodyOnLoadFunctionNames.push("initHorariosWidgetWrapper");
                window.initHorariosWidgetWrapper = initHorarios;
               } else if (document.readyState === "complete" || document.readyState === "interactive") {
                setTimeout(initHorarios, 0);
               } else {
                document.addEventListener("DOMContentLoaded", initHorarios);
               }
              })();
             </script>
             <p>
              <PublishingWebControls:RichHtmlField ID="RichHtmlField29" FieldName="TurismoDescripcionRuta"
               runat="server" />
             </p>
            </section>
            <section id="itinerario" class="BKTT-EventoDetalle__section" itemprop="location" itemscope
             itemtype="https://schema.org/Place" role="region" aria-labelledby="itinerario-heading">
             <h2 id="itinerario-heading">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,itinerario%>" runat="server" />
             </h2>
             <!-- Iframe con el mapa -->
             <iframe id="BKTT-WikilocFrame" frameborder="0" scrolling="no" width="100%" height="500"></iframe>
             <div style="color:#777;font-size:11px;line-height:16px;">
              Powered by&nbsp;<a style="color:#4C8C2B;font-size:11px;line-height:16px;" target="_blank"
               href="https://es.wikiloc.com">Wikiloc</a>
             </div>

             <!-- Campo nativo estándar TextField oculto -->
             <span id="BKTT-RutaIdField" style="display:none;">
              <SharePoint:TextField FieldName="TurismoRutaId" runat="server" />
             </span>
            </section>
            <script type="text/javascript">
             (function () {
              var idSpan = document.getElementById("BKTT-RutaIdField");
              var iframe = document.getElementById("BKTT-WikilocFrame");
              if (!idSpan || !iframe) return;

              var rutaId = (idSpan.innerText || idSpan.textContent || "").trim();

              if (rutaId) {
               iframe.src = "https://es.wikiloc.com/wikiloc/embedv2.do?id=" + encodeURIComponent(rutaId) + "&elevation=on&images=on&maptype=H";
              } else {
               var section = document.getElementById("itinerario");
               if (section) section.style.display = "none";
              }
             })();
            </script>
           </div>
           <aside class="BKTT-WebPartZone-H25--R col-lg-3">
            <div class="BKTT-DetalleAside" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer"
             role="region" aria-labelledby="destacado-heading">
             <h2 id="destacado-heading">
              <asp:Literal text="<%$Resources:Turismo2013.Layouts,destacado%>" runat="server" />
             </h2>

             <!-- INICIO: Indicador de Dificultad -->
             <div id="BKTT-DificultadBlock" style="display:none; align-items:center; gap:8px; margin-bottom:12px;">
              <div
               style="width:140px; height:12px; background-color:#e0e0e0; border-radius:6px; overflow:hidden; display:inline-block; vertical-align:middle;">
               <div id="BKTT-BarFill" style="height:100%; width:0%; border-radius:6px;"></div>
              </div>
              <span style="vertical-align:middle;">
               <asp:Literal text="<%$Resources:Turismo2013.Layouts,dificultad%>" runat="server" /> <span
                id="BKTT-TextoDificultad"></span>
              </span>
             </div>

             <span id="BKTT-DificultadField" style="display:none;">
              <SharePoint:FieldValue ID="FieldValueDificultad" FieldName="TurismoRutaDificultad" runat="server" />
             </span>

             <script type="text/javascript">
              document.addEventListener("DOMContentLoaded", function () {
               var fieldSpan = document.getElementById("BKTT-DificultadField");
               var block = document.getElementById("BKTT-DificultadBlock");
               var barFill = document.getElementById("BKTT-BarFill");
               var textoDificultad = document.getElementById("BKTT-TextoDificultad");

               if (!fieldSpan || !block || !barFill || !textoDificultad) return;

               var rawText = (fieldSpan.innerText || fieldSpan.textContent || "").trim();
               if (!rawText) return;

               var normalizado = rawText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

               var porcentaje = 0;
               var color = "";

               if (normalizado.indexOf("muy baja") !== -1) {
                porcentaje = 20;
                color = "#1e7e34"; // Verde oscuro
               } else if (normalizado.indexOf("muy alta") !== -1 || normalizado.indexOf("muy dificil") !== -1) {
                porcentaje = 100;
                color = "#dc3545"; // Rojo
               } else if (normalizado.indexOf("baja") !== -1) {
                porcentaje = 40;
                color = "#28a745"; // Verde claro
               } else if (normalizado.indexOf("media") !== -1) {
                porcentaje = 60;
                color = "#ffc107"; // Amarillo
               } else if (normalizado.indexOf("alta") !== -1 || normalizado.indexOf("dificil") !== -1) {
                porcentaje = 80;
                color = "#fd7e14"; // Naranja rojizo
               }

               if (porcentaje > 0) {
                barFill.style.width = porcentaje + "%";
                barFill.style.backgroundColor = color;
                textoDificultad.textContent = rawText;
                block.style.display = "inline-flex";
               }
              });
             </script>
             <!-- FIN: Indicador de Dificultad -->

             <biscaytik:HideWhenBlank ID="HideWhenBlank18" runat="server" FieldNameToCheck="TextoDestacado">
              <p>
               <SharePoint:FieldValue ID="FieldValue18" runat="server" FieldName="TextoDestacado" />
              </p>
             </biscaytik:HideWhenBlank>

             <biscaytik:HideWhenBlank ID="HideWhenBlank16" runat="server" FieldNameToCheck="GastoMedio">
              <div class="BKTT-EventoDetalleAside__price">
               <span>
                <asp:Literal text="<%$Resources:Turismo2013.Layouts,porPersona%>" runat="server" />
               </span>
               <meta itemprop="price" content="15">
               <meta itemprop="priceCurrency" content="EUR">
               <strong>
                <SharePointWebControls:TextField ID="TextField16" FieldName="GastoMedio" runat="server" />
               </strong>
              </div>
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
         </div>
        </div>
       </div>

       <script>
        (function () {
         function limpiarLayoutRutas() {
          // 1. Limpieza de items huérfanos con icono en #servicios
          var metaItems = document.querySelectorAll('#servicios .BKTT-EventoDetalle__metaItem');
          metaItems.forEach(function (item) {
           var metaVal = item.querySelector('.BKTT-MetaValue');
           var textoVal = metaVal ? metaVal.textContent.replace(/[\s\u00A0]+/g, '').trim() : '';
           if (!textoVal) {
            item.style.setProperty('display', 'none', 'important');
           }
          });

          // 2. Comprobar secciones y pestañas
          var tabLinks = document.querySelectorAll('.BKTT-EventoDetalle__tabs a');
          var firstVisible = null;

          tabLinks.forEach(function (link) {
           var targetId = link.getAttribute('href');
           if (!targetId || targetId.indexOf('#') !== 0) return;

           var sec = document.querySelector(targetId);
           var parentLi = link.closest('li');

           if (!sec) {
            if (parentLi) parentLi.style.setProperty('display', 'none', 'important');
            return;
           }

           var tieneContenido = false;

           if (targetId === '#servicios') {
            var itemsVisibles = sec.querySelectorAll('.BKTT-EventoDetalle__metaItem:not([style*="display: none"])');
            var tieneServicios = sec.querySelector('.BKTT-Tags img') !== null;
            tieneContenido = itemsVisibles.length > 0 || tieneServicios;
           } else if (targetId === '#horarios') {
            var tieneHorasM = (document.getElementById('raw-data-manana') && document.getElementById('raw-data-manana').textContent.replace(/[\s\u00A0]+/g, '').trim().length > 0);
            var tieneHorasT = (document.getElementById('raw-data-tarde') && document.getElementById('raw-data-tarde').textContent.replace(/[\s\u00A0]+/g, '').trim().length > 0);
            var tieneHorasN = (document.getElementById('raw-data-noche') && document.getElementById('raw-data-noche').textContent.replace(/[\s\u00A0]+/g, '').trim().length > 0);
            var richDescRuta = sec.querySelector('p');
            var tieneDescRuta = richDescRuta && richDescRuta.textContent.replace(/[\s\u00A0]+/g, '').trim().length > 0;
            tieneContenido = tieneHorasM || tieneHorasT || tieneHorasN || tieneDescRuta;
           } else if (targetId === '#itinerario') {
            var idSpan = document.getElementById('BKTT-RutaIdField');
            var rutaId = idSpan ? (idSpan.innerText || idSpan.textContent || '').trim() : '';
            tieneContenido = rutaId.length > 0;
           } else {
            var clone = sec.cloneNode(true);
            clone.querySelectorAll('h1, h2, h3, h4, h5, h6, .BKTT-Icon, i, span[class*="fa-"], dt.sr-only, .sr-only').forEach(function (el) { el.remove(); });
            var multimedia = clone.querySelector('img, iframe, .cwp, .card') !== null;
            var textoLimpio = clone.textContent.replace(/[\s\u00A0]+/g, '').trim();
            tieneContenido = textoLimpio.length > 0 || multimedia;
           }

           if (!tieneContenido) {
            sec.style.setProperty('display', 'none', 'important');
            if (parentLi) parentLi.style.setProperty('display', 'none', 'important');
           } else {
            sec.style.removeProperty('display');
            if (parentLi) parentLi.style.removeProperty('display');
            link.classList.remove('is-active');
            if (!firstVisible) firstVisible = link;
           }
          });

          if (firstVisible) {
           firstVisible.classList.add('is-active');
          } else {
           var nav = document.querySelector('.BKTT-EventoDetalle__tabsWrapper');
           if (nav) nav.style.setProperty('display', 'none', 'important');
          }
         }

         if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', limpiarLayoutRutas);
         } else {
          limpiarLayoutRutas();
         }
         window.addEventListener('load', limpiarLayoutRutas);
        })();
       </script>
      </asp:Content>