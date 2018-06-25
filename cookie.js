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
