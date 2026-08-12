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
          <a
            href="{$SafeLinkUrl}"
            title="{$DisplayTitle}"
          >
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
          </a>
        </xsl:if>

        <xsl:call-template
          name="OuterTemplate.CallPresenceStatusIconTemplate"
        />
      </figure>

      <!-- CONTENIDO -->

      <div class="BKTT-Card__main">

        <h3 class="BKTT-Card__title">
          <xsl:value-of select="$DisplayTitle"/>
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
