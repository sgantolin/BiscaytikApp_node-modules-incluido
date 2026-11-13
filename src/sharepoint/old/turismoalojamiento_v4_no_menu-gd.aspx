<%@ Page language="C#"
	Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c"
	meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="biscaytik" Namespace="Turismo2013.WebParts" Assembly="Turismo2013.WebParts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=9f2cc5471da6bb42" %>
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
	<SharePointWebControls:FieldValue id="PageStylesField" FieldName="HeaderStyleDefinitions"
		runat="server" />
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
		SiteMapProviders="CurrentNavigationSwitchableProvider" RenderCurrentNodeAsLink="false"
		PathSeparator="" CssClass="s4-breadcrumb" NodeStyle-CssClass="s4-breadcrumbNode"
		CurrentNodeStyle-CssClass="s4-breadcrumbCurrentNode"
		RootNodeStyle-CssClass="s4-breadcrumbRootNode" NodeImageOffsetX=0 NodeImageOffsetY=289
		NodeImageWidth=16 NodeImageHeight=16 NodeImageUrl="/_layouts/15/images/fgimg.png?rev=23"
		HideInteriorRootNodes="true" SkipLinkText="" />
</asp:Content>

<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
	<a class="sr-only sr-only-focusable" href="#maincontent"><asp:Literal text="<%$Resources:Turismo2013.Layouts,saltarAlContenido%>" runat="server" /></a>
	<div id="maincontent" role="main" class="page_title2" itemscope
		itemtype="https://schema.org/Event">
		<div class="row">
			<div class="BKTT-WebPartZone-fullWidth--TopContainer col-12">
				<div class=" container">
					<div class="container">
						<nav class="BKTT-Breadcrumb__list BKTT-Breadcrumb">
							<biscaytik:ExtendedBreadcrumb2026 ShowCurrentPage="false"
								SiteCollectionWeb="false" id="ExtendedBreadcrumb1" runat="server" />
						</nav>
					</div>
				</div>
				<biscaytik:HideWhenBlank ID="HideWhenBlank12" runat="server" FieldNameToCheck="TurismoGrupoGaleria">
					<biscaytik:GalleryContentPageWebPart id="GalleriaContent" runat="server" __WebPartId="{C0A48ADF-4184-48DA-BF35-A2237A8C8565}" __MarkupType="vsattributemarkup" WebPart="true" Height="" Width=""></biscaytik:GalleryContentPageWebPart>
				</biscaytik:HideWhenBlank>
				<div class="BKTT-EventoDetalle__header container mt-5">
					<div class="BKTT-EventoDetalle__heading">
						<h1 class="BKTT-EventoDetalle__title" itemprop="name">
							<span class="BKTT-Icon fa-light fa-plate-utensils"></span>
							<SharePointWebControls:TextField ID="TextField1" runat="server"
								FieldName="Title" />
						</h1>
					</div>
					<!-- Botón de compartir -->
   <div class="share-container">
    <button id="shareButton" class="BKTT-EventoDetalle__share" type="button" aria-label="Compartir evento"><span
      class="BKTT-Icon fa-light fa-arrow-up-from-bracket" aria-hidden="true"></span></button>
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
    document.getElementById("shareFacebook").href = "https://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl);
    // X
    document.getElementById("shareX").href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareText) + "&url=" + encodeURIComponent(pageUrl);
    // LinkedIn
    document.getElementById("shareLinkedIn").href = "https://linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(pageUrl);
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
						<nav class="BKTT-EventoDetalle__tabsWrapper"
							aria-label="Contenido del evento">
							<ul class="BKTT-EventoDetalle__tabs">
								<li><a href="#descripcion" class="is-active"><asp:Literal text="<%$Resources:Turismo2013.Layouts,descripcion%>" runat="server" /></a></li>
								<li><a href="#servicios"><asp:Literal text="<%$Resources:Turismo2013.Layouts,servicios%>" runat="server" /></a></li>
								<li><a href="#localizacion"><asp:Literal text="<%$Resources:Turismo2013.Layouts,localizacion%>" runat="server" /></a></li>
							</ul>
						</nav>
						<section id="descripcion" class="BKTT-EventoDetalle__section"
							itemprop="description" role="region"
							aria-labelledby="descripcion-heading">
							<biscaytik:HideWhenBlank ID="HideWhenBlank10" runat="server"
								FieldNameToCheck="TurismoDescripcion">
								
								<h2 id="descripcion-heading">
									<asp:Literal text="<%$Resources:Turismo2013.Layouts,descripcion%>"
										runat="server" />
								</h2>
							</biscaytik:HideWhenBlank>
							<p>
									<PublishingWebControls:RichHtmlField ID="RichHtmlField3"
										FieldName="TurismoDescripcion" runat="server" />
								</p>
						</section>
						<section id="servicios" role="region"
						aria-labelledby="servicios-heading">
						<h2 id="servicios-heading"><asp:Literal text="<%$Resources:Turismo2013.Layouts,servicios%>" runat="server" /></h2>
						<biscaytik:HideWhenBlank ID="HideWhenBlank9" runat="server"
							FieldNameToCheck="ServiciosAlojamiento">
							<div class="BKTT-Tags">
								<biscaytik:ServiciosWebControl id="servicioswc"
									runat="server" fieldname="ServiciosAlojamiento"
									listname="ServiciosAlojamiento" />
							</div>
						</biscaytik:HideWhenBlank>
										
						<script type="text/javascript">
						(function() {
							function mostrarTextosServiciosAlojamiento() {
								var items = document.querySelectorAll("ul.forminputservicios li.forminputservicios img");
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
								document.addEventListener("DOMContentLoaded", mostrarTextosServiciosAlojamiento);
							} else {
								mostrarTextosServiciosAlojamiento();
							}
						})();
						</script>
						</section>	
						<section id="localizacion" class="BKTT-EventoDetalle__section"
							itemprop="location" itemscope itemtype="https://schema.org/Place"
							role="region" aria-labelledby="localizacion-heading">
							<h2 id="localizacion-heading"><asp:Literal text="<%$Resources:Turismo2013.Layouts,localizacion%>" runat="server" /></h2>
							<dl>
								<biscaytik:HideWhenBlank ID="HideWhenBlank22" runat="server"
									FieldNameToCheck="WorkAddress">
									<!--SS dirección con microdatos PostalAddress-->
									<dt class="sr-only">
										<span class="BKTT-Label"><asp:Literal text="<%$Resources:Turismo2013.Layouts,direccion%>" runat="server" /></span>
									</dt>
									<dd>
										<div itemprop="address" itemscope
											itemtype="https://schema.org/PostalAddress" class="bktt_whitesp">
											<SharePoint:FieldValue ID="FieldValue22" runat="server"
												FieldName="WorkAddress" />
										</div>
										<div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
										</div>
									</dd>
								</biscaytik:HideWhenBlank>

								<!-- Mapa -->
								<biscaytik:HideWhenBlank ID="HideWhenBlank23" runat="server"
									FieldNameToCheck="TurismoCoordenadas">
									<!--SS mapa ejem-->
									<!-- CSS de Leaflet -->
									<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
									<div id="map"
										style="width: 100%; height: 500px; overflow: hidden; background-color: var(--grey__background); margin-bottom: 2rem;">
									</div>

									<!-- JS de Leaflet -->
									<script
										src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

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

										marker.bindPopup("<b><asp:Literal text='<%$Resources:Turismo2013.Layouts,mapaPopupTitulo%>' runat='server' /></b><br /><asp:Literal text='<%$Resources:Turismo2013.Layouts,mapaPopupTexto%>' runat='server' />").openPopup();

										setTimeout(function () {
											map.invalidateSize();
										}, 500);
									</script>
								</biscaytik:HideWhenBlank>
								<!--end SS mapa ejem-->
								<!--end SS dirección con microdatos-->
							</dl>
						</section>
					</div>
						<aside class="BKTT-WebPartZone-H25--R col-lg-3">
						<div class="BKTT-EventoDetalleAside" itemprop="offers" itemscope=""
							itemtype="https://schema.org/Offer" role="region"
							aria-labelledby="destacado-heading">
							<h2 id="destacado-heading"><asp:Literal text="<%$Resources:Turismo2013.Layouts,destacado%>" runat="server" /></h2>
							<biscaytik:HideWhenBlank ID="HideWhenBlank18" runat="server"
								FieldNameToCheck="TextoDestacado">
								<p>
									<SharePoint:FieldValue ID="FieldValue18" runat="server"
										FieldName="TextoDestacado" />
								</p>
							</biscaytik:HideWhenBlank>
							<biscaytik:HideWhenBlank ID="HideWhenBlank16" runat="server"
								FieldNameToCheck="GastoMedio">
								<div class="BKTT-EventoDetalleAside__price">
									<span><asp:Literal text="<%$Resources:Turismo2013.Layouts,porPersona%>" runat="server" /></span>
									<meta itemprop="price" content="15">
									<meta itemprop="priceCurrency" content="EUR">
									<strong>
										<SharePointWebControls:TextField ID="TextField16"
											FieldName="GastoMedio" runat="server" />
										€
									</strong>
								</div>

							</biscaytik:HideWhenBlank>
							<biscaytik:HideWhenBlank ID="HideWhenBlank19" runat="server"
								FieldNameToCheck="TurismoWebReserva">
								<link itemprop="availability"
									href="https://schema.org/InStock" />
								<span class="BKTT-Button">
									<span class="BKTT-Icon fa-light fa-link"
										aria-hidden="true"></span>
									<SharePoint:FieldValue ID="FieldValue19" runat="server"
										FieldName="TurismoWebReserva" />
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
			function limpiarTodoLayout() {
				// 1. Ocultar items huérfanos que solo tengan icono en cualquier parte de la página
				var contenedoresConIcono = document.querySelectorAll('.BKTT-Button, .BKTT-EventoDetalle__metaItem, .BKTT-Detalle__metaItem, .row .col');
				contenedoresConIcono.forEach(function (item) {
					var cloneItem = item.cloneNode(true);
					cloneItem.querySelectorAll('.BKTT-Icon, i, span[class*="fa-"], dt').forEach(function (el) { el.remove(); });
					var texto = cloneItem.textContent.replace(/[\s\u00A0]+/g, '').trim();
					var tieneEnlaceOImg = cloneItem.querySelector('a[href]:not([href="#"]):not([href^="javascript"]), img') !== null;
					if (!texto && !tieneEnlaceOImg) {
						item.style.setProperty('display', 'none', 'important');
					}
				});

				// 2. Comprobar secciones y pestañas de navegación
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

					var clone = sec.cloneNode(true);
					clone.querySelectorAll('h1, h2, h3, h4, h5, h6, .BKTT-Icon, i, span[class*="fa-"], dt.sr-only, .sr-only').forEach(function (el) { el.remove(); });

					var mapDiv = sec.querySelector('#map');
					var tieneMapa = false;
					if (mapDiv) {
						var mapStyle = mapDiv.getAttribute('style') || '';
						tieneMapa = mapStyle.indexOf('display: none') === -1 && mapDiv.children.length > 0;
					}

					var tieneMultimedia = clone.querySelector('img, iframe, .cwp, .card') !== null;
					var textoLimpio = clone.textContent.replace(/[\s\u00A0]+/g, '').trim();

					if (!textoLimpio && !tieneMapa && !tieneMultimedia) {
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
				document.addEventListener('DOMContentLoaded', limpiarTodoLayout);
			} else {
				limpiarTodoLayout();
			}
			window.addEventListener('load', limpiarTodoLayout);
		})();
	</script>
</asp:Content>