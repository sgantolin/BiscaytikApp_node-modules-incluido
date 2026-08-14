<%@ Page language="C#"
	Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c"
	meta:progid="SharePoint.WebPartPage.Document" %>
	<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls"
		Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
		<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages"
			Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
			<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls"
				Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
				%>
				<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation"
					Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
					%>
					<%@Register TagPrefix="biscaytik" Namespace="Turismo2013.WebParts"
						Assembly="Turismo2013.WebParts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=9f2cc5471da6bb42"
						%>
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
							<!--<SharePointWebControls:FieldValue ID="FieldValue1" FieldName="Title" runat="server"/>-->
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
							<div class="page_title2" itemtype="https://schema.org/Event">
								<div class="row">
									<div class="BKTT-WebPartZone-fullWidth--TopContainer col-12">
										<nav class="container">
											<biscaytik:ExtendedBreadcrumb ShowCurrentPage="false"
												SiteCollectionWeb="false" id="ExtendedBreadcrumb1" runat="server" />
										</nav>
										<biscaytik:HideWhenBlank ID="HideWhenBlank21" runat="server"
											FieldNameToCheck="PublishingRollupImage">
											<PublishingWebControls:RichImageField ID="RichImageField21"
												FieldName="PublishingRollupImage" AllowHyperLinks="false"
												runat="server" />
										</biscaytik:HideWhenBlank>
										<div class="BKTT-EventoDetalle__header container mt-5">
											<div class="BKTT-EventoDetalle__heading">
												<h1 class="BKTT-EventoDetalle__title" itemprop="name">
													<SharePointWebControls:TextField ID="TextField1" runat="server"
														FieldName="Title" />
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
														<li><a href="#eventos-similares">Eventos relacionados</a></li>
													</ul>
												</nav>
												<section class="BKTT-EventoDetalle__section" itemprop="description">
													<h2>Descripción</h2>
													<asp:Label text="<%$Resources:Turismo2013.Layouts,descripcion%>"
														runat="server" />
												</section>
												<biscaytik:HideWhenBlank ID="HideWhenBlank15" runat="server"
													FieldNameToCheck="Tipo_x0020_de_x0020_comida">
													<SharePointWebControls:TextField ID="TextField15"
														FieldName="Tipo_x0020_de_x0020_comida" runat="server" />
												</biscaytik:HideWhenBlank>
												<biscaytik:HideWhenBlank ID="HideWhenBlank16" runat="server"
													FieldNameToCheck="Gasto_x0020_medio">
													<SharePointWebControls:TextField ID="TextField16"
														FieldName="Gasto_x0020_medio" runat="server" /> €/persona
												</biscaytik:HideWhenBlank>
												<biscaytik:HideWhenBlank ID="HideWhenBlank12" runat="server"
													FieldNameToCheck="TurismoGrupoGaleria">
													<biscaytik:GalleryContentPageWebPart id="GalleriaContent"
														runat="server"
														__WebPartId="{C0A48ADF-4184-48DA-BF35-A2237A8C8565}"
														__MarkupType="vsattributemarkup" WebPart="true" Height=""
														Width="">
													</biscaytik:GalleryContentPageWebPart>
												</biscaytik:HideWhenBlank>
												<asp:Label text="<%$Resources:Turismo2013.Layouts,horario%>"
													runat="server" />
												<h2>Localización</h2>
												<biscaytik:HideWhenBlank ID="HideWhenBlank17" runat="server"
													FieldNameToCheck="Opcion_x0020_destacada">
													<SharePointWebControls:TextField ID="TextField17"
														FieldName="Opcion_x0020_destacada" runat="server" />
												</biscaytik:HideWhenBlank>

												<biscaytik:HideWhenBlank ID="HideWhenBlank10" runat="server"
													FieldNameToCheck="TurismoDescripcion">
													<PublishingWebControls:RichHtmlField ID="RichHtmlField3"
														FieldName="TurismoDescripcion" runat="server" />
												</biscaytik:HideWhenBlank>

												<biscaytik:HideWhenBlank ID="HideWhenBlank20" runat="server"
													FieldNameToCheck="TurismoMenu">
													Ver menú completo
													<PublishingWebControls:RichHtmlField ID="RichHtmlField20"
														FieldName="TurismoMenu" runat="server" />
												</biscaytik:HideWhenBlank>

												<biscaytik:HideWhenBlank ID="HideWhenBlank2" runat="server"
													FieldNameToCheck="TurismoHour">
													<asp:Label text="Horario" runat="server" />
													<PublishingWebControls:RichHtmlField ID="RichHtmlField2"
														FieldName="TurismoHour" runat="server" />
												</biscaytik:HideWhenBlank>
												<biscaytik:HideWhenBlank ID="HideWhenBlank3" runat="server"
													FieldNameToCheck="TurismoPhone">
													<asp:Label text="Teléfono" runat="server" />
													<SharePointWebControls:TextField ID="TextField2"
														FieldName="TurismoPhone" runat="server" />
												</biscaytik:HideWhenBlank>
												<biscaytik:HideWhenBlank ID="HideWhenBlank4" runat="server"
													FieldNameToCheck="TurismoWeb">
													<asp:Label text="Web" runat="server" />
													<PublishingWebControls:RichLinkField ID="RichLinkField1"
														FieldName="TurismoWeb" runat="server" />
												</biscaytik:HideWhenBlank>
												<biscaytik:HideWhenBlank ID="HideWhenBlank5" runat="server"
													FieldNameToCheck="TurismoMail">
													<asp:Label text="Email" runat="server" />
													<SharePointWebControls:TextField ID="TextField3"
														FieldName="TurismoMail" runat="server" />
												</biscaytik:HideWhenBlank>
												<biscaytik:HideWhenBlank ID="HideWhenBlank6" runat="server"
													FieldNameToCheck="TurismoFacebook">
													<asp:Label text="Facebook: " runat="server" />
													<PublishingWebControls:RichLinkField ID="RichLinkField2"
														FieldName="TurismoFacebook" runat="server" />
												</biscaytik:HideWhenBlank>
												<biscaytik:HideWhenBlank ID="HideWhenBlank7" runat="server"
													FieldNameToCheck="TurismoTwitter">
													<asp:Label text="Twitter:" runat="server" />
													<PublishingWebControls:RichLinkField ID="RichLinkField3"
														FieldName="TurismoTwitter" runat="server" />
												</biscaytik:HideWhenBlank>
												<biscaytik:HideWhenBlank ID="HideWhenBlank9" runat="server"
													FieldNameToCheck="ServiciosComer">
													<asp:Label text="Servicios" runat="server" />
													<biscaytik:ServiciosWebControl id="servicioswc" runat="server"
														fieldname="ServiciosComer" listname="ServiciosComer" />
												</biscaytik:HideWhenBlank>
											</div>
											<aside class="BKTT-WebPartZone-H25--R col-lg-3">
											</aside>
										</div>
									</div>

									<div>
										<div class="editmode">
											<PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server">
												<asp:Label text="IDGaleria" runat="server" />
												<SharePointWebControls:TextField ID="TextField5"
													FieldName="TurismoGrupoGaleria" runat="server" />
												<asp:Label text="Coordenadas" runat="server" />
												<SharePointWebControls:TextField ID="TextField6"
													FieldName="TurismoCoordenadas" runat="server" />
												<asp:Label text="Servicios" runat="server" />
												<SharePointWebControls:MultipleLookupField ID="MultipleLookupField1"
													FieldName="ServiciosComer" runat="server">
												</SharePointWebControls:MultipleLookupField>
												<asp:Label text="miniatura" runat="server"></asp:Label>
											</PublishingWebControls:EditModePanel>
										</div><!-- end divider line -->
										<biscaytik:HideWhenBlank ID="HideWhenBlank11" runat="server"
											FieldNameToCheck="TurismoCoordenadas">
											<div class="mapzonelayout">
												<biscaytik:GMapSingleCoordinateWebPart id="StaticMap" runat="server"
													Municipality="Mundaka"
													__WebPartId="{7F294BEE-B080-4E86-B8F1-7E1C069CD5E6}"
													__MarkupType="vsattributemarkup" WebPart="true" Height="" Width=""
													ChromeType="None"></biscaytik:GMapSingleCoordinateWebPart>
											</div>
										</biscaytik:HideWhenBlank>

										<div>
											Destacado
											<biscaytik:HideWhenBlank ID="HideWhenBlank18" runat="server"
												FieldNameToCheck="Texto_x0020_destacado">
												<div>
													<SharePoint:FieldValue ID="FieldValue18" runat="server"
														FieldName="Texto_x0020_destacado" />
												</div>
											</biscaytik:HideWhenBlank>
											<biscaytik:HideWhenBlank ID="HideWhenBlank19" runat="server"
												FieldNameToCheck="TurismoWeb">
												<SharePoint:FieldValue ID="FieldValue19" runat="server"
													FieldName="TurismoWeb" />
												<div class="clearer" />
											</biscaytik:HideWhenBlank>
										</div>
									</div>
								</div>
							</div>
						</asp:Content>