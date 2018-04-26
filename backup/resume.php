<?php

$file = $_GET['file'];

switch ($file) {
    case 'resume.xml':
        header('Content-Type:application/xml');
        break;
    case 'resume.xsl':
        header('Content-Type:text/xml');
        break;
}

echo file_get_contents($file);
