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
						<nav class="BKTT-EventoDetalle__tabsWrapper"
							aria-label="Contenido del evento">
							<ul class="BKTT-EventoDetalle__tabs">
								<li><a href="#servicios" class="is-active"><asp:Literal text="<%$Resources:Turismo2013.Layouts,servicios%>" runat="server" /></a></li>
								<li><a href="#descripcion"><asp:Literal text="<%$Resources:Turismo2013.Layouts,descripcion%>" runat="server" /></a></li>
								<li><a href="#localizacion"><asp:Literal text="<%$Resources:Turismo2013.Layouts,localizacion%>" runat="server" /></a></li>
							</ul>
						</nav>
						<section id="servicios" role="region" aria-labelledby="servicios-heading"
						itemprop="service">
						<h2 id="servicios-heading"><asp:Literal text="<%$Resources:Turismo2013.Layouts,servicios%>" runat="server" /></h2>
						<biscaytik:HideWhenBlank ID="HideWhenBlank9" runat="server" FieldNameToCheck="TurismoServiciosPlaya">
							<div class="BKTT-Tags">
								<biscaytik:ServiciosWebControl id="servicioswc" 
									runat="server" 
									fieldname="TurismoServiciosPlaya" 
									listname="ServiciosPlaya" 
									ShowText="true" />
							</div>
						</biscaytik:HideWhenBlank>
						</section>
						<script type="text/javascript">
						(function() {
							function mostrarTextosServicios() {
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
										span.style.verticalAlign = "middle";
										img.style.verticalAlign = "middle";
										img.parentNode.appendChild(span);
									}
								});
							}
					
							if (document.readyState === "loading") {
								document.addEventListener("DOMContentLoaded", mostrarTextosServicios);
							} else {
								mostrarTextosServicios();
							}
						})();
						</script>
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
							<biscaytik:HideWhenBlank ID="HideWhenBlank2" runat="server" FieldNameToCheck="TurismoHour">
									<div class="BKTT-EventoDetalle__metaItem">
										<dt class="sr-only">
											<asp:Literal
												text="<%$Resources:Turismo2013.Layouts,horario%>"
												runat="server" />
										</dt>
										<dd>
											<span class="BKTT-Icon fa-light fa-clock"
												aria-hidden="true"></span>
											<span class="BKTT-Label">
												<asp:Literal text="<%$Resources:Turismo2013.Layouts,horario%>" runat="server" />
												<PublishingWebControls:RichHtmlField
													ID="RichHtmlField2" FieldName="TurismoHour"
													runat="server" />
											</span>
										</dd>
									</div>
							</biscaytik:HideWhenBlank>
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
							</dl>
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
								FieldNameToCheck="TurismoEntradaPlaya">
								<div class="BKTT-EventoDetalleAside__price">
									<span><asp:Literal text="<%$Resources:Turismo2013.Layouts,entrada%>" runat="server" /></span>
									<strong>
										<SharePointWebControls:TextField ID="TextField16"
											FieldName="TurismoEntradaPlaya" runat="server" />
									</strong>
								</div>
							</biscaytik:HideWhenBlank>													
						</div>
						</aside>
						<PublishingWebControls:ContentByQueryWebPart 
								ID="CQWP_Rutas" 
								runat="server" 
								Title="Rutas" 
								ChromeType="None"
								WebUrl="~sitecollection/es-es/Rutas2026"
								WebsScope="Recursive"
								ServerTemplate="850"
								ContentTypeName="TurismoRuta2026"
								ContentTypeBeginsWithId="0x010100"
								ItemStyle="Rutas2026"
								GroupStyle="Predeterminado"
								ItemLimit="4"
								UseCopyDisplayStyle="True"
								CommonViewFields="TextoDestacado,Note;TurismoDuracionRuta,Text;TurismoRutaDificultad,Text;"
								DataMappings="TurismoRutaDificultad:{0f3c5385-a78e-487a-816a-8b9b21fbd750},TurismoRutaDificultad,Choice;|LinkUrl:{94f89715-e097-4e8b-ba79-ea02aa8b7adb},FileRef,Lookup;|HoraInicio:|Description:{9da97a8a-1da5-4a77-98d3-4bc10456e700},Comments,Note;|WebReserva:|TipoEvento_x003a_TitleFR:|AlojamientoEstrellas:|TextoDestacado:{e89f9b83-bec4-421e-b7e3-fd9a24e615da},TextoDestacado,Note;|TurismoDuracionRuta:{389065c1-6782-4402-8a69-0bef72fa6387},TurismoDuracionRuta,Text;|TipoEvento_x003a_TitleEU:|TurismoEventEnd:|SubtituloNoticia:|TipoEvento_x003a_TitleEN:|TipoEvento:|Valoracion:|Title:{fa564e0f-0c70-4ab9-b863-0177e6ddd247},Title,Text;|TipoComida:|TurismoEventoCuando:|ImageUrl:{b9e6f3ae-5632-4b13-b636-9d1a2bd67120},EncodedAbsThumbnailUrl,Computed;{543bc2cf-1f30-488e-8f25-6fe3b689d9ac},PublishingRollupImage,Image;|HoraFin:|TipoEvento_x003a_TitleES:|GastoMedio:|TurismoWebReserva:|TurismoEventStart:|TurismoPrecio:|" />
					
				</div>
			</div>
		</div>
	</div>

	<script>
(function () {
function limpiarSeccion(idSeccion, idEnlaceNav) {
	var sec = document.getElementById(idSeccion);
	var enlace = document.querySelector('.BKTT-EventoDetalle__tabs a[href="#' + idSeccion + '"]');
	if (!sec) return;

	// Clonamos el elemento para verificar si tiene contenido útil más allá de su propio h2
	var clone = sec.cloneNode(true);
	var h2 = clone.querySelector('h2');
	if (h2) h2.remove();

	// Si quitando el título solo quedan espacios, saltos o está totalmente vacío
	var textoUtil = clone.textContent.replace(/\s+/g, '').trim();
	var tieneImagenes = clone.querySelector('img, iframe, #map, .cwp, .card') !== null;

	if (!textoUtil && !tieneImagenes) {
		sec.style.display = 'none';
		if (enlace) {
			var li = enlace.closest('li');
			if (li) li.style.display = 'none';
		}
	}
}

// Comprobar cada sección
limpiarSeccion('servicios');
limpiarSeccion('descripcion');
limpiarSeccion('localizacion');

// Asignar pestaña activa a la primera que haya quedado visible
var tabsVisibles = document.querySelectorAll('.BKTT-EventoDetalle__tabs li:not([style*="display: none"]) a');
document.querySelectorAll('.BKTT-EventoDetalle__tabs a').forEach(function(a){ a.classList.remove('is-active'); });
if (tabsVisibles.length > 0) {
	tabsVisibles[0].classList.add('is-active');
} else {
	var nav = document.querySelector('.BKTT-EventoDetalle__tabsWrapper');
	if (nav) nav.style.display = 'none';
}
})();
</script>
</asp:Content>