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
<!--EVENTOS2026-->
<xsl:template
  name="Eventos2026"
  match="Row[@Style='Eventos2026']"
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

  <xsl:variable name="RawWebReserva" select="@WebReserva" />

  <xsl:variable name="TipoEvento" select="@TipoEvento" />
  
  <xsl:variable name="RawTitleES" select="@TipoEvento_x003a_TitleES" />
  <xsl:variable name="RawTitleEU" select="@TipoEvento_x003a_TitleEU" />
  <xsl:variable name="RawTitleEN" select="@TipoEvento_x003a_TitleEN" />
  <xsl:variable name="RawTitleFR" select="@TipoEvento_x003a_TitleFR" />
  
  <li class="BKTT-CardContainer__item col"  itemscope="" itemtype="https://schema.org/Event">
   <div class="BKTT-CardContainer__card card">
    <xsl:variable name="CleanTipoEvento">
      <xsl:choose>
     <xsl:when test="contains($TipoEvento, ';#')">
       <xsl:value-of select="substring-after($TipoEvento, ';#')" />
     </xsl:when>
     <xsl:otherwise>
       <xsl:value-of select="$TipoEvento" />
     </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>

    <figure class="BKTT-Card__figure">
     <xsl:if test="string-length($CleanTipoEvento) &gt; 0">
      <span class="BKTT-Badge badge bg-light text-dark">
       <span class="BKTT-Icon fa-solid fa-person-swimming">
        <xsl:text>&#8203;</xsl:text>
       </span>
       <span class="BKTT-Label tipo-evento-valor" itemprop="about">
        <xsl:value-of select="$CleanTipoEvento" />
       </span>
      </span>
     </xsl:if>
     <xsl:if test="string-length($SafeImageUrl) != 0">
      <img src="{$SafeImageUrl}" class="" itemprop="image" title="{@ImageUrlAltText}" alt="{@ImageUrlAltText}">
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
      <a class="BKTT-Link" href="{$SafeLinkUrl}" title="{$DisplayTitle}" itemprop="url">
       <span class="BKTT-Label" itemprop="name">
        <xsl:value-of select="$DisplayTitle"/>
       </span>
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
       <date>
        <span class="BKTT-Icon fa-light fa-calendar me-2">
         <xsl:text>&#8203;</xsl:text>
        </span>
        <time datetime="2026-01-12" itemprop="startDate">
         <xsl:if test="normalize-space(@TurismoEventStart) != ''">
          <xsl:choose>
            <xsl:when test="bittek:GetCultureString() = 'eu'">
           <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'yyyy/MM/dd')" /> 
            </xsl:when>
            <xsl:when test="bittek:GetCultureString() = 'en'">
           <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'MM/dd/yyyy')" /> 
            </xsl:when>
            <xsl:otherwise>
           <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'dd/MM/yyyy')" />
            </xsl:otherwise>
          </xsl:choose>
         </xsl:if>
        </time>
         <xsl:if test="normalize-space(@TurismoEventEnd) != ''">
         <time datetime="2026-01-15" itemprop="endDate">
         <xsl:text>&#160;-&#160;</xsl:text>
         <xsl:choose>
           <xsl:when test="bittek:GetCultureString() = 'eu'">
          <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'yyyy/MM/dd')" /> 
           </xsl:when>
           <xsl:when test="bittek:GetCultureString() = 'en'">
          <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'MM/dd/yyyy')" /> 
           </xsl:when>
           <xsl:otherwise>
          <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'dd/MM/yyyy')" />
           </xsl:otherwise>
         </xsl:choose>
         </time>
        </xsl:if>
        <xsl:if test="normalize-space(@HoraInicio) != ''">
         <span class="BKTT-Label"><xsl:value-of select="@HoraInicio"/></span>
         <xsl:if test="normalize-space(@HoraFin) != ''">h</xsl:if>
         </xsl:if>
         <xsl:if test="normalize-space(@HoraFin) != ''">
	         <xsl:text>&#160;-&#160;</xsl:text>
	         <span class="BKTT-Label"><xsl:value-of select="@HoraFin"/>h</span>
         </xsl:if>
       </date>
       <div class="BKTT-Data" itemscope="itemscope" itemtype="https://schema.org/Offer">
        <meta itemprop="priceCurrency" content="EUR"/>
        <meta itemprop="price" content="10"/>
        <meta itemprop="availability" content="https://schema.org/InStock"/>
        <strong itemprop="price">
         <xsl:if test="normalize-space(@TurismoPrecio) != ''">
          <strong itemprop="priceRange">
           <xsl:value-of select="@TurismoPrecio"/>
          </strong>
         </xsl:if>
        </strong>
       </div>
      </div>
     </div>
		   <xsl:if test="normalize-space(@TextoDestacado) != ''">
			  <span class="BKTT-Label">
				<div class="">
					<xsl:choose>
						<xsl:when test="string-length(@TextoDestacado) &gt; 200">
							<xsl:value-of select="substring(@TextoDestacado, 1, 200)"/>...
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="@TextoDestacado"/>
						</xsl:otherwise>
					</xsl:choose>
				</div>
			  </span>
		   </xsl:if>
       <xsl:if test="string-length($RawWebReserva) &gt; 0">
	      <div class="BKTT-Card__Footer d-flex justify-content-end">
	        <div class="campo-web-reserva">
	         <div class="BKTT-Button">
	           <span class="BKTT-Icon fa-light fa-link" aria-hidden="true">&#8203;</span>
	           <xsl:value-of select="$RawWebReserva" disable-output-escaping="yes" />
	         </div>
	        </div>
	     </div>
       </xsl:if>
    </div>
   </div>
  </li>
</xsl:template>
<!--EVENTOS2026-->
<!--EVENTOS2026_HOME-->
<xsl:template
  name="Eventos2026_home"
  match="Row[@Style='Eventos2026_home']"
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

  <xsl:variable name="RawWebReserva" select="@WebReserva" />

  <xsl:variable name="TipoEvento" select="@TipoEvento" />
  
  <xsl:variable name="RawTitleES" select="@TipoEvento_x003a_TitleES" />
  <xsl:variable name="RawTitleEU" select="@TipoEvento_x003a_TitleEU" />
  <xsl:variable name="RawTitleEN" select="@TipoEvento_x003a_TitleEN" />
  <xsl:variable name="RawTitleFR" select="@TipoEvento_x003a_TitleFR" />
  
  <li class="BKTT-CardContainer__item col"  itemscope="" itemtype="https://schema.org/Event">
   <div class="BKTT-CardContainer__card card">
    <xsl:variable name="CleanTipoEvento">
      <xsl:choose>
     <xsl:when test="contains($TipoEvento, ';#')">
       <xsl:value-of select="substring-after($TipoEvento, ';#')" />
     </xsl:when>
     <xsl:otherwise>
       <xsl:value-of select="$TipoEvento" />
     </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>

    <figure class="BKTT-Card__figure">
     <xsl:if test="string-length($CleanTipoEvento) &gt; 0">
      <span class="BKTT-Badge badge bg-light text-dark">
       <span class="BKTT-Icon fa-solid fa-person-swimming">
        <xsl:text>&#8203;</xsl:text>
       </span>
       <span class="BKTT-Label tipo-evento-valor" itemprop="about">
        <xsl:value-of select="$CleanTipoEvento" />
       </span>
      </span>
     </xsl:if>
     <xsl:if test="string-length($SafeImageUrl) != 0">
      <img src="{$SafeImageUrl}" class="" itemprop="image" title="{@ImageUrlAltText}" alt="{@ImageUrlAltText}">
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
      <a class="BKTT-Link" href="{$SafeLinkUrl}" title="{$DisplayTitle}" itemprop="url">
       <span class="BKTT-Label" itemprop="name">
        <xsl:value-of select="$DisplayTitle"/>
       </span>
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
       <date>
        <span class="BKTT-Icon fa-light fa-calendar me-2">
         <xsl:text>&#8203;</xsl:text>
        </span>
        <time datetime="2026-01-12" itemprop="startDate">
         <xsl:if test="normalize-space(@TurismoEventStart) != ''">
          <xsl:choose>
            <xsl:when test="bittek:GetCultureString() = 'eu'">
           <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'yyyy/MM/dd')" /> 
            </xsl:when>
            <xsl:when test="bittek:GetCultureString() = 'en'">
           <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'MM/dd/yyyy')" /> 
            </xsl:when>
            <xsl:otherwise>
           <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'dd/MM/yyyy')" />
            </xsl:otherwise>
          </xsl:choose>
         </xsl:if>
        </time>
        <time datetime="2026-01-15" itemprop="endDate">
         <xsl:if test="normalize-space(@TurismoEventEnd) != ''">
         <xsl:text>&#160;-&#160;</xsl:text>
         <xsl:choose>
           <xsl:when test="bittek:GetCultureString() = 'eu'">
          <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'yyyy/MM/dd')" /> 
           </xsl:when>
           <xsl:when test="bittek:GetCultureString() = 'en'">
          <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'MM/dd/yyyy')" /> 
           </xsl:when>
           <xsl:otherwise>
          <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'dd/MM/yyyy')" />
           </xsl:otherwise>
         </xsl:choose>
          </xsl:if>
        </time>
       </date>
       <div class="BKTT-Data" itemscope="itemscope" itemtype="https://schema.org/Offer">
        <meta itemprop="priceCurrency" content="EUR"/>
        <meta itemprop="price" content="10"/>
        <meta itemprop="availability" content="https://schema.org/InStock"/>
        <strong itemprop="price">
         <xsl:if test="normalize-space(@TurismoPrecio) != ''">
          <strong itemprop="priceRange">
           <xsl:value-of select="@TurismoPrecio"/>
          </strong>
         </xsl:if>
        </strong>
       </div>
      </div>
     </div>
      <div class="BKTT-Card__Footer d-flex justify-content-end">
       <xsl:if test="string-length($RawWebReserva) &gt; 0">
        <div class="campo-web-reserva">
         <div class="BKTT-Button">
           <span class="BKTT-Icon fa-light fa-link" aria-hidden="true">&#8203;</span>
           <xsl:value-of select="$RawWebReserva" disable-output-escaping="yes" />
         </div>
        </div>
       </xsl:if>
     </div>
    </div>
   </div>
  </li>
</xsl:template>
<!--EVENTOS2026_HOME-->
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
<!--NOTICIAS2026-->
<xsl:template
  name="Noticias2026"
  match="Row[@Style='Noticias2026']"
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
  
 <li class="BKTT-CardContainer__item col"  itemscope="" itemtype="https://schema.org/NewsArticle">
   <div class="BKTT-CardContainer__card card BKTT-CardContainer__card--no-image">
    <!-- CONTENIDO -->
    <span class="BKTT-Badge badge bg-light text-dark">
     <span>Categoría noticias</span>
    </span>
    <div class="BKTT-Card__main">
     <h3 class="BKTT-Card__title" itemprop="name">
      <a href="{$SafeLinkUrl}" title="{$DisplayTitle}" >
       <xsl:value-of select="$DisplayTitle"/>
      </a>
     </h3>
     <div class="BKTT-Card__Body">
      <div class="BKTT-Card__Data d-flex justify-content-between align-items-center mb-2">
       <div class="BKTT-Date">
        <span class="BKTT-Icon fa-light fa-calendar me-2">
         <xsl:text>&#8203;</xsl:text>
        </span>
        <time datetime="2026-01-22" itemprop="datePublished">
         <xsl:if test="normalize-space(@TurismoEventStart) != ''">
           <xsl:choose>
             <xsl:when test="bittek:GetCultureString() = 'eu'">
             <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'yyyy/MM/dd')" /> 
             </xsl:when>
             <xsl:when test="bittek:GetCultureString() = 'en'">
             <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'MM/dd/yyyy')" /> 
             </xsl:when>
             <xsl:otherwise>
             <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'dd/MM/yyyy')" />
             </xsl:otherwise>
           </xsl:choose>
         </xsl:if>
        </time>
       </div>
      </div>
      <p itemprop="description">
        <xsl:if test="normalize-space(@SubtituloNoticia) != ''">
          <span class="BKTT-Label">
          <div class="">
            <xsl:choose>
              <xsl:when test="string-length(@SubtituloNoticia) &gt; 200">
                <xsl:value-of select="substring(@SubtituloNoticia, 1, 200)"/>...
              </xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="@SubtituloNoticia"/>
              </xsl:otherwise>
            </xsl:choose>
          </div>
          </span>
        </xsl:if>
      </p>
     </div>
    </div>
   </div>
  </li>
</xsl:template>
<!--FINNOTICIAS2026-->
<!--PATRIMONIO2026-->
<xsl:template
  name="Patrimonio2026"
  match="Row[@Style='Patrimonio2026']"
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

  <xsl:variable name="RawWebReserva" select="@WebReserva" />
	<li class="BKTT-CardContainer__item col"  itemscope="" itemtype="https://schema.org/CreativeWork">
	 <div class="BKTT-CardContainer__card card">
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
      <div class="BKTT-Card__Data d-flex flex-column justify-content-between mb-2">
       <date>
        <div>
          <span class="BKTT-Icon fa-light fa-calendar me-2">
          <xsl:text>&#8203;</xsl:text>
          </span>
            <xsl:if test="normalize-space(@TurismoEventStart) != ''">
          <!--<span class="BKTT-Label"><xsl:value-of select="substring(@TurismoEventStart, 1, 10)"/></span>-->
          <xsl:choose>
            <xsl:when test="bittek:GetCultureString() = 'eu'">
            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'yyyy/MM/dd')" /> 
            </xsl:when>
            <xsl:when test="bittek:GetCultureString() = 'en'">
            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'MM/dd/yyyy')" /> 
            </xsl:when>
            <xsl:otherwise>
            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventStart, 'dd/MM/yyyy')" />
            </xsl:otherwise>
          </xsl:choose>
            </xsl:if>
            <xsl:if test="normalize-space(@TurismoEventEnd) != ''">
          <xsl:text>&#160;-&#160;</xsl:text>
          <!--<span class="BKTT-Label"><xsl:value-of select="substring(@TurismoEventEnd, 1, 10)"/></span>-->
          <xsl:choose>
            <xsl:when test="bittek:GetCultureString() = 'eu'">
            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'yyyy/MM/dd')" /> 
            </xsl:when>
            <xsl:when test="bittek:GetCultureString() = 'en'">
            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'MM/dd/yyyy')" /> 
            </xsl:when>
            <xsl:otherwise>
            <xsl:value-of select="bittek:FormatDateWithFormat(@TurismoEventEnd, 'dd/MM/yyyy')" />
            </xsl:otherwise>
          </xsl:choose>
            </xsl:if>
        </div>
        <div>
          <span class="BKTT-Icon fa-light fa-clock me-2">
          <xsl:text>&#8203;</xsl:text>
          </span>
          <xsl:if test="normalize-space(@HoraInicio) != ''">
            <span class="BKTT-Label"><xsl:value-of select="@HoraInicio"/></span>
            <xsl:if test="normalize-space(@HoraFin) = ''">h</xsl:if>
          </xsl:if>
          <xsl:if test="normalize-space(@HoraFin) != ''">
            <xsl:text>&#160;-&#160;</xsl:text>
            <span class="BKTT-Label"><xsl:value-of select="@HoraFin"/>h</span>
          </xsl:if>
       </div>
       </date>
       <div class="BKTT-Data" itemscope="itemscope" itemtype="https://schema.org/Offer">
        <meta itemprop="priceCurrency" content="EUR"></meta>
        <meta itemprop="price" content="x"></meta>
        <meta itemprop="availability" content="https://schema.org/InStock"> </meta>
        <strong itemprop="priceRange">
          <xsl:if test="normalize-space(@GastoMedio) != ''">
            <xsl:value-of select="@GastoMedio"/> €
          </xsl:if>
          <span>/ persona</span>
        </strong>
       </div>
      </div>
      <div class="BKTT-Card__Footer d-flex justify-content-end">
        <!--<xsl:if test="normalize-space(@TextoDestacado) != ''">
        <span class="BKTT-Label">
        <div class="">
        <xsl:choose>
          <xsl:when test="string-length(@TextoDestacado) &gt; 200">
          <xsl:value-of select="substring(@TextoDestacado, 1, 200)"/>...
          </xsl:when>
          <xsl:otherwise>
          <xsl:value-of select="@TextoDestacado"/>
          </xsl:otherwise>
        </xsl:choose>
        </div>
        </span>
        </xsl:if>-->

        <xsl:if test="string-length($RawWebReserva) &gt; 0">
        <div class="campo-web-reserva">
          <div class="BKTT-Button">
            <span class="BKTT-Icon fa-light fa-link" aria-hidden="true">&#8203;</span>
            <xsl:value-of select="$RawWebReserva" disable-output-escaping="yes"></xsl:value-of>
          </div>
        </div>
        </xsl:if>
      </div>
     </div>
    </div>
	</div>
	</li>
</xsl:template>
<!--FINPATRIMONIO2026-->
<!--ALOJAMIENTOS2026-->
<xsl:template
  name="Alojamientos2026"
  match="Row[@Style='Alojamientos2026']"
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

  <xsl:variable name="RawWebReserva" select="@TurismoWebReserva" />
	<li class="BKTT-CardContainer__item col"  itemscope="" itemtype="https://schema.org/CreativeWork">
	 <div class="BKTT-CardContainer__card card">
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
      <div class="BKTT-Card__Data d-flex flex-column justify-content-between mb-2">
       <div class="BKTT-Data" itemscope="itemscope" itemtype="https://schema.org/Offer">
        <meta itemprop="priceCurrency" content="EUR"></meta>
        <meta itemprop="price" content="x"></meta>
        <meta itemprop="availability" content="https://schema.org/InStock"> </meta>
        <strong itemprop="priceRange">
          <xsl:if test="normalize-space(@GastoMedio) != ''">
            <xsl:value-of select="@GastoMedio"/> €
          </xsl:if>
          <span>/ persona</span>
        </strong>
       </div>
	   <xsl:if test="normalize-space(@AlojamientoEstrellas) != ''">
       <p itemprop="ratingValue">
        <span class="BKTT-Icon fa-light fa-stars me-2">
         <xsl:text>&#8203;</xsl:text>
        </span>
        <span class="BKTT-Label">
         <xsl:value-of select="format-number(@AlojamientoEstrellas, '0')"/> Estrellas
        </span>
       </p>
      </xsl:if>
      </div>
      <div class="BKTT-Card__Footer d-flex justify-content-end">
        <xsl:if test="string-length($RawWebReserva) &gt; 0">
        <div class="campo-web-reserva">
          <div class="BKTT-Button">
            <span class="BKTT-Icon fa-light fa-link" aria-hidden="true">&#8203;</span>
            <xsl:value-of select="$RawWebReserva" disable-output-escaping="yes"></xsl:value-of>
          </div>
        </div>
        </xsl:if>
      </div>
     </div>
    </div>
	</div>
	</li>
</xsl:template>
<!--FINALOJAMIENTOS2026-->
<!--RUTAS2026-->
<xsl:template
  name="Rutas2026"
  match="Row[@Style='Rutas2026']"
  mode="itemstyle"
>
  <xsl:variable name="SafeLinkUrl">
    <xsl:call-template name="OuterTemplate.GetSafeLink">
      <xsl:with-param name="UrlColumnName" select="'LinkUrl'" />
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="SafeImageUrl">
    <xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
      <xsl:with-param name="UrlColumnName" select="'ImageUrl'" />
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="DisplayTitle">
    <xsl:call-template name="OuterTemplate.GetTitle">
      <xsl:with-param name="Title" select="@Title" />
      <xsl:with-param name="UrlColumnName" select="'LinkUrl'" />
    </xsl:call-template>
  </xsl:variable>

  <li class="BKTT-CardContainer__item col" itemscope="" itemtype="https://schema.org/TouristTrip">
    <div class="BKTT-CardContainer__card card">
      <figure class="BKTT-Card__figure">
        <xsl:if test="string-length($SafeImageUrl) != 0">
          <img src="{$SafeImageUrl}" class="card-img-top" title="{@ImageUrlAltText}" alt="{@ImageUrlAltText}" itemprop="image" />
        </xsl:if>
      </figure>

      <!-- CONTENIDO -->
      <div class="BKTT-Card__main">
        <h3 class="BKTT-Card__title" itemprop="name">
          <a href="{$SafeLinkUrl}" title="{$DisplayTitle}">
            <xsl:value-of select="$DisplayTitle"/>
          </a>
        </h3>
        <div class="BKTT-Card__Body">
          <div class="BKTT-Card__Data">
            <xsl:if test="normalize-space(@TurismoDuracionRuta) != ''">
             <span itemprop="activityDuration">
              <span class="BKTT-Icon fa-light fa-clock me-2">
              <xsl:text>&#8203;</xsl:text>
              </span>
             <span class="BKTT-Label" itemprop="duration">
               <xsl:value-of select="@TurismoDuracionRuta"/>
             </span>
             </span>
            </xsl:if>
            <xsl:if test="normalize-space(@TurismoRutaDificultad) != ''">
              <xsl:variable name="RawDificultad" select="translate(@TurismoRutaDificultad, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')" />
              <xsl:variable name="DificultadWidth">
                <xsl:choose>
                  <xsl:when test="contains($RawDificultad, 'muy baja')">20%</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'muy alta') or contains($RawDificultad, 'muy dificil') or contains($RawDificultad, 'muy dif&#237;cil')">100%</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'baja')">40%</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'media')">60%</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'alta') or contains($RawDificultad, 'dificil') or contains($RawDificultad, 'dif&#237;cil')">80%</xsl:when>
                  <xsl:otherwise>0%</xsl:otherwise>
                </xsl:choose>
              </xsl:variable>
              <xsl:variable name="DificultadColor">
                <xsl:choose>
                  <xsl:when test="contains($RawDificultad, 'muy baja')">#7CD9DF</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'baja')">#5cb85c</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'media')">#FFD900</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'alta') or contains($RawDificultad, 'dificil') or contains($RawDificultad, 'dif&#237;cil')">#e65100</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'muy alta') or contains($RawDificultad, 'muy dificil') or contains($RawDificultad, 'muy dif&#237;cil')">#dc3545</xsl:when>
                  <xsl:otherwise>#ccc</xsl:otherwise>
                </xsl:choose>
              </xsl:variable>
              <xsl:variable name="DificultadTexto" >
                <xsl:choose>
                  <xsl:when test="contains($RawDificultad, 'muy baja')">Muy baja</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'muy dificil') or contains($RawDificultad, 'muy dif&#237;cil') or contains($RawDificultad, 'muy alta')">Muy alta</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'baja')">Baja</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'media')">Media</xsl:when>
                  <xsl:when test="contains($RawDificultad, 'dificil') or contains($RawDificultad, 'dif&#237;cil') or contains($RawDificultad, 'alta')">Alta</xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="concat('Dif. ', @TurismoRutaDificultad)"/>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:variable>
              <xsl:if test="$DificultadWidth != '0%'">
                <div style="display: inline-flex; align-items: center; gap: 8px;">
             <div style="width: 75px; height: 8px; background-color: #e0e0e0; border-radius: 4px; overflow: hidden; flex-shrink: 0;">
              <div style="height: 100%; width: {$DificultadWidth}; background-color: {$DificultadColor};"></div>
             </div>
             </div>
             <strong itemprop="value">
             <xsl:value-of select="$DificultadTexto" />
             </strong>
              </xsl:if>
            </xsl:if>
           </div>
           <xsl:if test="normalize-space(@TextoDestacado) != ''">
             <p class="BKTT-Label" itemprop="description">
               <xsl:choose>
                 <xsl:when test="string-length(@TextoDestacado) &gt; 200">
                   <xsl:value-of select="substring(@TextoDestacado, 1, 200)"/>...
                 </xsl:when>
                 <xsl:otherwise>
                   <xsl:value-of select="@TextoDestacado"/>
                 </xsl:otherwise>
               </xsl:choose>
             </p>
           </xsl:if>
        </div>
      </div>
    </div>
  </li>
</xsl:template>
<!--FINRUTAS2026-->
<!--PLAYAS2026-->
<xsl:template
  name="Playas2026"
  match="Row[@Style='Playas2026']"
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
	<li class="BKTT-CardContainer__item col"  itemscope="" itemtype="https://schema.org/Beach">
	 <div class="BKTT-CardContainer__card card">
	  <figure class="BKTT-Card__figure">
		  <xsl:if test="string-length($SafeImageUrl) != 0">
			  <img src="{$SafeImageUrl}" class="card-img-top" title="{@ImageUrlAltText}" alt="{@ImageUrlAltText}" itemprop="image">
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
      <div class="BKTT-Card__Data d-flex flex-column justify-content-between mb-2">
       <xsl:if test="normalize-space(@TurismoHour) != ''">
        <span itemprop="openingHours">
         <span class="BKTT-Icon fa-light fa-clock me-2">
          <xsl:text>&#8203;</xsl:text>
         </span>
         <span class="BKTT-Label">
          <xsl:value-of select="@TurismoHour" disable-output-escaping="yes"/>
         </span>
        </span>
       </xsl:if>
	   <xsl:if test="normalize-space(@WorkAddress) != ''">
				<span itemprop="address">
				<span class="BKTT-Icon fa-light fa-location-dot me-2">
				<xsl:text>&#8203;</xsl:text>
				</span>
				<span class="BKTT-Label">
                  <xsl:value-of select="@WorkAddress"/>
                </span>
				</span>
		</xsl:if>
		<xsl:if test="normalize-space(@TurismoEntradaPlaya) != ''">
				<strong itemprop="price">
				<span class="BKTT-Label">
                  <xsl:value-of select="@TurismoEntradaPlaya"/>
                </span>
				</strong>
		</xsl:if>
      </div>
     </div>
    </div>
	</div>
	</li>
</xsl:template>
<!--FINPLAYAS2026-->
<!--SUMMARYLINKSLIDER2026-->
<xsl:template name="SummaryLinkSlider2026" match="Row[@Style='SummaryLinkSlider2026']" mode="itemstyle">
	<xsl:variable name="SafeLinkUrl">
		<xsl:call-template name="OuterTemplate.GetSafeLink">
		  <xsl:with-param name="UrlColumnName" select="'LinkUrl'" />
		</xsl:call-template>
	</xsl:variable>

	<xsl:variable name="SafeImageUrl">
		<xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
		  <xsl:with-param name="UrlColumnName" select="'ImageUrl'" />
		</xsl:call-template>
	</xsl:variable>

    <div class="BKTT-CardContainer__card card sliderSummaryLinkItem">
      <figure class="BKTT-Card__figure">
        <xsl:if test="string-length($SafeImageUrl) != 0">
          <img src="{$SafeImageUrl}" class="card-img-top" title="{@ImageUrlAltText}" alt="{@ImageUrlAltText}" />
        </xsl:if>
      </figure>

      <!-- CONTENIDO -->
		<div class="BKTT-Card__main">
			<h3 class="BKTT-Card__title" itemprop="name">
				<a href="{$SafeLinkUrl}" class="summaryLink">
					<xsl:value-of select="@Title"/>
				</a>
			</h3>
        </div>
    </div>
</xsl:template>
<!--FINSUMMARYLINKSLIDER2026-->
<!--SUMMARYLINK2026-->
<xsl:template name="SummaryLink2026" match="Row[@Style='SummaryLink2026']" mode="itemstyle">
	<xsl:variable name="SafeLinkUrl">
		<xsl:call-template name="OuterTemplate.GetSafeLink">
		  <xsl:with-param name="UrlColumnName" select="'LinkUrl'" />
		</xsl:call-template>
	</xsl:variable>

	<xsl:variable name="SafeImageUrl">
		<xsl:call-template name="OuterTemplate.GetSafeStaticUrl">
		  <xsl:with-param name="UrlColumnName" select="'ImageUrl'" />
		</xsl:call-template>
	</xsl:variable>

    <li class="BKTT-CardGrid__item col summaryLinkItem">
      <a href="{$SafeLinkUrl}" class="BKTT-CardGrid__card card h-100summaryLink">
        <figure class="BKTT-Card__figure">
          <xsl:if test="string-length($SafeImageUrl) != 0">
            <img src="{$SafeImageUrl}" class="card-img-top" title="{@ImageUrlAltText}" alt="{@ImageUrlAltText}" />
          </xsl:if>
        </figure>
        <!-- CONTENIDO -->
        <div class="BKTT-CardGrid__header">
          <h3 class="BKTT-Card__title" itemprop="name">
            
              <xsl:value-of select="@Title"/>
            
          </h3>
        </div>
      </a>
    </li>
</xsl:template>
<!--FINSUMMARYLINK2026--> 
</xsl:stylesheet>
