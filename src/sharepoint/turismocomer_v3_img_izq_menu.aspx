<%@ Page Language="C#"
	Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c"
	meta:progid="SharePoint.WebPartPage.Document" %>

	<%@ Register TagPrefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls"
		Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
		<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages"
			Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
			<%@ Register TagPrefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls"
				Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
				%>
				<%@ Register TagPrefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation"
					Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
					%>
					<%@ Register TagPrefix="biscaytik" Namespace="Turismo2013.WebParts"
						Assembly="Turismo2013.WebParts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=9f2cc5471da6bb42"
						%>
						<asp:content contentplaceholderid="PlaceHolderAdditionalPageHead" runat="server">

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
						</asp:content>

						<asp:content contentplaceholderid="PlaceHolderPageTitle" runat="server">
							<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
						</asp:content>

						<asp:content contentplaceholderid="PlaceHolderPageTitleInTitleArea" runat="server">
							<WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager">
							</WebPartPages:SPProxyWebPartManager>
							<SharePointWebControls:FieldValue ID="FieldValue1" FieldName="Title" runat="server" />
						</asp:content>

						<asp:content contentplaceholderid="PlaceHolderTitleBreadcrumb" runat="server">
							<SharePointWebControls:ListSiteMapPath ID="ListSiteMapPath1" runat="server"
								SiteMapProviders="CurrentNavigationSwitchableProvider" RenderCurrentNodeAsLink="false"
								PathSeparator="" CssClass="s4-breadcrumb" NodeStyle-CssClass="s4-breadcrumbNode"
								CurrentNodeStyle-CssClass="s4-breadcrumbCurrentNode"
								RootNodeStyle-CssClass="s4-breadcrumbRootNode" NodeImageOffsetX=0 NodeImageOffsetY=289
								NodeImageWidth=16 NodeImageHeight=16 NodeImageUrl="/_layouts/15/images/fgimg.png?rev=23"
								HideInteriorRootNodes="true" SkipLinkText="" />
						</asp:content>

						<asp:content contentplaceholderid="PlaceHolderMain" runat="server">

								<div class="BKTT-WebPartZone-fullWidth--TopContainer col-12">
									<div class="container">

										<div class="title">
											<h1>
												<SharePointWebControls:TextField ID="TextField1" runat="server"
													FieldName="Title" />
											</h1>
										</div>

										<div class="pagenation">
											<biscaytik:ExtendedBreadcrumb ShowCurrentPage="false"
												SiteCollectionWeb="false" id="ExtendedBreadcrumb1" runat="server" />
										</div>


									</div>
								</div>

							<div class="container">
								<div class="left_sidebar">
									<div class="sidebar_widget">
										<ul class="arrows_list1">
											<biscaytik:LeftMenuWebControl runat="server" ID="leftmenu">
											</biscaytik:LeftMenuWebControl>
										</ul>
									</div>
								</div>
								<div>
									<biscaytik:HideWhenBlank ID="HideWhenBlank12" runat="server"
										FieldNameToCheck="TurismoGrupoGaleria">
										<div class="porcent33">
											<div class="captioned-image">

												<biscaytik:GalleryContentPageWebPart id="GalleriaContent" runat="server"
													__WebPartId="{C0A48ADF-4184-48DA-BF35-A2237A8C8565}"
													__MarkupType="vsattributemarkup" WebPart="true" Height="" Width="">
												</biscaytik:GalleryContentPageWebPart>


											</div>
											<div class="clearer" style="height:50px;"></div>
										</div>
									</biscaytik:HideWhenBlank>
									<div class="porcent40b">
										<div class="clearer" style="height:50px;"></div>
										<biscaytik:HideWhenBlank ID="HideWhenBlank1" runat="server"
											FieldNameToCheck="TurismoAddress">
											<div class="formlabel">
												<asp:Label text="<%$Resources:Turismo2013.Layouts,direccion%>"
													runat="server" />
											</div>
											<div class="forminput">
												<PublishingWebControls:RichHtmlField ID="RichHtmlField1"
													FieldName="TurismoAddress" runat="server" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>
										<biscaytik:HideWhenBlank ID="HideWhenBlank2" runat="server"
											FieldNameToCheck="TurismoHour">
											<div class="formlabel">
												<asp:Label text="<%$Resources:Turismo2013.Layouts,horario%>"
													runat="server" />
											</div>
											<div class="forminput">
												<PublishingWebControls:RichHtmlField ID="RichHtmlField2"
													FieldName="TurismoHour" runat="server" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>
										<biscaytik:HideWhenBlank ID="HideWhenBlank3" runat="server"
											FieldNameToCheck="TurismoPhone">
											<div class="formlabel">
												<asp:Label text="<%$Resources:Turismo2013.Layouts,telefono%>"
													runat="server" />
											</div>
											<div class="forminput">
												<SharePointWebControls:TextField ID="TextField2"
													FieldName="TurismoPhone" runat="server" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>

										<biscaytik:HideWhenBlank ID="HideWhenBlank4" runat="server"
											FieldNameToCheck="TurismoWeb">
											<div class="formlabel">
												<asp:Label text="Web: " runat="server" />
											</div>
											<div class="forminput">
												<PublishingWebControls:RichLinkField ID="RichLinkField1"
													FieldName="TurismoWeb" runat="server" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>

										<biscaytik:HideWhenBlank ID="HideWhenBlank5" runat="server"
											FieldNameToCheck="TurismoMail">
											<div class="formlabel">
												<asp:Label text="Email:" runat="server" />
											</div>
											<div class="forminput">
												<SharePointWebControls:TextField ID="TextField3" FieldName="TurismoMail"
													runat="server" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>


										<biscaytik:HideWhenBlank ID="HideWhenBlank6" runat="server"
											FieldNameToCheck="TurismoFacebook">
											<div class="formlabel">
												<asp:Label text="Facebook: " runat="server" />
											</div>
											<div class="forminput">
												<PublishingWebControls:RichLinkField ID="RichLinkField2"
													FieldName="TurismoFacebook" runat="server" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>


										<biscaytik:HideWhenBlank ID="HideWhenBlank7" runat="server"
											FieldNameToCheck="TurismoTwitter">
											<div class="formlabel">
												<asp:Label text="Twitter:" runat="server" />
											</div>
											<div class="forminput">
												<PublishingWebControls:RichLinkField ID="RichLinkField3"
													FieldName="TurismoTwitter" runat="server" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>

										<biscaytik:HideWhenBlank ID="HideWhenBlank9" runat="server"
											FieldNameToCheck="TurismoComerServicios">
											<div class="formlabel">
												<asp:Label text="<%$Resources:Turismo2013.Layouts,servicios%>"
													runat="server" />
											</div>
											<div id="forminputservicios">
												<biscaytik:ServiciosWebControl id="servicioswc" runat="server"
													fieldname="TurismoComerServicios" listname="ServiciosComer" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>
										<biscaytik:HideWhenBlank ID="HideWhenBlank10" runat="server"
											FieldNameToCheck="TurismoDescripcion">
											<div class="formlabel">
												<asp:Label text="<%$Resources:Turismo2013.Layouts,descripcion%>"
													runat="server" />
											</div>
											<div class="forminput">
												<PublishingWebControls:RichHtmlField ID="RichHtmlField3"
													FieldName="TurismoDescripcion" runat="server" />
											</div>
											<div class="clearer"></div>
										</biscaytik:HideWhenBlank>

										<div class="editmode">
											<PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server">
												<div class="formlabel">
													<asp:Label text="IDGaleria" runat="server" />
												</div>
												<div class="forminput">
													<SharePointWebControls:TextField ID="TextField5"
														FieldName="TurismoGrupoGaleria" runat="server" />
												</div>
												<div class="clearer"></div>
												<div class="formlabel">
													<asp:Label text="<%$Resources:cms,Turismo2013.Layouts,coordenadas%>"
														runat="server" />
												</div>
												<div class="forminput">
													<SharePointWebControls:TextField ID="TextField6"
														FieldName="TurismoCoordenadas" runat="server" />
												</div>
												<div class="clearer"></div>
												<div class="formlabel">
													<asp:Label text="<%$Resources:Turismo2013.Layouts,servicios%>"
														runat="server" />
												</div>
												<div class="forminput">
													<SharePointWebControls:CheckBoxChoiceField ID="CheckBoxChoiceField1"
														FieldName="TurismoComerServicios" runat="server" />
												</div>
												<div class="clearer"></div>
												<div class="formlabel">
													<asp:Label text="miniatura" runat="server"></asp:Label>
												</div>
												<div>
													<PublishingWebControls:RichImageField
														FieldName="25ea8c57-ffb1-44ec-ada4-220b79540ff6"
														runat="server" />
												</div>
											</PublishingWebControls:EditModePanel>
										</div>


									</div><!-- end section -->

								</div>
								<div class="clearfix divider_dashedv3"></div><!-- end divider line -->
								<biscaytik:HideWhenBlank ID="HideWhenBlank11" runat="server"
									FieldNameToCheck="TurismoCoordenadas">
									<div class="mapzonelayout">
										<biscaytik:GMapSingleCoordinateWebPart id="StaticMap" runat="server"
											Municipality="Mundaka" __WebPartId="{7F294BEE-B080-4E86-B8F1-7E1C069CD5E6}"
											__MarkupType="vsattributemarkup" WebPart="true" Height="" Width=""
											ChromeType="None"></biscaytik:GMapSingleCoordinateWebPart>
									</div>
								</biscaytik:HideWhenBlank>



							</div>



						</asp:content>
						<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls"
							Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
							%>
							<html xmlns:mso="urn:schemas-microsoft-com:office:office"
								xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">

							<head>
								<meta name="ProgId" content="SharePoint.WebPartPage.Document"><!--[if gte mso 9]><SharePointWebControls:ctfieldrefs runat=server Prefix="mso:" FieldList="FileLeafRef,MasterPageDescription,PublishingPreviewImage,PublishingHidden,_PublishingMigratedGuid,PublishingAssociatedContentType,PublishingAssociatedVariations,_dlc_DocId,_dlc_DocIdUrl,_dlc_DocIdPersistId"><xml>
	
	
<mso:CustomDocumentProperties>
<mso:_ModerationStatus msdt:dt="string">3</mso:_ModerationStatus>
<mso:Title msdt:dt="string">Restaurante con menú</mso:Title>
<mso:FSObjType msdt:dt="string">0</mso:FSObjType>
<mso:ContentType msdt:dt="string">Diseño de página</mso:ContentType>
<mso:FileDirRef msdt:dt="string">_catalogs/masterpage</mso:FileDirRef>
<mso:MasterPageDescription msdt:dt="string">Restaurante con menú</mso:MasterPageDescription>
<mso:FileLeafRef msdt:dt="string">turismocomer_v3_img_izq_menu.aspx</mso:FileLeafRef>
<mso:HtmlDesignAssociated msdt:dt="string">FALSE</mso:HtmlDesignAssociated>
<mso:Page_x0020_Layout_x0020_Demo_x0020_Title msdt:dt="string">Restaurante con menú</mso:Page_x0020_Layout_x0020_Demo_x0020_Title>
<mso:PublishingHidden msdt:dt="string">FALSE</mso:PublishingHidden>
<mso:PublishingAssociatedContentType msdt:dt="string">;#TurismoRestaurante;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF3900752DE9D055060D4C86E2CC56CE73E25E00DBBC98CE06E8495AB6DE646E9E08AD4D;#</mso:PublishingAssociatedContentType>
<mso:UIVersion msdt:dt="string">15</mso:UIVersion>
<mso:_dlc_DocId msdt:dt="string">6KPS5YD4PPNF-6-461</mso:_dlc_DocId>
<mso:_dlc_DocIdItemGuid msdt:dt="string">e353b0eb-44fc-404c-bb14-2349bff329f5</mso:_dlc_DocIdItemGuid>
<mso:_dlc_DocIdUrl msdt:dt="string">http://turi.santurtzi.com/_layouts/15/DocIdRedir.aspx?ID=6KPS5YD4PPNF-6-461, 6KPS5YD4PPNF-6-461</mso:_dlc_DocIdUrl>
</mso:CustomDocumentProperties>
</xml></SharePoint:CTFieldRefs><![endif]-->
							</head>