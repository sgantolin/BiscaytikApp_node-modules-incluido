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
       <style type="text/css">
        .v4master #s4-leftpanel {
         display: none;
        }

        .v4master .s4-ca {
         margin-left: 0px;
        }
       </style>
       <SharePointWebControls:CssRegistration
        name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>"
        runat="server" />
       <PublishingWebControls:EditModePanel runat="server" id="editmodestyles">
        <!-- Styles for edit mode only-->
        <SharePointWebControls:CssRegistration
         name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
         After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>"
         runat="server" />
       </PublishingWebControls:EditModePanel>
      </asp:Content>
      <asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
       <SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
      </asp:Content>
      <asp:Content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
       <SharePointWebControls:FieldValue FieldName="Title" runat="server" />
      </asp:Content>
      <asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">

       <div class="BKTT-Listado row">
        <div class="container">
         <nav class="BKTT-Breadcrumb__list BKTT-Breadcrumb">
          <biscaytik:ExtendedBreadcrumb2026 ShowCurrentPage="false" SiteCollectionWeb="false" id="ExtendedBreadcrumb1"
           runat="server" />
         </nav>
        </div>
        <section class="BKTT-ListadoHero">
         <div class="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <h1 class="mb-0">
           <SharePointWebControls:TextField runat="server" FieldName="Title">
           </SharePointWebControls:TextField>
          </h1>
         </div>
        </section>

        <div class="BKTT-WebPartZone-fullContainerWidth--Top col-12">


         <div class="container">
          <div class="row">
           <div class="WPZT-ListCont--Default col-12">
            <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="TopFullZone"
             FrameType="TitleBarOnly" Title="Zona 1" Orientation="Horizontal">
             <ZoneTemplate></ZoneTemplate>
            </WebPartPages:WebPartZone>
           </div>
          </div>
         </div>
        </div>
        <div class="container">
         <div class="row g-4">
          <div class="BKTT-WebPartZone-H50--L col-md-6">
           <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="LeftCenter"
            FrameType="TitleBarOnly" Title="Zona 2" Orientation="Vertical">
            <ZoneTemplate></ZoneTemplate>
           </WebPartPages:WebPartZone>
          </div>
          <div class="BKTT-WebPartZone-H50--R col-md-6">
           <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="RightCenter"
            FrameType="TitleBarOnly" Title="Zona 3" Orientation="Vertical">
            <ZoneTemplate></ZoneTemplate>
           </WebPartPages:WebPartZone>
          </div>
         </div>
        </div>
        <div class="container">
         <div class="row g-4">
          <div class="BKTT-WebPartZone-H25--L col-md-3 col-sm-6 col-xs-12">
           <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="LeftSmallZone"
            FrameType="TitleBarOnly" Title="Zona 4" Orientation="Horizontal">
            <ZoneTemplate></ZoneTemplate>
           </WebPartPages:WebPartZone>
          </div>
          <div class="BKTT-WebPartZone-H75--R col-md-9 col-sm-6 col-xs-12">
           <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="RightBigZone"
            FrameType="TitleBarOnly" Title="Zona 5" Orientation="Vertical">
            <ZoneTemplate></ZoneTemplate>
           </WebPartPages:WebPartZone>
          </div>
         </div>
        </div>
        <div class="container">
         <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="ButtonZone" FrameType="TitleBarOnly"
          Title="Zona 6" Orientation="Vertical">
          <ZoneTemplate></ZoneTemplate>
         </WebPartPages:WebPartZone>
        </div>


      </asp:Content>
      <asp:Content ContentPlaceHolderId="PlaceHolderTitleBreadcrumb" runat="server">
       <SharePointWebControls:ListSiteMapPath runat="server" SiteMapProviders="CurrentNavigationSwitchableProvider"
        RenderCurrentNodeAsLink="false" PathSeparator="" CssClass="s4-breadcrumb" NodeStyle-CssClass="s4-breadcrumbNode"
        CurrentNodeStyle-CssClass="s4-breadcrumbCurrentNode" RootNodeStyle-CssClass="s4-breadcrumbRootNode"
        NodeImageOffsetX=0 NodeImageOffsetY=289 NodeImageWidth=16 NodeImageHeight=16
        NodeImageUrl="/_layouts/15/images/fgimg.png?rev=23" HideInteriorRootNodes="true" SkipLinkText="" />
      </asp:Content>
      <asp:Content ContentPlaceHolderId="PlaceHolderPageImage" runat="server" />
      <asp:Content ContentPlaceholderID="PlaceHolderNavSpacer" runat="server" />