<%@ Page language="C#"
	Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c"
	%>
	<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls"
		Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
		<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages"
			Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
			<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls"
				Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
				%>
				<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation"
					Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
					%>
					<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
						<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
					</asp:Content>
					<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
						<!-- First Row -->
						<div class="row">
							<div class="BKTT-WebPartZone-fullWidth--Top col-12">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow1Column1" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
						</div>
						<!---->
						<div class="row">
							<div class="BKTT-WebPartZone-H25--L col-md-3 col-sm-6 col-xs-12">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow2Column1" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
							<div class="BKTT-WebPartZone-H75--R col-md-9 col-sm-6 col-xs-12">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow2Column2" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
						</div>
						<!--row3-->
						<div class="row">
							<div class="BKTT-WebPartZone-H75--L col-md-9 col-sm-6 col-xs-12">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow3Column1" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
							<div class="BKTT-WebPartZone-H25--R col-md-3 col-sm-6 col-xs-12">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow3Column2" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
						</div>
						<!--4-->
						<div class="container">
							<div class="row">
								<div class="BKTT-WebPartZone-H50--L col-md-6">
									<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
										ID="bootstrapRow4Column1" FrameType="None" Orientation="Vertical">
										<ZoneTemplate></ZoneTemplate>
									</WebPartPages:WebPartZone>
								</div>
								<div class="BKTT-WebPartZone-H50--R col-md-6">
									<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
										ID="bootstrapRow4Column2" FrameType="None" Orientation="Vertical">
										<ZoneTemplate></ZoneTemplate>
									</WebPartPages:WebPartZone>
								</div>
							</div>
						</div>
						<!--5-->
						<div class="row">
							<div class="BKTT-WebPartZone-fullWidth--Middle col-12">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow5Column1" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
						</div>
						<!--6-->
						<div class="row">
							<div class="BKTT-WebPartZone-H33--L col-md-4">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow6Column1" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
							<div class="BKTT-WebPartZone-H33--M col-md-4">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow6Column2" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
							<div class="BKTT-WebPartZone-H33--R col-md-4">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow6Column3" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
						</div>
						<!--7-->
						<div class="row">
							<div class="BKTT-WebPartZone-H25--1 col-md-3 col-xs-6">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow7Column1" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
							<div class="BKTT-WebPartZone-H25--2 col-md-3 col-xs-6">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow7Column2" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
							<div class="BKTT-WebPartZone-H25--3 col-md-3 col-xs-6">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow7Column3" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
							<div class="BKTT-WebPartZone-H25--4 col-md-3 col-xs-6">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow7Column4" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
						</div>
						<!--8-->
						<div class="row">
							<div class="BKTT-WebPartZone-fullWidth--Bottom col-12">
								<WebPartPages:WebPartZone runat="server" AllowPersonalization="false"
									ID="bootstrapRow8Column1" FrameType="None" Orientation="Vertical">
									<ZoneTemplate></ZoneTemplate>
								</WebPartPages:WebPartZone>
							</div>
						</div>
					</asp:Content>