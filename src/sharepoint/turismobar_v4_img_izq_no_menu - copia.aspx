<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="biscaytik" Namespace="Turismo2013.WebParts" Assembly="Turismo2013.WebParts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=9f2cc5471da6bb42" %>
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
							<a class="sr-only sr-only-focusable" href="#maincontent">Saltar al contenido</a>
							<div id="maincontent" role="main" class="page_title2" itemscope
								itemtype="https://schema.org/Event">
								<div class="row">
									<div class="BKTT-WebPartZone-fullWidth--TopContainer col-12">
										<div class=" container">
											<div class="container">
												<nav class="BKTT-Breadcrumb__list BKTT-Breadcrumb">
													<biscaytik:ExtendedBreadcrumb ShowCurrentPage="false"
														SiteCollectionWeb="false" id="ExtendedBreadcrumb1" runat="server" />
												</nav>
											</div>
										</div>
										<figure class="BKTT-FigureImg" itemprop="image" itemscope
											itemtype="https://schema.org/ImageObject">
											<biscaytik:HideWhenBlank ID="HideWhenBlank21" runat="server"
												FieldNameToCheck="PublishingRollupImage">
												<PublishingWebControls:RichImageField ID="RichImageField21"
													FieldName="PublishingRollupImage" AllowHyperLinks="false"
													runat="server" />
											</biscaytik:HideWhenBlank>
										</figure>
										<div class="BKTT-EventoDetalle__header container mt-5">
											<div class="BKTT-EventoDetalle__heading">
												<h1 class="BKTT-EventoDetalle__title" itemprop="name">
													<span class="BKTT-Icon fa-light fa-plate-utensils"></span>
													<SharePointWebControls:TextField ID="TextField1" runat="server"
														FieldName="Title" />
												</h1>
											</div>
											<button class="BKTT-EventoDetalle__share" type="button"
												aria-label="Compartir evento"><span
													class="BKTT-Icon fa-light fa-arrow-up-from-bracket"
													aria-hidden="true"></span></button>
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
														<li><a href="#descripcion" class="is-active">Descripción</a>
														</li>
														<li><a href="#localizacion">Localización</a></li>
														<li><a href="#relacionados">Relacionados</a></li>
													</ul>
												</nav>
												<section id="descripcion" class="BKTT-EventoDetalle__section"
													itemprop="description" role="region"
													aria-labelledby="descripcion-heading">
													<dl class="BKTT-EventoDetalle__meta"
														aria-label="Información del evento">
														<biscaytik:HideWhenBlank ID="HideWhenBlank15" runat="server" FieldNameToCheck="TipoComida">
															<div class="BKTT-EventoDetalle__metaItem">
																<dt class="sr-only">Tipo de comida</dt>
																<dd>
																	<span class="BKTT-Icon fa-light fa-plate-utensils"></span>
																	<SharePointWebControls:TextField ID="TextField15"
																		FieldName="TipoComida"
																		runat="server" />
																</dd>
															</div>
														</biscaytik:HideWhenBlank>
														<biscaytik:HideWhenBlank ID="HideWhenBlank24" runat="server" FieldNameToCheck="GastoMedio">
															<div class="BKTT-EventoDetalle__metaItem">
																<dt class="sr-only">Gasto medio</dt>
																<dd>
																	<SharePointWebControls:TextField ID="TextField24"
																		FieldName="GastoMedio"
																		runat="server" /> €/persona
																</dd>
															</div>
														</biscaytik:HideWhenBlank>
														<biscaytik:HideWhenBlank ID="HideWhenBlank25" runat="server" FieldNameToCheck="Opcion_x0020_destacada">
															<div class="BKTT-EventoDetalle__metaItem">
																<dt class="sr-only">Opción destacada</dt>
																<dd>
																	<SharePointWebControls:TextField ID="TextField25"
																		FieldName="Opcion_x0020_destacada"
																		runat="server" />
																</dd>
															</div>
														</biscaytik:HideWhenBlank>
														<biscaytik:HideWhenBlank ID="HideWhenBlank2" runat="server" FieldNameToCheck="TurismoHour">
															<div class="BKTT-EventoDetalle__metaItem">
																<dt class="sr-only">
																	<asp:Label
																		text="<%$Resources:Turismo2013.Layouts,horario%>"
																		runat="server" />
																</dt>
																<dd>
																	<span class="BKTT-Icon fa-light fa-clock"
																		aria-hidden="true"></span>
																	<span class="BKTT-Label">
																		<asp:Label text="Horario" runat="server" />
																		<PublishingWebControls:RichHtmlField
																			ID="RichHtmlField2" FieldName="TurismoHour"
																			runat="server" />
																	</span>
																</dd>
															</div>
														</biscaytik:HideWhenBlank>
													</dl>
													<biscaytik:HideWhenBlank ID="HideWhenBlank9" runat="server"
														FieldNameToCheck="ServiciosComer">
														<span class="BKTT-Label">
															<asp:Label text="Servicios" runat="server" />
														</span>
														<div class="BKTT-Tags">
															<biscaytik:ServiciosWebControl id="servicioswc"
																runat="server" fieldname="ServiciosComer"
																listname="ServiciosComer" />
														</div>
													</biscaytik:HideWhenBlank>
													<biscaytik:HideWhenBlank ID="HideWhenBlank10" runat="server"
														FieldNameToCheck="TurismoDescripcion">
														<h2 id="descripcion-heading">
															<asp:Label text="<%$Resources:Turismo2013.Layouts,descripcion%>"
																runat="server" />
														</h2>
														<p>
															<PublishingWebControls:RichHtmlField ID="RichHtmlField3"
																FieldName="TurismoDescripcion" runat="server" />
														</p>
													</biscaytik:HideWhenBlank>
													<biscaytik:HideWhenBlank ID="HideWhenBlank20" runat="server"
														FieldNameToCheck="TurismoMenu">
														<a class="BKTT-Collapse" data-bs-toggle="collapse"
															href="#collapseMenu" role="button" aria-expanded="false"
															aria-controls="collapseMenu">Ver menú completo
															<span class="BKTT-Icon fa-light fa-chevron-down ms-2">
															</span>
														</a>
														<div class="collapse mt-3" id="collapseMenu">
															<h3>Especialidades</h3>
															<PublishingWebControls:RichHtmlField ID="RichHtmlField20"
																FieldName="TurismoMenu" runat="server" />
														</div>
													</biscaytik:HideWhenBlank>
													<biscaytik:HideWhenBlank ID="HideWhenBlank12" runat="server" FieldNameToCheck="TurismoGrupoGaleria">
														<biscaytik:GalleryContentPageWebPart id="GalleriaContent" runat="server" __WebPartId="{C0A48ADF-4184-48DA-BF35-A2237A8C8565}" __MarkupType="vsattributemarkup" WebPart="true" Height="" Width=""></biscaytik:GalleryContentPageWebPart>
													</biscaytik:HideWhenBlank>
												</section>

												<section id="localizacion" class="BKTT-EventoDetalle__section"
													itemprop="location" itemscope itemtype="https://schema.org/Place"
													role="region" aria-labelledby="localizacion-heading">
													<h2 id="localizacion-heading">Localización</h2>
													<dl>
														<biscaytik:HideWhenBlank ID="HideWhenBlank22" runat="server"
															FieldNameToCheck="WorkAddress">
															<!--SS dirección con microdatos PostalAddress-->
															<dt class="sr-only">
																<span class="BKTT-Label">Dirección</span>
															</dt>
															<dd>
																<div itemprop="address" itemscope
																	itemtype="https://schema.org/PostalAddress">
																	<SharePoint:FieldValue ID="FieldValue22" runat="server"
																		FieldName="WorkAddress" />
																</div>
																<div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
																</div>
															</dd>
														</biscaytik:HideWhenBlank>

														<!--SS mapa ejem-->
														<!-- CSS de Leaflet -->
														<link rel="stylesheet"
															href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

														<!-- Mapa -->
														<biscaytik:HideWhenBlank ID="HideWhenBlank23" runat="server"
															FieldNameToCheck="TurismoCoordenadas">
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
	
																marker.bindPopup("<b>¡Hola!</b><br />Estamos en la ubicación.").openPopup();
	
																setTimeout(function () {
																	map.invalidateSize();
																}, 500);
															</script>
														</biscaytik:HideWhenBlank>
														<!--end SS mapa ejem-->
														<!--end SS dirección con microdatos-->

														<div class="row">
															<biscaytik:HideWhenBlank ID="HideWhenBlank3"
																runat="server" FieldNameToCheck="TurismoPhone">
																<div class="col">

																	<dt class="sr-only">
																		<span class="BKTT-Label">
																			<asp:Label text="Teléfono" runat="server" />
																		</span>
																	</dt>
																	<dd>
																		<span
																			class="BKTT-Icon fa-light fa-mobile"></span>
																		<SharePointWebControls:TextField ID="TextField2"
																			FieldName="TurismoPhone" runat="server" />
																	</dd>
																
																</div>
															</biscaytik:HideWhenBlank>
															<div class="col">
																<biscaytik:HideWhenBlank ID="HideWhenBlank4"
																	runat="server" FieldNameToCheck="TurismoWeb">
																	<dt class="sr-only">
																		<span class="BKTT-Label">
																			<asp:Label text="Web" runat="server" />
																		</span>
																	</dt>
																	<dd>
																		<span
																			class="BKTT-Icon fa-light fa-browser"></span>
																		<span class="BKTT-Link">
																			<PublishingWebControls:RichLinkField
																				ID="RichLinkField1"
																				FieldName="TurismoWeb" runat="server" />
																		</span>
																	</dd>
																</biscaytik:HideWhenBlank>
																<biscaytik:HideWhenBlank ID="HideWhenBlank5"
																	runat="server" FieldNameToCheck="TurismoMail">
																	<dt class="sr-only">
																		<span class="BKTT-Label">
																			<asp:Label text="Email" runat="server" />
																		</span>
																	</dt>
																	<dd>
																		<span
																			class="BKTT-Icon fa-light fa-envelope"></span>
																		<span class="BKTT-Link">
																			<SharePointWebControls:TextField
																				ID="TextField3" FieldName="TurismoMail"
																				runat="server" />
																		</span>
																	</dd>
																</biscaytik:HideWhenBlank>
															</div>
															<div class="col">
																<biscaytik:HideWhenBlank ID="HideWhenBlank6"
																	runat="server" FieldNameToCheck="TurismoFacebook">
																	<dt class="sr-only">
																		<span class="BKTT-Label">
																			<asp:Label text="Facebook: "
																				runat="server" />
																		</span>
																	</dt>
																	<dd>
																		<span
																			class="BKTT-Icon fa-brands fa-facebook"></span>
																		<span class="BKTT-Link">
																			<PublishingWebControls:RichLinkField
																				ID="RichLinkField2"
																				FieldName="TurismoFacebook"
																				runat="server" />
																		</span>
																	</dd>
																</biscaytik:HideWhenBlank>
																<biscaytik:HideWhenBlank ID="HideWhenBlank7"
																	runat="server" FieldNameToCheck="TurismoTwitter">
																	<dt class="sr-only">
																		<span class="BKTT-Label">
																			<asp:Label text="Twitter:" runat="server" />
																		</span>
																	</dt>
																	<dd>
																		<span
																			class="BKTT-Icon fa-light fa-square-rss"></span>
																		<span class="BKTT-Link">
																			<PublishingWebControls:RichLinkField
																				ID="RichLinkField3"
																				FieldName="TurismoTwitter"
																				runat="server" />
																		</span>
																	</dd>
																</biscaytik:HideWhenBlank>
															</div>
														</div>
													</dl>
													<div class="editmode">
														<PublishingWebControls:EditModePanel ID="EditModePanel2"
															runat="server">
															<asp:Label text="IDGaleria" runat="server" />
															<SharePointWebControls:TextField ID="TextField5"
																FieldName="TurismoGrupoGaleria" runat="server" />
															<asp:Label text="Coordenadas" runat="server" />
															<SharePointWebControls:TextField ID="TextField6"
																FieldName="TurismoCoordenadas" runat="server" />
															<asp:Label text="Servicios" runat="server" />
															<SharePointWebControls:MultipleLookupField
																ID="MultipleLookupField1" FieldName="ServiciosComer"
																runat="server">
															</SharePointWebControls:MultipleLookupField>
															<asp:Label text="miniatura" runat="server">
															</asp:Label>
														</PublishingWebControls:EditModePanel>
														<!-- end divider line -->
														<biscaytik:HideWhenBlank ID="HideWhenBlank11" runat="server"
															FieldNameToCheck="TurismoCoordenadas">
															<div class="mapzonelayout">
																<biscaytik:GMapSingleCoordinateWebPart id="StaticMap"
																	runat="server" Municipality="Mundaka"
																	__WebPartId="{7F294BEE-B080-4E86-B8F1-7E1C069CD5E6}"
																	__MarkupType="vsattributemarkup" WebPart="true"
																	Height="" Width="" ChromeType="None">
																</biscaytik:GMapSingleCoordinateWebPart>
															</div>
														</biscaytik:HideWhenBlank>
													</div>
												</section>
											</div>
											<aside class="BKTT-WebPartZone-H25--R col-lg-3">
												<div class="BKTT-EventoDetalleAside" itemprop="offers" itemscope=""
													itemtype="https://schema.org/Offer" role="region"
													aria-labelledby="destacado-heading">
													<h2 id="destacado-heading">Destacado</h2>
													<biscaytik:HideWhenBlank ID="HideWhenBlank18" runat="server"
														FieldNameToCheck="Texto_x0020_destacado">
														<p>
															<SharePoint:FieldValue ID="FieldValue18" runat="server"
																FieldName="Texto_x0020_destacado" />
														</p>
													</biscaytik:HideWhenBlank>
													<biscaytik:HideWhenBlank ID="HideWhenBlank16" runat="server"
														FieldNameToCheck="GastoMedio">
														<div class="BKTT-EventoDetalleAside__price">
															<span>por persona</span>
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
						</asp:Content>