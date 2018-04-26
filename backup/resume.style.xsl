<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
    <xsl:output method="html"/>

    <xsl:template match="resume">
        <html data-ng-app="app">
            <head>
                <title>resume</title>
                <link href="resume.css" type="text/css" rel="stylesheet"/>
                <script src="bower_components/angular/angular.js" type="application/javascript"></script>
                <script src="resume.js" type="application/javascript"></script>
            </head>
            <body>
                <header>
                    <h1>
                        <xsl:value-of select="contact/name"/>
                    </h1>
                    <div>
                        <xsl:value-of select="contact/email"/>
                    </div>
                </header>
                <section>
                    <h1>Education</h1>
                    <xsl:apply-templates select="education"/>
                    <h1>Experience</h1>
                    <xsl:apply-templates select="experience"/>
                </section>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="experience">
        <div class="experience">
            <div class="header">
                <span class="period">
                    <span class="date from" data-date="">
                        <xsl:value-of select="from"/>
                    </span>
                    <span class="date to" data-date="">
                        <xsl:value-of select="to"/>
                    </span>
                </span>
                <span class="organization">
                    <xsl:value-of select="organization"/>
                </span>
                <span class="title">
                    <xsl:value-of select="title"/>
                </span>
                <span class="location"><xsl:value-of select="location/city"/>,
                    <xsl:value-of select="location/state"/>
                </span>
            </div>
            <xsl:apply-templates select="keywords"/>
            <xsl:apply-templates select="tasks"/>
            <xsl:apply-templates select="accomplishments"/>
        </div>
    </xsl:template>

    <xsl:template match="education">
        <div class="education">
            <div class="header">
                <div class="from">
                    <xsl:value-of select="from"/>
                </div>
                <div class="to">
                    <xsl:value-of select="graduated"/>
                </div>
                <div class="organization">
                    <xsl:value-of select="organization"/>
                </div>
                <div class="title">
                    <xsl:value-of select="title"/>
                </div>
                <div class="location"><xsl:value-of select="location/city"/>,
                    <xsl:value-of select="location/state"/>
                </div>
            </div>
            <xsl:apply-templates select="keywords"/>
            <xsl:apply-templates select="tasks"/>
            <xsl:apply-templates select="accomplishments"/>
        </div>
    </xsl:template>

    <xsl:template match="tasks|accomplishments">
        <ul class="tasks accomplishments">
            <xsl:for-each select="item">
                <li>
                    <xsl:value-of select="@label"/>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <xsl:template match="keywords">
        <ul class="keywords">
            <xsl:for-each select="item">
                <li>
                    <xsl:value-of select="@label"/>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>
</xsl:stylesheet>
