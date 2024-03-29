let initialDiv = '</br><div style="margin: auto 6vh 4vh 6vh; line-height: 1.5; font-size: 18px; text-align: left;">' + 'MTurk ID </br>'

let mTurkIDField = '<div class="ui input">' +
				   '<input type="text" class="id">' +
				   '</div></br></br>'

let secondDiv = 'In which country do you live? </br>'

let countriesDropdown = '<select class="ui fluid search selection dropdown country">' +
						 '<option value="null">Select Country</doption>' + 
						 '<option value="af"><i class="af flag"></i>Afghanistan</option>' + 
						 '<option value="ax"><i class="ax flag"></i>Aland Islands</option>' +
						 '<option value="al"><i class="al flag"></i>Albania</option>' +
						 '<option value="dz"><i class="dz flag"></i>Algeria</option>' +
						 '<option value="as"><i class="as flag"></i>American Samoa</option>' +
						 '<option value="ad"><i class="ad flag"></i>Andorra</option>' +
						 '<option value="ao"><i class="ao flag"></i>Angola</option>' +
						 '<option value="ai"><i class="ai flag"></i>Anguilla</option>' +
						 '<option value="ag"><i class="ag flag"></i>Antigua</option>' +
						 '<option value="ar"><i class="ar flag"></i>Argentina</option>' +
						 '<option value="am"><i class="am flag"></i>Armenia</option>' +
			 		 	 '<option value="aw"><i class="aw flag"></i>Aruba</option>' +
			 		   	 '<option value="au"><i class="au flag"></i>Australia</option>' +
						 '<option value="at"><i class="at flag"></i>Austria</option>' +
						 '<option value="az"><i class="az flag"></i>Azerbaijan</option>' +
						 '<option value="bs"><i class="bs flag"></i>Bahamas</option>' +
						 '<option value="bh"><i class="bh flag"></i>Bahrain</option>' +
						 '<option value="bd"><i class="bd flag"></i>Bangladesh</option>' +
						 '<option value="bb"><i class="bb flag"></i>Barbados</option>' +
						 '<option value="by"><i class="by flag"></i>Belarus</option>' +
						 '<option value="be"><i class="be flag"></i>Belgium</option>' +
						 '<option value="bz"><i class="bz flag"></i>Belize</option>' +
						 '<option value="bj"><i class="bj flag"></i>Benin</option>' +
						 '<option value="bm"><i class="bm flag"></i>Bermuda</option>' +
						 '<option value="bt"><i class="bt flag"></i>Bhutan</option>' +
						 '<option value="bo"><i class="bo flag"></i>Bolivia</option>' +
						 '<option value="ba"><i class="ba flag"></i>Bosnia</option>' +
						 '<option value="bw"><i class="bw flag"></i>Botswana</option>' +
						 '<option value="bv"><i class="bv flag"></i>Bouvet Island</option>' +
						 '<option value="br"><i class="br flag"></i>Brazil</option>' +
						 '<option value="vg"><i class="vg flag"></i>British Virgin Islands</option>' +
						 '<option value="bn"><i class="bn flag"></i>Brunei</option>' +
						 '<option value="bg"><i class="bg flag"></i>Bulgaria</option>' +
						 '<option value="bf"><i class="bf flag"></i>Burkina Faso</option>' +
						 '<option value="mm"><i class="mm flag"></i>Burma</option>' +
						 '<option value="bi"><i class="bi flag"></i>Burundi</option>' +
						 '<option value="tc"><i class="tc flag"></i>Caicos Islands</option>' +
						 '<option value="kh"><i class="kh flag"></i>Cambodia</option>' +
						 '<option value="cm"><i class="cm flag"></i>Cameroon</option>' +
						 '<option value="ca"><i class="ca flag"></i>Canada</option>' +
						 '<option value="cv"><i class="cv flag"></i>Cape Verde</option>' +
						 '<option value="ky"><i class="ky flag"></i>Cayman Islands</option>' +
						 '<option value="cf"><i class="cf flag"></i>Central African Republic</option>' +
						 '<option value="td"><i class="td flag"></i>Chad</option>' +
						 '<option value="cl"><i class="cl flag"></i>Chile</option>' +
						 '<option value="cn"><i class="cn flag"></i>China</option>' +
						 '<option value="cx"><i class="cx flag"></i>Christmas Island</option>' +
						 '<option value="cc"><i class="cc flag"></i>Cocos Islands</option>' +
						 '<option value="co"><i class="co flag"></i>Colombia</option>' +
						 '<option value="km"><i class="km flag"></i>Comoros</option>' +
						 '<option value="cg"><i class="cg flag"></i>Congo Brazzaville</option>' +
						 '<option value="cd"><i class="cd flag"></i>Congo</option>' +
						 '<option value="ck"><i class="ck flag"></i>Cook Islands</option>' +
						 '<option value="cr"><i class="cr flag"></i>Costa Rica</option>' +
						 '<option value="ci"><i class="ci flag"></i>Cote Divoire</option>' +
						 '<option value="hr"><i class="hr flag"></i>Croatia</option>' +
						 '<option value="cu"><i class="cu flag"></i>Cuba</option>' +
						 '<option value="cy"><i class="cy flag"></i>Cyprus</option>' +
						 '<option value="cz"><i class="cz flag"></i>Czech Republic</option>' +
						 '<option value="dk"><i class="dk flag"></i>Denmark</option>' +
						 '<option value="dj"><i class="dj flag"></i>Djibouti</option>' +
						 '<option value="dm"><i class="dm flag"></i>Dominica</option>' +
						 '<option value="do"><i class="do flag"></i>Dominican Republic</option>' +
						 '<option value="ec"><i class="ec flag"></i>Ecuador</option>' +
						 '<option value="eg"><i class="eg flag"></i>Egypt</option>' +
						 '<option value="sv"><i class="sv flag"></i>El Salvador</option>' +
						 '<option value="gb"><i class="gb flag"></i>England</option>' +
						 '<option value="gq"><i class="gq flag"></i>Equatorial Guinea</option>' +
						 '<option value="er"><i class="er flag"></i>Eritrea</option>' +
						 '<option value="ee"><i class="ee flag"></i>Estonia</option>' +
						 '<option value="et"><i class="et flag"></i>Ethiopia</option>' +
						 '<option value="eu"><i class="eu flag"></i>European Union</option>' +
						 '<option value="fk"><i class="fk flag"></i>Falkland Islands</option>' +
						 '<option value="fo"><i class="fo flag"></i>Faroe Islands</option>' +
						 '<option value="fj"><i class="fj flag"></i>Fiji</option>' +
						 '<option value="fi"><i class="fi flag"></i>Finland</option>' +
						 '<option value="fr"><i class="fr flag"></i>France</option>' +
						 '<option value="gf"><i class="gf flag"></i>French Guiana</option>' +
						 '<option value="pf"><i class="pf flag"></i>French Polynesia</option>' +
						 '<option value="tf"><i class="tf flag"></i>French Territories</option>' +
						 '<option value="ga"><i class="ga flag"></i>Gabon</option>' +
						 '<option value="gm"><i class="gm flag"></i>Gambia</option>' +
						 '<option value="ge"><i class="ge flag"></i>Georgia</option>' +
						 '<option value="de"><i class="de flag"></i>Germany</option>' +
						 '<option value="gh"><i class="gh flag"></i>Ghana</option>' +
						 '<option value="gi"><i class="gi flag"></i>Gibraltar</option>' +
						 '<option value="gr"><i class="gr flag"></i>Greece</option>' +
						 '<option value="gl"><i class="gl flag"></i>Greenland</option>' +
						 '<option value="gd"><i class="gd flag"></i>Grenada</option>' +
						 '<option value="gp"><i class="gp flag"></i>Guadeloupe</option>' +
						 '<option value="gu"><i class="gu flag"></i>Guam</option>' +
						 '<option value="gt"><i class="gt flag"></i>Guatemala</option>' +
						 '<option value="gw"><i class="gw flag"></i>Guinea-Bissau</option>' +
						 '<option value="gn"><i class="gn flag"></i>Guinea</option>' +
						 '<option value="gy"><i class="gy flag"></i>Guyana</option>' +
						 '<option value="ht"><i class="ht flag"></i>Haiti</option>' +
						 '<option value="hm"><i class="hm flag"></i>Heard Island</option>' +
						 '<option value="hn"><i class="hn flag"></i>Honduras</option>' +
						 '<option value="hk"><i class="hk flag"></i>Hong Kong</option>' +
						 '<option value="hu"><i class="hu flag"></i>Hungary</option>' +
						 '<option value="is"><i class="is flag"></i>Iceland</option>' +
						 '<option value="in"><i class="in flag"></i>India</option>' +
						 '<option value="io"><i class="io flag"></i>Indian Ocean Territory</option>' +
						 '<option value="id"><i class="id flag"></i>Indonesia</option>' +
						 '<option value="ir"><i class="ir flag"></i>Iran</option>' +
						 '<option value="iq"><i class="iq flag"></i>Iraq</option>' +
						 '<option value="ie"><i class="ie flag"></i>Ireland</option>' +
						 '<option value="il"><i class="il flag"></i>Israel</option>' +
						 '<option value="it"><i class="it flag"></i>Italy</option>' +
						 '<option value="jm"><i class="jm flag"></i>Jamaica</option>' +
						 '<option value="jp"><i class="jp flag"></i>Japan</option>' +
						 '<option value="jo"><i class="jo flag"></i>Jordan</option>' +
						 '<option value="kz"><i class="kz flag"></i>Kazakhstan</option>' +
						 '<option value="ke"><i class="ke flag"></i>Kenya</option>' +
						 '<option value="ki"><i class="ki flag"></i>Kiribati</option>' +
						 '<option value="kw"><i class="kw flag"></i>Kuwait</option>' +
						 '<option value="kg"><i class="kg flag"></i>Kyrgyzstan</option>' +
						 '<option value="la"><i class="la flag"></i>Laos</option>' +
						 '<option value="lv"><i class="lv flag"></i>Latvia</option>' +
						 '<option value="lb"><i class="lb flag"></i>Lebanon</option>' +
						 '<option value="ls"><i class="ls flag"></i>Lesotho</option>' +
						 '<option value="lr"><i class="lr flag"></i>Liberia</option>' +
						 '<option value="ly"><i class="ly flag"></i>Libya</option>' +
						 '<option value="li"><i class="li flag"></i>Liechtenstein</option>' +
						 '<option value="lt"><i class="lt flag"></i>Lithuania</option>' +
						 '<option value="lu"><i class="lu flag"></i>Luxembourg</option>' +
						 '<option value="mo"><i class="mo flag"></i>Macau</option>' +
						 '<option value="mk"><i class="mk flag"></i>Macedonia</option>' +
						 '<option value="mg"><i class="mg flag"></i>Madagascar</option>' +
						 '<option value="mw"><i class="mw flag"></i>Malawi</option>' +
						 '<option value="my"><i class="my flag"></i>Malaysia</option>' +
						 '<option value="mv"><i class="mv flag"></i>Maldives</option>' +
						 '<option value="ml"><i class="ml flag"></i>Mali</option>' +
						 '<option value="mt"><i class="mt flag"></i>Malta</option>' +
						 '<option value="mh"><i class="mh flag"></i>Marshall Islands</option>' +
						 '<option value="mq"><i class="mq flag"></i>Martinique</option>' +
						 '<option value="mr"><i class="mr flag"></i>Mauritania</option>' +
						 '<option value="mu"><i class="mu flag"></i>Mauritius</option>' +
						 '<option value="yt"><i class="yt flag"></i>Mayotte</option>' +
						 '<option value="mx"><i class="mx flag"></i>Mexico</option>' +
						 '<option value="fm"><i class="fm flag"></i>Micronesia</option>' +
						 '<option value="md"><i class="md flag"></i>Moldova</option>' +
						 '<option value="mc"><i class="mc flag"></i>Monaco</option>' +
						 '<option value="mn"><i class="mn flag"></i>Mongolia</option>' +
						 '<option value="me"><i class="me flag"></i>Montenegro</option>' +
						 '<option value="ms"><i class="ms flag"></i>Montserrat</option>' +
						 '<option value="ma"><i class="ma flag"></i>Morocco</option>' +
						 '<option value="mz"><i class="mz flag"></i>Mozambique</option>' +
						 '<option value="na"><i class="na flag"></i>Namibia</option>' +
						 '<option value="nr"><i class="nr flag"></i>Nauru</option>' +
						 '<option value="np"><i class="np flag"></i>Nepal</option>' +
						 '<option value="an"><i class="an flag"></i>Netherlands Antilles</option>' +
						 '<option value="nl"><i class="nl flag"></i>Netherlands</option>' +
						 '<option value="nc"><i class="nc flag"></i>New Caledonia</option>' +
						 '<option value="pg"><i class="pg flag"></i>New Guinea</option>' +
						 '<option value="nz"><i class="nz flag"></i>New Zealand</option>' +
						 '<option value="ni"><i class="ni flag"></i>Nicaragua</option>' +
						 '<option value="ne"><i class="ne flag"></i>Niger</option>' +
						 '<option value="ng"><i class="ng flag"></i>Nigeria</option>' +
						 '<option value="nu"><i class="nu flag"></i>Niue</option>' +
						 '<option value="nf"><i class="nf flag"></i>Norfolk Island</option>' +
						 '<option value="kp"><i class="kp flag"></i>North Korea</option>' +
						 '<option value="mp"><i class="mp flag"></i>Northern Mariana Islands</option>' +
						 '<option value="no"><i class="no flag"></i>Norway</option>' +
						 '<option value="om"><i class="om flag"></i>Oman</option>' +
						 '<option value="pk"><i class="pk flag"></i>Pakistan</option>' +
						 '<option value="pw"><i class="pw flag"></i>Palau</option>' +
						 '<option value="ps"><i class="ps flag"></i>Palestine</option>' +
						 '<option value="pa"><i class="pa flag"></i>Panama</option>' +
						 '<option value="py"><i class="py flag"></i>Paraguay</option>' +
						 '<option value="pe"><i class="pe flag"></i>Peru</option>' +
						 '<option value="ph"><i class="ph flag"></i>Philippines</option>' +
						 '<option value="pn"><i class="pn flag"></i>Pitcairn Islands</option>' +
						 '<option value="pl"><i class="pl flag"></i>Poland</option>' +
						 '<option value="pt"><i class="pt flag"></i>Portugal</option>' +
						 '<option value="pr"><i class="pr flag"></i>Puerto Rico</option>' +
						 '<option value="qa"><i class="qa flag"></i>Qatar</option>' +
						 '<option value="re"><i class="re flag"></i>Reunion</option>' +
						 '<option value="ro"><i class="ro flag"></i>Romania</option>' +
						 '<option value="ru"><i class="ru flag"></i>Russia</option>' +
						 '<option value="rw"><i class="rw flag"></i>Rwanda</option>' +
						 '<option value="sh"><i class="sh flag"></i>Saint Helena</option>' +
						 '<option value="kn"><i class="kn flag"></i>Saint Kitts and Nevis</option>' +
						 '<option value="lc"><i class="lc flag"></i>Saint Lucia</option>' +
						 '<option value="pm"><i class="pm flag"></i>Saint Pierre</option>' +
						 '<option value="vc"><i class="vc flag"></i>Saint Vincent</option>' +
						 '<option value="ws"><i class="ws flag"></i>Samoa</option>' +
						 '<option value="sm"><i class="sm flag"></i>San Marino</option>' +
						 '<option value="gs"><i class="gs flag"></i>Sandwich Islands</option>' +
						 '<option value="st"><i class="st flag"></i>Sao Tome</option>' +
						 '<option value="sa"><i class="sa flag"></i>Saudi Arabia</option>' +
						 '<option value="sn"><i class="sn flag"></i>Senegal</option>' +
						 '<option value="cs"><i class="cs flag"></i>Serbia</option>' +
						 '<option value="rs"><i class="rs flag"></i>Serbia</option>' +
						 '<option value="sc"><i class="sc flag"></i>Seychelles</option>' +
						 '<option value="sl"><i class="sl flag"></i>Sierra Leone</option>' +
						 '<option value="sg"><i class="sg flag"></i>Singapore</option>' +
						 '<option value="sk"><i class="sk flag"></i>Slovakia</option>' +
						 '<option value="si"><i class="si flag"></i>Slovenia</option>' +
						 '<option value="sb"><i class="sb flag"></i>Solomon Islands</option>' +
						 '<option value="so"><i class="so flag"></i>Somalia</option>' +
						 '<option value="za"><i class="za flag"></i>South Africa</option>' +
						 '<option value="kr"><i class="kr flag"></i>South Korea</option>' +
						 '<option value="es"><i class="es flag"></i>Spain</option>' +
						 '<option value="lk"><i class="lk flag"></i>Sri Lanka</option>' +
						 '<option value="sd"><i class="sd flag"></i>Sudan</option>' +
						 '<option value="sr"><i class="sr flag"></i>Suriname</option>' +
						 '<option value="sj"><i class="sj flag"></i>Svalbard</option>' +
						 '<option value="sz"><i class="sz flag"></i>Swaziland</option>' +
						 '<option value="se"><i class="se flag"></i>Sweden</option>' +
						 '<option value="ch"><i class="ch flag"></i>Switzerland</option>' +
						 '<option value="sy"><i class="sy flag"></i>Syria</option>' +
						 '<option value="tw"><i class="tw flag"></i>Taiwan</option>' +
						 '<option value="tj"><i class="tj flag"></i>Tajikistan</option>' +
						 '<option value="tz"><i class="tz flag"></i>Tanzania</option>' +
						 '<option value="th"><i class="th flag"></i>Thailand</option>' +
						 '<option value="tl"><i class="tl flag"></i>Timorleste</option>' +
						 '<option value="tg"><i class="tg flag"></i>Togo</option>' +
						 '<option value="tk"><i class="tk flag"></i>Tokelau</option>' +
						 '<option value="to"><i class="to flag"></i>Tonga</option>' +
						 '<option value="tt"><i class="tt flag"></i>Trinidad</option>' +
						 '<option value="tn"><i class="tn flag"></i>Tunisia</option>' +
						 '<option value="tr"><i class="tr flag"></i>Turkey</option>' +
						 '<option value="tm"><i class="tm flag"></i>Turkmenistan</option>' +
						 '<option value="tv"><i class="tv flag"></i>Tuvalu</option>' +
						 '<option value="ug"><i class="ug flag"></i>Uganda</option>' +
						 '<option value="ua"><i class="ua flag"></i>Ukraine</option>' +
						 '<option value="ae"><i class="ae flag"></i>United Arab Emirates</option>' +
						 '<option value="us"><i class="us flag"></i>United States</option>' +
						 '<option value="uy"><i class="uy flag"></i>Uruguay</option>' +
						 '<option value="um"><i class="um flag"></i>Us Minor Islands</option>' +
						 '<option value="vi"><i class="vi flag"></i>Us Virgin Islands</option>' +
						 '<option value="uz"><i class="uz flag"></i>Uzbekistan</option>' +
						 '<option value="vu"><i class="vu flag"></i>Vanuatu</option>' +
						 '<option value="va"><i class="va flag"></i>Vatican City</option>' +
						 '<option value="ve"><i class="ve flag"></i>Venezuela</option>' +
						 '<option value="vn"><i class="vn flag"></i>Vietnam</option>' +
						 '<option value="wf"><i class="wf flag"></i>Wallis and Futuna</option>' +
						 '<option value="eh"><i class="eh flag"></i>Western Sahara</option>' +
						 '<option value="ye"><i class="ye flag"></i>Yemen</option>' +
						 '<option value="zm"><i class="zm flag"></i>Zambia</option>' +
						 '<option value="zw"><i class="zw flag"></i>Zimbabwe</option>' +
						 '</select></br>'

let middleDiv = 'What is your age? </br>'

let ageDropdown = '<select class="ui dropdown age">' +
				  '<option value="null">Age</option>'   
for (let i = 1; i <= 120; i++) {
	ageDropdown += '<option value="' + i.toString() + '">' + i.toString() + "</option>"
}
ageDropdown += '</select></br></br>'

let finalDiv = 'What is your gender? </br>'
let genderDropdown = '<select class="ui dropdown gender">' +
					 '<option value="null">Gender</option>' +
					 '<option value="w">Woman</option>' +
					 '<option value="m">Man</option>' +
					 '<option value="nb">Non-binary</option>' +
					 '<option value="pntd">Prefer not to disclose</option>' +
					 '<option value="ptsd">Prefer to self-describe</option>' +
					 '</select>'

let genderField = '<div class="ui form" style="margin-top: 2vh;">' +
  				  '<div class="field">' +
  				  '<input class="description" type="text" style="height: 6vh;" placeholder="If you prefer to self-describe, please do so here.">' +
				  '</div>' +
				  '</div>'

let demographicsHtml = initialDiv + mTurkIDField + secondDiv + countriesDropdown + middleDiv + ageDropdown + finalDiv + genderDropdown + genderField + '</div>';

export default demographicsHtml;
