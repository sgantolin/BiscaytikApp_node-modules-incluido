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
				<div class="BKTT-EventoDetalle__heading">
						<h3 class="BKTT-EventoDetalle__title" itemprop="name">
							<SharePointWebControls:NoteField ID="TextField2" runat="server"
								FieldName="SubtituloNoticia" />
						</h3>
				</div>

				<biscaytik:HideWhenBlank ID="HideWhenBlank26"
					runat="server" FieldNameToCheck="TurismoEventStart">
					<div class="BKTT-EventoDetalle__metaItem">
						<dt class="sr-only">Fecha de inicio</dt>
						<dd>
							<span class="BKTT-Icon fa-light fa-clock"></span>
							<SharePointWebControls:FieldValue ID="FieldValue26"
								FieldName="TurismoEventStart"
								runat="server" />
						</dd>
					</div>
				</biscaytik:HideWhenBlank>

				<!-- BLOQUE DE SERVICIOS / CATEGORÍAS -->
				<biscaytik:HideWhenBlank ID="HideWhenBlankServicios" runat="server"
					FieldNameToCheck="TurismoServiciosNoticia">
					<div class="BKTT-Tags mt-3 mb-3">
						<biscaytik:ServiciosWebControl id="servicioswc"
							runat="server" fieldname="TurismoServiciosNoticia"
							listname="ServiciosNoticias" />
					</div>
				</biscaytik:HideWhenBlank>

				<script type="text/javascript">
				(function() {
					function pintarTextosNoticia() {
						var items = document.querySelectorAll(".BKTT-Tags img, ul.forminputservicios li.forminputservicios img");
						if (!items || items.length === 0) return false;

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
						return true;
					}

					pintarTextosNoticia();
					if (document.readyState === "loading") {
						document.addEventListener("DOMContentLoaded", pintarTextosNoticia);
					}
					var intentos = 0;
					var timer = setInterval(function() {
						intentos++;
						if (pintarTextosNoticia() || intentos > 15) {
							clearInterval(timer);
						}
					}, 200);
				})();
				</script>
				<!-- FIN BLOQUE DE SERVICIOS -->

				<biscaytik:HideWhenBlank ID="HideWhenBlank10" runat="server"
					FieldNameToCheck="TurismoDescripcion">
					<h2 id="descripcion-heading">
						<asp:Literal text="<%$Resources:Turismo2013.Layouts,descripcion%>"
							runat="server" />
					</h2>
					<p>
						<PublishingWebControls:RichHtmlField ID="RichHtmlField3"
							FieldName="TurismoDescripcion" runat="server" />
					</p>
				</biscaytik:HideWhenBlank>

				<div class="BKTT-EventoDetalle__heading">
					<h1 class="BKTT-EventoDetalle__title" itemprop="name">
						<biscaytik:HideWhenBlank ID="HideWhenBlank21" runat="server"
							FieldNameToCheck="ImagenEscritorNoticia">
							<figure class="BKTT-FigureImg" itemprop="image" itemscope
								itemtype="https://schema.org/ImageObject">
								<PublishingWebControls:RichImageField ID="RichImageField21"
									FieldName="ImagenEscritorNoticia" AllowHyperLinks="false"
									runat="server" />
							</figure>
						</biscaytik:HideWhenBlank>
						<SharePointWebControls:TextField ID="TextField3" runat="server"
							FieldName="CreadorNoticia" />
					</h1>
				</div>	
			</div>
		</div>
	</div>
</asp:Content>