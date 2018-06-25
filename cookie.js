/********************************************************************************************/  
function sauvegarder()
   {
    var date = new Date;
    date.setMonth(date.getMonth() + 12);
    
    daedalus_partie = "daeda_partie=vs:1:gce:" + images_attr[0] + images_attr[1] + images_attr[2]
                                          + "x:"  + position_x
                                          + "y:"  + position_y
                                          + "xp:" + position_x_p 
                                          + "yp:" + position_y_p 
                                          + "vi:" + vital 
                                          + "fo:" + force
                                          + "nb:" + nb_coup 
                                          + "bo:" + bousole
                                          + ":fin;expires=" + date.toGMTString() + ";";
    parent.document.cookie = daedalus_partie;
   }
   
      
/************************************************************************************/   
/*                         Enregistrement des meilleurs scores                      */
/************************************************************************************/          
function enregistrer_scores()
   {
    lecture_scores();
    var date = new Date;

    var date_jour = date.getUTCDate();
    var date_mois = date.getUTCMonth() + 1;
    var date_an   = date.getFullYear();
    var date_comp = date_jour + "/" + date_mois + "/" + date_an;
    
    meilleurs_score[5][0] = date_comp;
    meilleurs_score[5][1] = nb_coup;
    tri_scores();
    date.setMonth(date.getMonth() + 12);    
    daedalus_score = "daeda_score=v:1:sc0:" + meilleurs_score[0][1]   
                               + "da0:" + meilleurs_score[0][0]
                               + "sc1:" + meilleurs_score[1][1]
                               + "da1:" + meilleurs_score[1][0]
                               + "sc2:" + meilleurs_score[2][1]
                               + "da2:" + meilleurs_score[2][0]
                               + "sc3:" + meilleurs_score[3][1]
                               + "da3:" + meilleurs_score[3][0]
                               + "sc4:" + meilleurs_score[4][1]
                               + "da4:" + meilleurs_score[4][0]
                               + "!;expires=" + date.toUTCString() + ";";
    parent.document.cookie = daedalus_score;
   }

/********************************************************************************/     
function charger()
   {
    daedalus_cookie = parent.document.cookie;
    if (daedalus_cookie.length != 0)
       {          
        pos_daeda_gce_deb  = daedalus_cookie.indexOf("gce:");
        pos_daeda_gce_fin  = daedalus_cookie.indexOf("x:", pos_daeda_gce_deb);
        images_attr[0]  = daedalus_cookie.substring(pos_daeda_gce_deb + 4,pos_daeda_gce_fin - 2);
        images_attr[1]  = daedalus_cookie.substring(pos_daeda_gce_deb + 5,pos_daeda_gce_fin - 1);
        images_attr[2]  = daedalus_cookie.substring(pos_daeda_gce_deb + 6,pos_daeda_gce_fin);
    
        pos_daeda_x_deb  = daedalus_cookie.indexOf("x:");
        pos_daeda_x_fin = daedalus_cookie.indexOf("y:", pos_daeda_x_deb);
        position_x = parseInt(daedalus_cookie.substring(pos_daeda_x_deb + 2,pos_daeda_x_fin));
      
        pos_daeda_y_deb  = daedalus_cookie.indexOf("y:");
        pos_daeda_y_fin = daedalus_cookie.indexOf("xp:", pos_daeda_y_deb);
        position_y = parseInt(daedalus_cookie.substring(pos_daeda_y_deb + 2,pos_daeda_y_fin));
      
        pos_daeda_xp_deb  = daedalus_cookie.indexOf("xp:");
        pos_daeda_xp_fin = daedalus_cookie.indexOf("yp:", pos_daeda_xp_deb);
        position_x_p = parseInt(daedalus_cookie.substring(pos_daeda_xp_deb + 3,pos_daeda_xp_fin));
      
        pos_daeda_yp_deb  = daedalus_cookie.indexOf("yp:");
        pos_daeda_yp_fin = daedalus_cookie.indexOf("vi:", pos_daeda_yp_deb);
        position_y_p = parseInt(daedalus_cookie.substring(pos_daeda_yp_deb + 3,pos_daeda_yp_fin));
      
        pos_daeda_vi_deb  = daedalus_cookie.indexOf("vi:");
        pos_daeda_vi_fin = daedalus_cookie.indexOf("fo:", pos_daeda_vi_deb);
        vital = parseInt(daedalus_cookie.substring(pos_daeda_vi_deb + 3,pos_daeda_vi_fin));
      
        pos_daeda_fo_deb  = daedalus_cookie.indexOf("fo:");
        pos_daeda_fo_fin = daedalus_cookie.indexOf("nb:", pos_daeda_fo_deb);
        force = parseInt(daedalus_cookie.substring(pos_daeda_fo_deb + 3,pos_daeda_fo_fin));
      
        pos_daeda_nb_deb  = daedalus_cookie.indexOf("nb:");
        pos_daeda_nb_fin = daedalus_cookie.indexOf("bo:", pos_daeda_nb_deb);
        nb_coup = parseInt(daedalus_cookie.substring(pos_daeda_nb_deb + 3,pos_daeda_nb_fin));
         
        pos_daeda_bo_deb  = daedalus_cookie.indexOf("bo:");
        pos_daeda_bo_fin = daedalus_cookie.indexOf(":fin", pos_daeda_bo_deb);
        bousole = parseInt(daedalus_cookie.substring(pos_daeda_bo_deb + 3,pos_daeda_bo_fin));
        
        var attr = images_attr[0];
        switch (attr)
               {
                case "0" : parent.contenu.document.image_gauche.src = fic_img_porte_ferme + ".gif"; break;
                case "1" : parent.contenu.document.image_gauche.src = fic_img_mur + ".gif"; break;
                case "2" : parent.contenu.document.image_gauche.src = fic_img_passage + ".gif"; break;
                case "3" : parent.contenu.document.image_gauche.src = fic_img_porte_ouv + ".gif"; break;
               }
           
        var attr = images_attr[1];
        switch (attr)
               {
                case "0" : parent.contenu.document.image_face.src = fic_img_porte_ferme + ".gif"; break;
                case "1" : parent.contenu.document.image_face.src = fic_img_mur + ".gif"; break;
                case "2" : parent.contenu.document.image_face.src = fic_img_passage + ".gif"; break;
                case "3" : parent.contenu.document.image_face.src = fic_img_porte_ouv + ".gif"; break;
               }
               
        var attr = images_attr[2];
        switch (attr)
               {
                case "0" : parent.contenu.document.image_droite.src = fic_img_porte_ferme + ".gif"; break;
                case "1" : parent.contenu.document.image_droite.src = fic_img_mur + ".gif"; break;
                case "2" : parent.contenu.document.image_droite.src = fic_img_passage + ".gif"; break;
                case "3" : parent.contenu.document.image_droite.src = fic_img_porte_ouv + ".gif"; break;
               }
           
      }
     else
      {alert("Aucune sauvegarde trouvee !!!!!");} 
    affiche_resultat();
   } 