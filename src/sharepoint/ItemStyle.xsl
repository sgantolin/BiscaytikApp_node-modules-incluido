<xsl:stylesheet 
  version="1.0" 
  exclude-result-prefixes="x d xsl msxsl cmswrt"
  xmlns:x="http://www.w3.org/2001/XMLSchema" 
  xmlns:d="http://schemas.microsoft.com/sharepoint/dsp" 
  xmlns:cmswrt="http://schemas.microsoft.com/WebParts/v3/Publishing/runtime"
  xmlns:bittek="http://schemas.bittek.es/sharepoint/core"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt">
  <xsl:param name="ItemsHaveStreams">
    <xsl:value-of select="'False'" />
  </xsl:param>
  <xsl:variable name="OnClickTargetAttribute" select="string('javascript:this.target=&quot;_blank&quot;')" />
  <xsl:variable name="ImageWidth" />
  <xsl:variable name="ImageHeight" />
  <xsl:template name="Default" match="*" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="SafeImageUrl">
            <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
                <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item">
            <xsl:if test="string-length($SafeImageUrl) != 0">
                <div class="image-area-left"> 
                    <a href="{$SafeLinkUrl}">
                      <xsl:if test="$ItemsHaveStreams = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of select="@OnClickForWebRendering"/>
                        </xsl:attribute>
                      </xsl:if>
                      <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                        </xsl:attribute>
                      </xsl:if>
                      <img class="image" src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
                        <xsl:if test="$ImageWidth != ''">
                          <xsl:attribute name="width">
                            <xsl:value-of select="$ImageWidth" />
                          </xsl:attribute>
                        </xsl:if>
                        <xsl:if test="$ImageHeight != ''">
                          <xsl:attribute name="height">
                            <xsl:value-of select="$ImageHeight" />
                          </xsl:attribute>
                        </xsl:if>
                      </img>
                    </a>
                </div>
            </xsl:if>
            <div class="link-item">
              <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
                <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
                  <xsl:if test="$ItemsHaveStreams = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of select="@OnClickForWebRendering"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="$DisplayTitle"/>
                </a>
                <div class="description">
                    <xsl:value-of select="@Description" />
                </div>
            </div>
        </div>
    </xsl:template>
    <xsl:template name="NoImage" match="Row[@Style='NoImage']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item link-item">
            <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
            <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
              <xsl:if test="$ItemsHaveStreams = 'True'">
                <xsl:attribute name="onclick">
                  <xsl:value-of select="@OnClickForWebRendering"/>
                </xsl:attribute>
              </xsl:if>
              <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                <xsl:attribute name="onclick">
                  <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                </xsl:attribute>
              </xsl:if>
              <xsl:value-of select="$DisplayTitle"/>
            </a>
            <div class="description">
                <xsl:value-of select="@Description" />
            </div>
        </div>
    </xsl:template>
    <xsl:template name="TitleOnly" match="Row[@Style='TitleOnly']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
      <div class="item link-item">
        <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
        <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
          <xsl:if test="$ItemsHaveStreams = 'True'">
            <xsl:attribute name="onclick">
              <xsl:value-of select="@OnClickForWebRendering"/>
            </xsl:attribute>
          </xsl:if>
          <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
            <xsl:attribute name="onclick">
              <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
            </xsl:attribute>
          </xsl:if>
          <xsl:value-of select="$DisplayTitle"/>
        </a>
      </div>
    </xsl:template>
    <xsl:template name="TitleWithBackground" match="Row[@Style='TitleWithBackground']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="title-With-Background">
            <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
            <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
              <xsl:if test="$ItemsHaveStreams = 'True'">
                <xsl:attribute name="onclick">
                  <xsl:value-of select="@OnClickForWebRendering"/>
                </xsl:attribute>
              </xsl:if>
              <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                <xsl:attribute name="onclick">
                  <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                </xsl:attribute>
              </xsl:if>
              <xsl:value-of select="$DisplayTitle"/>
            </a>
        </div>
    </xsl:template>
    <xsl:template name="Bullets" match="Row[@Style='Bullets']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item link-item bullet">
            <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
            <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
              <xsl:if test="$ItemsHaveStreams = 'True'">
                <xsl:attribute name="onclick">
                  <xsl:value-of select="@OnClickForWebRendering"/>
                </xsl:attribute>
              </xsl:if>
              <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                <xsl:attribute name="onclick">
                  <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                </xsl:attribute>
              </xsl:if>
              <xsl:value-of select="$DisplayTitle"/>
            </a>
        </div>
    </xsl:template>
    <xsl:template name="ImageRight" match="Row[@Style='ImageRight']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="SafeImageUrl">
            <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
                <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item">
            <xsl:if test="string-length($SafeImageUrl) != 0">
                <div class="image-area-right">
                    <a href="{$SafeLinkUrl}">
                      <xsl:if test="$ItemsHaveStreams = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of select="@OnClickForWebRendering"/>
                        </xsl:attribute>
                      </xsl:if>
                      <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                        </xsl:attribute>
                      </xsl:if>
                      <img class="image" src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
                        <xsl:if test="$ImageWidth != ''">
                          <xsl:attribute name="width">
                            <xsl:value-of select="$ImageWidth" />
                          </xsl:attribute>
                        </xsl:if>
                        <xsl:if test="$ImageHeight != ''">
                          <xsl:attribute name="height">
                            <xsl:value-of select="$ImageHeight" />
                          </xsl:attribute>
                        </xsl:if>
                      </img>
                    </a>
                </div>
            </xsl:if>
            <div class="link-item">
              <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
                <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
                  <xsl:if test="$ItemsHaveStreams = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of select="@OnClickForWebRendering"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="$DisplayTitle"/>
                </a>
                <div class="description">
                    <xsl:value-of select="@Description" />
                </div>
            </div>
        </div>
    </xsl:template>
    <xsl:template name="ImageTop" match="Row[@Style='ImageTop']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="SafeImageUrl">
            <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
                <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="Url" select="@LinkUrl"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item">
            <xsl:if test="string-length($SafeImageUrl) != 0">
                <div class="image-area-top">
                    <a href="{$SafeLinkUrl}">
                      <xsl:if test="$ItemsHaveStreams = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of select="@OnClickForWebRendering"/>
                        </xsl:attribute>
                      </xsl:if>
                      <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                        </xsl:attribute>
                      </xsl:if>
                      <img class="image" src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
                        <xsl:if test="$ImageWidth != ''">
                          <xsl:attribute name="width">
                            <xsl:value-of select="$ImageWidth" />
                          </xsl:attribute>
                        </xsl:if>
                        <xsl:if test="$ImageHeight != ''">
                          <xsl:attribute name="height">
                            <xsl:value-of select="$ImageHeight" />
                          </xsl:attribute>
                        </xsl:if>
                      </img>
                    </a>
                </div>
            </xsl:if>
            <div class="link-item">
                <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
                <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
                  <xsl:if test="$ItemsHaveStreams = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of select="@OnClickForWebRendering"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="$DisplayTitle"/>
                </a>
                <div class="description">
                    <xsl:value-of select="@Description" />
                </div>
            </div>
        </div>
    </xsl:template>
    <xsl:template name="ImageTopCentered" match="Row[@Style='ImageTopCentered']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="SafeImageUrl">
            <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
                <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item centered">
            <xsl:if test="string-length($SafeImageUrl) != 0">
                <div class="image-area-top">
                    <a href="{$SafeLinkUrl}" >
                      <xsl:if test="$ItemsHaveStreams = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of select="@OnClickForWebRendering"/>
                        </xsl:attribute>
                      </xsl:if>
                      <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                        </xsl:attribute>
                      </xsl:if>
                      <img class="image" src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
                        <xsl:if test="$ImageWidth != ''">
                          <xsl:attribute name="width">
                            <xsl:value-of select="$ImageWidth" />
                          </xsl:attribute>
                        </xsl:if>
                        <xsl:if test="$ImageHeight != ''">
                          <xsl:attribute name="height">
                            <xsl:value-of select="$ImageHeight" />
                          </xsl:attribute>
                        </xsl:if>
                      </img>
                    </a>
                </div>
            </xsl:if>
            <div class="link-item">
                <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
                <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
                  <xsl:if test="$ItemsHaveStreams = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of select="@OnClickForWebRendering"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="$DisplayTitle"/>
                </a>
                <div class="description">
                    <xsl:value-of select="@Description" />
                </div>
            </div>
        </div>
    </xsl:template>
    <xsl:template name="LargeTitle" match="Row[@Style='LargeTitle']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="SafeImageUrl">
            <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
                <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item">
            <xsl:if test="string-length($SafeImageUrl) != 0">
                <div class="image-area-left">
                    <a href="{$SafeLinkUrl}">
                      <xsl:if test="$ItemsHaveStreams = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of select="@OnClickForWebRendering"/>
                        </xsl:attribute>
                      </xsl:if>
                      <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                        </xsl:attribute>
                      </xsl:if>
                      <img class="image" src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
                        <xsl:if test="$ImageWidth != ''">
                          <xsl:attribute name="width">
                            <xsl:value-of select="$ImageWidth" />
                          </xsl:attribute>
                        </xsl:if>
                        <xsl:if test="$ImageHeight != ''">
                          <xsl:attribute name="height">
                            <xsl:value-of select="$ImageHeight" />
                          </xsl:attribute>
                        </xsl:if>
                      </img>
                    </a>
                </div>
            </xsl:if>
            <div class="link-item-large">
                <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
                <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
                  <xsl:if test="$ItemsHaveStreams = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of select="@OnClickForWebRendering"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="$DisplayTitle"/>
                </a>
                <div class="description">
                    <xsl:value-of select="@Description" />
                </div>
            </div>
        </div>
    </xsl:template>
    <xsl:template name="ClickableImage" match="Row[@Style='ClickableImage']" mode="itemstyle">
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="SafeImageUrl">
            <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
                <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item">
            <xsl:if test="string-length($SafeImageUrl) != 0">
                <div class="image-area-left">
                    <a href="{$SafeLinkUrl}">
                      <xsl:if test="$ItemsHaveStreams = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of select="@OnClickForWebRendering"/>
                        </xsl:attribute>
                      </xsl:if>
                      <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                        </xsl:attribute>
                      </xsl:if>
                      <img class="image" src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
                        <xsl:if test="$ImageWidth != ''">
                          <xsl:attribute name="width">
                            <xsl:value-of select="$ImageWidth" />
                          </xsl:attribute>
                        </xsl:if>
                        <xsl:if test="$ImageHeight != ''">
                          <xsl:attribute name="height">
                            <xsl:value-of select="$ImageHeight" />
                          </xsl:attribute>
                        </xsl:if>
                      </img>
                    </a>
                </div>
            </xsl:if>
        </div>
    </xsl:template>
    <xsl:template name="NotClickableImage" match="Row[@Style='NotClickableImage']" mode="itemstyle">
        <xsl:variable name="SafeImageUrl">
            <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
                <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item">
            <xsl:if test="string-length($SafeImageUrl) != 0">
                <div class="image-area-left">
                  <img class="image" src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
                    <xsl:if test="$ImageWidth != ''">
                      <xsl:attribute name="width">
                        <xsl:value-of select="$ImageWidth" />
                      </xsl:attribute>
                    </xsl:if>
                    <xsl:if test="$ImageHeight != ''">
                      <xsl:attribute name="height">
                        <xsl:value-of select="$ImageHeight" />
                      </xsl:attribute>
                    </xsl:if>
                  </img>
                </div>
            </xsl:if>
        </div>
    </xsl:template>
    <xsl:template name="FixedImageSize" match="Row[@Style='FixedImageSize']" mode="itemstyle">
        <xsl:variable name="SafeImageUrl">
            <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
                <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="@Title"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
        </xsl:variable>
        <div class="item">
            <xsl:if test="string-length($SafeImageUrl) != 0">
                <div class="image-area-left">
                    <a href="{$SafeLinkUrl}">
                      <xsl:if test="$ItemsHaveStreams = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of select="@OnClickForWebRendering"/>
                        </xsl:attribute>
                      </xsl:if>
                      <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                        <xsl:attribute name="onclick">
                          <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                        </xsl:attribute>
                      </xsl:if>
                      <img class="image-fixed-width" src="{$SafeImageUrl}" title="{@ImageUrlAltText}"/>
                    </a>
                </div>
            </xsl:if>
            <div class="link-item">
	            <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
                <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
                  <xsl:if test="$ItemsHaveStreams = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of select="@OnClickForWebRendering"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                    <xsl:attribute name="onclick">
                      <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                    </xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="$DisplayTitle"/>
                </a>
                <div class="description">
                    <xsl:value-of select="@Description" />
                </div>
            </div>
        </div>
	</xsl:template>
  <xsl:template name="WithDocIcon" match="Row[@Style='WithDocIcon']" mode="itemstyle">
       <xsl:variable name="SafeLinkUrl">
            <xsl:call-template name="OuterTemplate.GetSafeLink">
                 <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
            </xsl:call-template>
       </xsl:variable>
       <xsl:variable name="DisplayTitle">
            <xsl:call-template name="OuterTemplate.GetTitle">
                <xsl:with-param name="Title" select="''"/>
                <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
                <xsl:with-param name="UseFileName" select="1"/>
            </xsl:call-template>
       </xsl:variable>
       <div class="item link-item">
           <xsl:if test="string-length(@DocumentIconImageUrl) != 0">
               <div class="image-area-left">
                   <img class="image" src="{@DocumentIconImageUrl}" title="" />
               </div>
           </xsl:if>
           <div class="link-item">
               <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
               <a href="{$SafeLinkUrl}" title="{@LinkToolTip}">
                   <xsl:if test="$ItemsHaveStreams = 'True'">
                     <xsl:attribute name="onclick">
                       <xsl:value-of select="@OnClickForWebRendering"/>
                     </xsl:attribute>
                   </xsl:if>
                   <xsl:if test="$ItemsHaveStreams != 'True' and @OpenInNewWindow = 'True'">
                     <xsl:attribute name="onclick">
                       <xsl:value-of disable-output-escaping="yes" select="$OnClickTargetAttribute"/>
                     </xsl:attribute>
                   </xsl:if>
                   <xsl:value-of select="$DisplayTitle"/>
               </a>
               <div class="description">
                   <xsl:value-of select="@Description" />
               </div>
           </div>
       </div>
  </xsl:template>
  <xsl:template name="HiddenSlots" match="Row[@Style='HiddenSlots']" mode="itemstyle">
    <div class="SipAddress">
      <xsl:value-of select="@SipAddress" />
    </div>
    <div class="LinkToolTip">
      <xsl:value-of select="@LinkToolTip" />
    </div>
    <div class="OpenInNewWindow">
      <xsl:value-of select="@OpenInNewWindow" />
    </div>
    <div class="OnClickForWebRendering">
      <xsl:value-of select="@OnClickForWebRendering" />
    </div>
  </xsl:template>
  <!--AGENDA-->
  <xsl:template name="Agenda" match="Row[@Style='Agenda']" mode="itemstyle">
  <xsl:variable name="SafeLinkUrl">
    <xsl:call-template name="OuterTemplate.GetSafeLink">
      <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="SafeImageUrl">
    <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
      <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="DisplayTitle">
    <xsl:call-template name="OuterTemplate.GetTitle">
      <xsl:with-param name="Title" select="@Title"/>
      <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <li class="cq-item graphic">
  	
    <div class="cq-caption">
      <xsl:if test="string-length($SafeImageUrl) != 0">
        <div class="cq-caption-defaultWrap">
          <a href="{$SafeLinkUrl}" title="{@DisplayTitle}">
            <img src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
              <xsl:if test="$ImageWidth != ''">
                <xsl:attribute name="width">
                  <xsl:value-of select="$ImageWidth" />
                </xsl:attribute>
              </xsl:if>
              <xsl:if test="$ImageHeight != ''">
                <xsl:attribute name="height">
                  <xsl:value-of select="$ImageHeight" />
                </xsl:attribute>
              </xsl:if>
            </img>
          </a>
        </div>
      </xsl:if>
      <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
    </div>
    
    <div class="cqcontainer">
      <div class="cq-l-grid-title">
        <xsl:value-of select="$DisplayTitle"/>
      </div>
      <div class="cq-l-grid-desc">
      	<xsl:if test="@TurismoEventStart | @TurismoEventEnd">
      		
		        <xsl:choose>
		          <xsl:when test="bittek:GetCultureString() = 'eu'">
		            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'yyyy/MM/dd')" /> 
		            - <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'yyyy/MM/dd')" />
		          </xsl:when>
		          <xsl:when test="bittek:GetCultureString() = 'en'">
		            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'MM/dd/yyyy')" /> 
		            - <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'MM/dd/yyyy')" />
		          </xsl:when>
		          <xsl:otherwise>
		            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'dd/MM/yyyy')" /> 
		            - <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'dd/MM/yyyy')" />

		          </xsl:otherwise>
		        </xsl:choose>
	        
		</xsl:if>
      </div>
    </div>
    
  </li>
</xsl:template>
<!--RESTAURANTES-->
<xsl:template
  name="Restaurantes"
  match="Row[@Style='Restaurantes']"
  mode="itemstyle"
>
  <xsl:variable name="SafeLinkUrl">
    <xsl:call-template name="OuterTemplate.GetSafeLink">
      <xsl:with-param
        name="UrlColumnName"
        select="'LinkUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="SafeImageUrl">
    <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
      <xsl:with-param
        name="UrlColumnName"
        select="'ImageUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="DisplayTitle">
    <xsl:call-template name="OuterTemplate.GetTitle">
      <xsl:with-param
        name="Title"
        select="@Title"
      />

      <xsl:with-param
        name="UrlColumnName"
        select="'LinkUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <li class="BKTT-CardContainer__item col">
    <div class="BKTT-CardContainer__card card">
      <!-- IMAGEN -->
      <figure class="BKTT-Card__figure">
       <xsl:if test="string-length($SafeImageUrl) != 0">
        <img
              src="{$SafeImageUrl}"
              class="card-img-top"
              title="{@ImageUrlAltText}"
              alt="{@ImageUrlAltText}"
            >
              <xsl:if test="$ImageWidth != ''">
                <xsl:attribute name="width">
                  <xsl:value-of select="$ImageWidth" />
                </xsl:attribute>
              </xsl:if>

              <xsl:if test="$ImageHeight != ''">
                <xsl:attribute name="height">
                  <xsl:value-of select="$ImageHeight" />
                </xsl:attribute>
              </xsl:if>
            </img>
          
       </xsl:if>
        <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate" />
      </figure>
      <!-- CONTENIDO -->
      <div class="BKTT-Card__main">
       <h3 class="BKTT-Card__title">
        <a href="{$SafeLinkUrl}" title="{$DisplayTitle}" >
         <xsl:value-of select="$DisplayTitle"/>
        </a>
       </h3>
      

        <div class="BKTT-Card__Body">

          <!--<div class="cq-l-grid-desc">
            <xsl:if test="@TurismoEventStart | @TurismoEventEnd">

              <xsl:choose>
                <xsl:when test="bittek:GetCultureString() = 'eu'">
                  <xsl:value-of
                    select="bittek:FormatDateWithFormat(
                      @TurismoEventStart,
                      'yyyy/MM/dd'
                    )"
                  />
                  -
                  <xsl:value-of
                    select="bittek:FormatDateWithFormat(
                      @TurismoEventEnd,
                      'yyyy/MM/dd'
                    )"
                  />
                </xsl:when>

                <xsl:when test="bittek:GetCultureString() = 'en'">
                  <xsl:value-of
                    select="bittek:FormatDateWithFormat(
                      @TurismoEventStart,
                      'MM/dd/yyyy'
                    )"
                  />
                  -
                  <xsl:value-of
                    select="bittek:FormatDateWithFormat(
                      @TurismoEventEnd,
                      'MM/dd/yyyy'
                    )"
                  />
                </xsl:when>

                <xsl:otherwise>
                  <xsl:value-of
                    select="bittek:FormatDateWithFormat(
                      @TurismoEventStart,
                      'dd/MM/yyyy'
                    )"
                  />
                  -
                  <xsl:value-of
                    select="bittek:FormatDateWithFormat(
                      @TurismoEventEnd,
                      'dd/MM/yyyy'
                    )"
                  />
                </xsl:otherwise>
              </xsl:choose>

            </xsl:if>
          </div>-->

        </div>
      </div>
    </div>
  </li>
</xsl:template>
<!--BARES2026-->
<xsl:template
  name="Bares2026"
  match="Row[@Style='Bares2026']"
  mode="itemstyle"
>
  <xsl:variable name="SafeLinkUrl">
    <xsl:call-template name="OuterTemplate.GetSafeLink">
      <xsl:with-param
        name="UrlColumnName"
        select="'LinkUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="SafeImageUrl">
    <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
      <xsl:with-param
        name="UrlColumnName"
        select="'ImageUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="DisplayTitle">
    <xsl:call-template name="OuterTemplate.GetTitle">
      <xsl:with-param
        name="Title"
        select="@Title"
      />

      <xsl:with-param
        name="UrlColumnName"
        select="'LinkUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <li class="BKTT-CardContainer__item col" itemscope="" itemtype="https://schema.org/BarOrPub">
   <div class="BKTT-CardContainer__card card">
    <!-- IMAGEN -->
    <figure class="BKTT-Card__figure">
     <xsl:if test="string-length($SafeImageUrl) != 0">
      <img src="{$SafeImageUrl}" class="card-img-top" title="{@ImageUrlAltText}" alt="{@ImageUrlAltText}">
       <xsl:if test="$ImageWidth != ''">
        <xsl:attribute name="width">
         <xsl:value-of select="$ImageWidth" />
        </xsl:attribute>
       </xsl:if>
       <xsl:if test="$ImageHeight != ''">
         <xsl:attribute name="height">
           <xsl:value-of select="$ImageHeight" />
         </xsl:attribute>
       </xsl:if>
      </img>
     </xsl:if>
     <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate" />
    </figure>
    <!-- CONTENIDO -->
    <div class="BKTT-Card__main">
     <h3 class="BKTT-Card__title" itemprop="name">
      <a href="{$SafeLinkUrl}" title="{$DisplayTitle}" >
       <xsl:value-of select="$DisplayTitle"/>
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
       <xsl:if test="normalize-space(@TipoComida) != ''">
        <ul class="BKTT-Tags">
         <li class="BKTT-Badge badge bg-light text-dark">
          <span class="BKTT-Icon fa-solid fa-wine-glass">
           <xsl:text>&#8203;</xsl:text>
          </span>
          <span class="BKTT-Label" itemprop="servesCuisine">
           <xsl:value-of select="@TipoComida"/>
          </span>
         </li>
        </ul>
       </xsl:if>
       <xsl:if test="normalize-space(@GastoMedio) != ''">
        <strong itemprop="priceRange">
         <xsl:value-of select="@GastoMedio"/> €/persona
         <!-- <xsl:value-of select="ddwrt:Resource('comida','Tipo_x0020_de_x0020_comida')" /> -->
        </strong>
       </xsl:if>
      </div>
      <xsl:if test="normalize-space(@Valoracion) != ''">
       <p itemprop="ratingValue">
        <span class="BKTT-Icon fa-light fa-stars me-2">
         <xsl:text>&#8203;</xsl:text>
        </span>
        <span class="BKTT-Label">
         <xsl:value-of select="translate(format-number(@Valoracion,'0.0'),'.',',')"/>
        </span>
       </p>
      </xsl:if>
     </div>
    </div>
   </div>
  </li>
  <!--2026 Dis Alojamiento-->
  <li class="BKTT-CardContainer__item col " itemscope="" itemtype="https://schema.org/Event">
   <div class="BKTT-CardContainer__card card ">
    <figure class="BKTT-Card__figure" itemprop="image">
     <span class="BKTT-Badge badge bg-light text-dark">
      <span class="BKTT-Icon fa-solid fa-bed me-2">
       <xsl:text>&#8203;</xsl:text>
      </span>
      <span class="BKTT-Label">Hotel</span>
     </span>
     <img src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/hotel1.jpg" class="card-img-top" alt="Hotel Boutique Bahía de Plentzia" itemprop="image"/>
    </figure>
    <div class="BKTT-Card__main">
     <h3 class="BKTT-Card__title">
      <a class="BKTT-Link" href="/hotel-boutique-bahia-plentzia" itemprop="url">
       <span class="BKTT-Label" itemprop="name">Hotel Boutique Bahía de Plentzia</span>
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
      <div class="BKTT-Data " itemprop="starRating" itemscope="" itemtype="https://schema.org/Rating">
        <span class="BKTT-Icon fa-light fa-stars me-2">
        <xsl:text>&#8203;</xsl:text>
       </span>
      </div>
      <span class="BKTT-Label">3 estrellas</span>
       <div class="BKTT-Data" itemscope="" itemtype="https://schema.org/Offer">
        <strong itemprop="price">50 -
         100€ noche</strong><span class="BKTT-Icon fa-regular"></span>
       </div>
      </div>
      <div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
       <ul class="BKTT-Tags mb-2">
        <li class="BKTT-Badge badge bg-light text-dark"><span class="BKTT-Icon fa-solid fa-wheelchair me-2"><xsl:text>&#8203;</xsl:text></span><span class="BKTT-Label">Accesible</span></li>
       </ul>
      </div>
     </div>
     <div class="BKTT-Card__Footer d-flex justify-content-end"><button type="button" class="BKTT-Button btn btn-primary">
      <span class="BKTT-Icon fa-solid fa-link me-1">
       <xsl:text>&#8203;</xsl:text>
      </span>
      <span class="BKTT-Label">Reserva</span></button></div>
    </div>
   </div>
  </li>
  <!--END 2026 Dis Alojamiento-->
  <!--2026 Dis Noticias-->
  <li class="BKTT-CardContainer__item col" itemscope="" itemtype="https://schema.org/NewsArticle">
		 <div class="BKTT-CardContainer__card card BKTT-CardContainer__card--horizontal BKTT-CardContainer__card--no-image">
				<span class="BKTT-Badge badge bg-light text-dark">
					<span>Parejas</span>
				</span>
    <div class="BKTT-Card__main">
     <h3 class="BKTT-Card__title" itemprop="headline">
      <a class="BKTT-Link" href="/noticia-plan-cultural-1" itemprop="url">
       Noticia sobre el plan cultural de un día
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
       <div class="BKTT-Date">
        <span class="BKTT-Icon fa-light fa-calendar me-2">
         <xsl:text>&#8203;</xsl:text>
        </span>
        <time datetime="2026-01-22" itemprop="datePublished">
         22/09/2026
        </time>
       </div>
      </div>
      <p itemprop="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus, pellentesque elementum nunc pellentesque vel. Nulla vitae massa lobortis, rhoncus leo ac, vulputate dolor. Maecenas posuere facilisis pretium. Quisque felis ante, tempor ac mi sit amet, tincidunt aliquam arcu. Vivamus neque neque, efficitur sit amet magna ut, pretium laoreet ipsum. Aliquam dictum purus in convallis tempor. Aenean porta eget arcu in luctus.</p>
     </div>
			</div>
		</div>
	</li>
  <!--END 2026 Dis Noticias-->
  <!--2026 evento-->
  <li class="BKTT-CardContainer__item col" itemscope="" itemtype="https://schema.org/Event">
   <div class="BKTT-CardContainer__card card">
    <figure class="BKTT-Card__figure">
     <span class="BKTT-Badge badge bg-light text-dark">
      <span class="BKTT-Icon fa-solid fa-person-swimming">
       <xsl:text>&#8203;</xsl:text>
      </span>
      <span class="BKTT-Label" itemprop="about">Deporte</span>
     </span>
     <img src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/canoa.jpg"
      class="card-img-top"
      alt="Ruta acuática por el río Butrón"
      itemprop="image"/>
    </figure>
    <div class="BKTT-Card__main">
     <h3 class="BKTT-Card__title">
      <a class="BKTT-Link" href="/ruta-acuatica-rio-butron" itemprop="url">
       <span class="BKTT-Label" itemprop="name">Ruta acuática por el río Butrón</span>
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
       <date>
        <span class="BKTT-Icon fa-light fa-calendar me-2">
         <xsl:text>&#8203;</xsl:text>
        </span>
        <time datetime="2026-01-12" itemprop="startDate">12/01/2026</time>
        <span> - </span>
        <time datetime="2026-01-15" itemprop="endDate">15/01/2026</time>
       </date>
       <div class="BKTT-Data" itemscope="itemscope" itemtype="https://schema.org/Offer">
        <meta itemprop="priceCurrency" content="EUR"/>
        <meta itemprop="price" content="10"/>
        <meta itemprop="availability" content="https://schema.org/InStock"/>
        <strong itemprop="price">10€</strong>
       </div>
      </div>
     </div>
     <ul class="BKTT-Tags mb-2">
      <li class="BKTT-Badge badge bg-light text-dark">
       <span class="BKTT-Icon fa-solid fa-masks-theater me-2">
        <xsl:text>&#8203;</xsl:text>
       </span>
       <span class="BKTT-Label">Teatro</span>
      </li>
      <li class="BKTT-Badge badge bg-light text-dark">
       <span class="BKTT-Icon fa-solid fa-children me-2">
        <xsl:text>&#8203;</xsl:text>
       </span>
       <span class="BKTT-Label">Familia</span>
      </li>
     </ul>
     <div class="BKTT-Card__Footer d-flex justify-content-end">
      <button type="button" class="BKTT-Button btn btn-primary">
       <span class="BKTT-Icon fa-solid fa-link me-1">
        <xsl:text>&#8203;</xsl:text>
       </span>
       <span class="BKTT-Label">RESERVAR</span>
      </button>
     </div>

    </div>
   </div>
  </li>
  <!--end 2026 evento-->
  <!--2026 rutas-->
  <li class="BKTT-CardContainer__item col col-12" itemscope="itemscope" itemtype="https://schema.org/Event">
   <div class="BKTT-CardContainer__card card BKTT-CardContainer__card--horizontal BKTT-CardContainer__card--alt">
    <figure class="BKTT-Card__figure" itemprop="image">
     <span class="BKTT-Badge badge bg-light text-dark">
      <span class="BKTT-Icon fa-solid fa-mountain me-2"><xsl:text>&#8203;</xsl:text></span>
      <span class="BKTT-Label">Txipio</span>
     </span>

     <img src="/_layouts/15/Turismo2013.Files/custom_web/assets/themes/default/media/rio.jpg"
      class="card-img-top"
      alt="Ruta por el monte Txipio"
      itemprop="image"/>
    </figure>
    <div class="BKTT-Card__main">
     <h3 class="BKTT-Card__title">
      <a class="BKTT-Link" href="/ruta-txipio" itemprop="url">
       <span class="BKTT-Label" itemprop="name">Ruta por el monte Txipio</span>
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__TagsProgress d-flex align-items-center mb-2">
       <ul class="BKTT-Tags">
        <li>
         <span class="BKTT-Icon fa-regular fa-clock me-2"><xsl:text>&#8203;</xsl:text></span>
         <span class="BKTT-Label">2 h</span>
        </li>
        <li>
         <span class="BKTT-Icon fa-solid fa-person-hiking me-2"><xsl:text>&#8203;</xsl:text></span>
         <span class="BKTT-Label">19 Km</span>
        </li>
       </ul>
       <div class="BKTT-progress__Container flex-grow-1">
        <div class="BKTT-progress progress" style="height: 6px;">
         <div class="progress-bar bg-warning"
          role="progressbar"
          aria-valuenow="55"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 55%;"><xsl:text>&#8203;</xsl:text>
         </div>
        </div>
        <small class="BKTT-Label">Dif. media</small>
       </div>
      </div>
      <p itemprop="description">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque luctus aliquet lectus...
      </p>
     </div>
    </div>
		 </div>
	 </li>
  <!--END 2026 rutas-->
</xsl:template>
<!--FINBARES2026-->
<!--RESTAURANTES2026-->
<xsl:template
  name="Restaurantes2026"
  match="Row[@Style='Restaurantes2026']"
  mode="itemstyle"
>
  <xsl:variable name="SafeLinkUrl">
    <xsl:call-template name="OuterTemplate.GetSafeLink">
      <xsl:with-param
        name="UrlColumnName"
        select="'LinkUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="SafeImageUrl">
    <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
      <xsl:with-param
        name="UrlColumnName"
        select="'ImageUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="DisplayTitle">
    <xsl:call-template name="OuterTemplate.GetTitle">
      <xsl:with-param
        name="Title"
        select="@Title"
      />

      <xsl:with-param
        name="UrlColumnName"
        select="'LinkUrl'"
      />
    </xsl:call-template>
  </xsl:variable>

  <li class="BKTT-CardContainer__item col"  itemscope="" itemtype="https://schema.org/Restaurant">
   <div class="BKTT-CardContainer__card card">
    <!-- IMAGEN -->
    <figure class="BKTT-Card__figure">
     <xsl:if test="string-length($SafeImageUrl) != 0">
      <img src="{$SafeImageUrl}" class="card-img-top" title="{@ImageUrlAltText}" alt="{@ImageUrlAltText}">
       <xsl:if test="$ImageWidth != ''">
         <xsl:attribute name="width">
           <xsl:value-of select="$ImageWidth" />
         </xsl:attribute>
       </xsl:if>
       <xsl:if test="$ImageHeight != ''">
         <xsl:attribute name="height">
           <xsl:value-of select="$ImageHeight" />
         </xsl:attribute>
       </xsl:if>
      </img>
     </xsl:if>
    </figure>
    <!-- CONTENIDO -->
    <div class="BKTT-Card__main">
     <h3 class="BKTT-Card__title" itemprop="name">
      <a href="{$SafeLinkUrl}" title="{$DisplayTitle}" >
       <xsl:value-of select="$DisplayTitle"/>
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
       <xsl:if test="normalize-space(@TipoComida) != ''">
        <ul class="BKTT-Tags">
         <li class="BKTT-Badge badge bg-light text-dark">
          <span class="BKTT-Icon fa-solid fa-plate-utensils">
           <xsl:text>&#8203;</xsl:text>
          </span>
          <span class="BKTT-Label" itemprop="servesCuisine"><xsl:value-of select="@TipoComida"/></span>
         </li>
        </ul>
       </xsl:if>
       <xsl:if test="normalize-space(@GastoMedio) != ''">
        <strong itemprop="priceRange">
         <xsl:value-of select="@GastoMedio"/> €/persona
         <!-- <xsl:value-of select="ddwrt:Resource('comida','Tipo_x0020_de_x0020_comida')" /> -->
        </strong>
       </xsl:if>
      </div>
      <xsl:if test="normalize-space(@Valoracion) != ''">
       <p itemprop="ratingValue">
        <span class="BKTT-Icon fa-light fa-stars me-2">
         <xsl:text>&#8203;</xsl:text>
        </span>
        <span class="BKTT-Label">
         <xsl:value-of select="translate(format-number(@Valoracion,'0.0'),'.',',')"/>
        </span>
       </p>
      </xsl:if>
     </div>
    </div>
   </div>
  </li>
</xsl:template>
<!--FINRESTAURANTES2026-->
<!--EventosRep-->
<xsl:template name="EventosRep" match="Row[@Style='EventosRep']" mode="itemstyle">
  <xsl:variable name="SafeLinkUrl">
    <xsl:call-template name="OuterTemplate.GetSafeLink">
      <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="SafeImageUrl">
    <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
      <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="DisplayTitle">
    <xsl:call-template name="OuterTemplate.GetTitle">
      <xsl:with-param name="Title" select="@Title"/>
      <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <li class="cq-item2 graphic">
  	<div class="cq-caption">
      <xsl:if test="string-length($SafeImageUrl) != 0">
        <div class="cq-caption-defaultWrap2">
          <a href="{$SafeLinkUrl}" title="{@DisplayTitle}">
            <img src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
              <xsl:if test="$ImageWidth != ''">
                <xsl:attribute name="width">
                  <xsl:value-of select="$ImageWidth" />
                </xsl:attribute>
              </xsl:if>
              <xsl:if test="$ImageHeight != ''">
                <xsl:attribute name="height">
                  <xsl:value-of select="$ImageHeight" />
                </xsl:attribute>
              </xsl:if>
            </img>
          </a>
        </div>
      </xsl:if>
      <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
    </div>
    
    <div class="cqcontainer">
      <div class="cq-l-grid-title">
        <xsl:value-of select="$DisplayTitle"/>
      </div>
      <!--<div class="cq-l-grid-desc">
      	<xsl:if test="@TurismoEventStart | @TurismoEventEnd">
      		
		        <xsl:choose>
		          <xsl:when test="bittek:GetCultureString() = 'eu'">
		            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'yyyy/MM/dd')" /> 
		            - <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'yyyy/MM/dd')" />
		          </xsl:when>
		          <xsl:when test="bittek:GetCultureString() = 'en'">
		            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'MM/dd/yyyy')" /> 
		            - <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'MM/dd/yyyy')" />
		          </xsl:when>
		          <xsl:otherwise>
		            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'dd/MM/yyyy')" /> 
		            - <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'dd/MM/yyyy')" />

		          </xsl:otherwise>
		        </xsl:choose>
	        
		</xsl:if>
      </div>-->
    </div>
    
  </li>
</xsl:template>


<!--EventosAnual-->
<xsl:template name="EventosAnual" match="Row[@Style='EventosAnual']" mode="itemstyle">
  <xsl:variable name="SafeLinkUrl">
    <xsl:call-template name="OuterTemplate.GetSafeLink">
      <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="SafeImageUrl">
    <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
      <xsl:with-param name="UrlColumnName" select="'ImageUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="DisplayTitle">
    <xsl:call-template name="OuterTemplate.GetTitle">
      <xsl:with-param name="Title" select="@Title"/>
      <xsl:with-param name="UrlColumnName" select="'LinkUrl'"/>
    </xsl:call-template>
  </xsl:variable>
  <li class="cq-item2 graphic">
  	<div class="cq-caption">
      <xsl:if test="string-length($SafeImageUrl) != 0">
        <div class="cq-caption-defaultWrap2">
          <a href="{$SafeLinkUrl}" title="{@DisplayTitle}">
            <img src="{$SafeImageUrl}" title="{@ImageUrlAltText}">
              <xsl:if test="$ImageWidth != ''">
                <xsl:attribute name="width">
                  <xsl:value-of select="$ImageWidth" />
                </xsl:attribute>
              </xsl:if>
              <xsl:if test="$ImageHeight != ''">
                <xsl:attribute name="height">
                  <xsl:value-of select="$ImageHeight" />
                </xsl:attribute>
              </xsl:if>
            </img>
          </a>
        </div>
      </xsl:if>
      <xsl:call-template name="OuterTemplate.CallPresenceStatusIconTemplate"/>
    </div>
    
    <div class="cqcontainer">
      <div class="cq-l-grid-title">
        <xsl:value-of select="$DisplayTitle"/>
      </div>
      <div class="cq-l-grid-desc">
      	<xsl:value-of select="@TurismoEventoCuando"/>
      </div>
    </div>
    
  </li>
</xsl:template>


 
  
</xsl:stylesheet>
