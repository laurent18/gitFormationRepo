<HTML>
<HEAD>
<TITLE>Navigation</TITLE>

<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> 

<link rel=stylesheet type="text/css" href="style_idaedalus.css">

<SCRIPT LANGUAGE="javascript" TYPE="text/javascript">

function affiche_reglement()
   {
    var fenetre_reglement = window.open("reglement.html","reglement");
   }

function affiche_a_propos()
   {
    var fenetre_a_propos = window.open("a_propos.html","a_propos");
   }    
   
</SCRIPT>
</HEAD>

<BODY BGCOLOR="#99C8EE" LINK="#99C8EE" VLINK="#99C8EE">

<BR>
<P align=center>
<A onClick="parent.contenu.location='contenu.html';" 
   onMouseOver="parent.navigation.document.images[0].src='boutons/B_Com_over.gif';window.status='Commencer une nouvelle partie';"
   onMouseOut="parent.navigation.document.images[0].src='boutons/B_Com_up.gif';window.status='';"
   onMouseDown="parent.navigation.document.images[0].src='boutons/B_Com_down.gif';">
<IMG SRC="boutons/B_Com_up.gif" ALT="Commencer" WIDTH=120 HEIGHT=35>
</A>
</P>

<P align=center>
<A onClick="parent.contenu.affiche_scores();" 
   onMouseOver="parent.navigation.document.images[1].src='boutons/B_Mei_over.gif';window.status='Afficher vos meilleurs scores';"
   onMouseOut="parent.navigation.document.images[1].src='boutons/B_Mei_up.gif';window.status='';" 
   onMouseDown="parent.navigation.document.images[1].src='boutons/B_Mei_down.gif';">
<IMG SRC="boutons/B_Mei_up.gif" ALT="Meilleurs scores" WIDTH=120 HEIGHT=35>
</A>
</P>

<P align=center>
<A onClick="parent.contenu.sauvegarder();" 
   onMouseOver="parent.navigation.document.images[2].src='boutons/B_Sau_over.gif';window.status='Sauvegarder la partie en cours';"
   onMouseOut="parent.navigation.document.images[2].src='boutons/B_Sau_up.gif';window.status='';" 
   onMouseDown="parent.navigation.document.images[2].src='boutons/B_Sau_down.gif';">
<IMG SRC="boutons/B_Sau_up.gif" ALT="Sauvegarder" WIDTH=120 HEIGHT=35>
</A>
</P>

<P align=center>
<A onClick="parent.contenu.charger();" 
   onMouseOver="parent.navigation.document.images[3].src='boutons/B_Cha_over.gif';window.status='Charger une partie enregistr&eacute;e';"
   onMouseOut="parent.navigation.document.images[3].src='boutons/B_Cha_up.gif';window.status='';" 
   onMouseDown="parent.navigation.document.images[3].src='boutons/B_Cha_down.gif';">
<IMG SRC="boutons/B_Cha_up.gif" ALT="Charger" WIDTH=120 HEIGHT=35>
</A>
</P>

<P align=center>
<A onClick="affiche_reglement();" 
   onMouseOver="parent.navigation.document.images[4].src='boutons/B_Reg_over.gif';window.status='Afficher le r&eacute;glement du jeu';"
   onMouseOut="parent.navigation.document.images[4].src='boutons/B_Reg_up.gif';window.status='';" 
   onMouseDown="parent.navigation.document.images[4].src='boutons/B_Reg_down.gif';">
<IMG SRC="boutons/B_Reg_up.gif" ALT="Reglement" WIDTH=120 HEIGHT=35>
</A>
</P>

<P align=center>
<A HREF="mailto:daedalus@netcourrier.com" 
   onMouseOver="parent.navigation.document.images[5].src='boutons/B_Con_over.gif';"
   onMouseOut="parent.navigation.document.images[5].src='boutons/B_Con_up.gif';" 
   onMouseDown="parent.navigation.document.images[5].src='boutons/B_Con_down.gif';">
<IMG SRC="boutons/B_Con_up.gif" ALT="Nous Contacter" WIDTH=120 HEIGHT=35>
</A>
</P>

<P align=center>
<A onClick="affiche_a_propos();"
   onMouseOver="parent.navigation.document.images[6].src='boutons/B_Pro_over.gif';window.status='Quelques remarques sur ce site';"
   onMouseOut="parent.navigation.document.images[6].src='boutons/B_Pro_up.gif';window.status='';" 
   onMouseDown="parent.navigation.document.images[6].src='boutons/B_pro_down.gif';">
<IMG SRC="boutons/B_Pro_up.gif" ALT="A Propos..." WIDTH=120 HEIGHT=35>
</A>
</P>

<P class="compteur">

<?php
$fichier = "compteur.txt"; //--- Nom du fichier

// ---- Permet d'eviter des erreurs sur la cration du fichier ---- //
$test = fopen($fichier, "a+");
fclose($test);
// ---- FIN DU TEST POUR LA CREATION DU FICHIER ---- //

$nombre = file($fichier,"w+");
$compt = $nombre[0] + 1;
$new = fopen($fichier,"w+");

fwrite($new, "$compt \n");

fclose($new);

if($compt == 1)
{
print "Vous etes le 1er visiteur\n...";
}
else
{
print "Vous &ecirc;tes le ".$compt ."
i&egrave;me visiteurs";
}
?>
</P>

<BR>
<P class="signature">
iDaedalus 1.2.1 (2003)
</P>
</BODY>
</HTML>
