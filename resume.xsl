<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
    <xsl:output method="html"/>

    <xsl:template match="resume">
        <section>
            <h1>Education</h1>
            <xsl:apply-templates select="education"/>
        </section>
        <section>
            <h1>Experience</h1>
            <xsl:apply-templates select="experience"/>
        </section>
    </xsl:template>

    <xsl:template match="experience|education">
        <div class="header">
            <h1>
                <xsl:value-of select="organization"/>
            </h1>
            <span class="start"><xsl:value-of select="start"/></span>
            <span class="end"><xsl:value-of select="end"/></span>
            <xsl:value-of select="title"/>
            <xsl:value-of select="city"/>
            <xsl:value-of select="state"/>
        </div>
        <ul class="keywords">
            <xsl:for-each select="keyword">
                <li>
                    <xsl:value-of select="@label"/>
                </li>
            </xsl:for-each>
        </ul>
        <ul class="tasks">
            <xsl:for-each select="task">
                <li>
                    <xsl:value-of select="@label"/>
                </li>
            </xsl:for-each>
            <xsl:for-each select="accomplishment">
                <li>
                    <xsl:value-of select="@label"/>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>
</xsl:stylesheet>