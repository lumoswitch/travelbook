'use strict';

/************************** HTML for user profile *****************************************/
var string_userProfile="\
            <div id=\"userBanner\">\
                <img src=\"images/avatar.png\" alt=\"Avatar\" class=\"avatar\">\
            \
            <table id=\"userAccount\" class=\"table\">\
                <tbody>\
                  <tr>\
                    <th scope=\"row\">Name:</th>\
                    <td id=\"userName\"></td>\
                  <tr>\
                    <th scope=\"row\">Surname:</th>\
                    <td id=\"userSurname\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">Username:</th>\
                    <td id=\"userUsername\"></td>\
                  </tr>\
                   <tr>\
                    <th scope=\"row\">Email:</th>\
                    <td id=\"userEmail\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">Gender:</th>\
                    <td id=\"userGender\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">Birth:</th>\
                    <td id=\"userBirth\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">Country:</th>\
                    <td id=\"userCountry\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">City:</th>\
                    <td id=\"userCity\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">Address:</th>\
                    <td id=\"userAddress\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">Job:</th>\
                    <td id=\"userJob\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">Interests:</th>\
                    <td id=\"userInterests\"></td>\
                  </tr>\
                  <tr>\
                    <th scope=\"row\">Info:</th>\
                    <td id=\"userInfo\"></td>\
                  </tr>\
                </tbody>\
            </table></div>";


/********************************** HTML for homepage *************************************************/

var string_first_page_informations="\
        <div id=\"inform\">\
                <h2>WHY LogBook?</h2>\
                <p>LogBook is the most complete, easy-to-use, social platform that turns networking into,<br> a fun social experience.</p>\
            </div>\
            \
            <div id=\"text\">\
                <div id=\"icons\">\
                    <i class=\"fas fa-magic fa-5x\"></i>\
                </div>    \
                <h3>Slick Design</h3>\
                <p>LogBook has a smooth, modern design that will impress your members,<br>\
                    encourage them to stay and inspire them to tell their friends.\
                </p>\
            </div>\
            <div id=\"text1\">\
                <div id=\"icons1\">\
                    <i class=\"fas fa-laptop fa-5x\"></i>  \
                </div>   \
                <h3>Fully Responsive</h3>\
                <p>LogBook looks amazing and works perfectly <br>\
                    on every device: phone and tablet, laptop and desktop.\
                </p>\
            </div>\
            <div id=\"text2\">\
                <div id=\"icons2\">\
                    <i class=\"fas fa-users fa-5x\"></i>\
                </div>  \
                <h3>Friendly Community</h3>\
                <p>We’ve found that our customers like to connect with other users and with<br> the LogBook team,\
                    ask questions, propose new features and more. We’re a <br>real community,and we’d love you to join us!\
                </p>\
            </div>\
            \
            <div id=\"text3\">\
                <div id=\"icons3\">\
                    <i class=\"fa fa-thumbs-up fa-5x\"></i>\
                </div>\
                <h3>Gazillions of Features</h3>\
                <p>LogBook has so many features and so many opportunities.<br> From private messages to friend reviews,\
                    and from<br> groups to events, we’ve got it all!\
                </p>\
            </div>\
        \
            <!-- Banner 2 -->\
            <div class=\"container\">\
                <img id=\"join\" src=\"images/JOIN.jpg\" alt=\"JOIN\" class=\"image\">\
                <div class=\"middle\">\
                    <div class=\"text\">Join our community today!</div>\
                </div>\
            </div> ";

/********************************** HTML for footer *************************************************/
var string_footer="\
<div id=\"footer\" class=\"hero-image3\">\
    <div class=\"hero-text3\">\
        <h3>ABOUT US</h3>\
        <ul>\
            <li>Offices</li>\
            <li>Partners</li>\
            <li>Collaborations</li>\
            <li>Resources</li>\
        </ul>\
    </div>\
    \
    <div class=\"hero-text4\">\
        <h3>CONTACT US</h3>\
        <ul>\
            <li>Contact Us</li>\
            <li>Pre-Sales Questions</li>\
            <li>Billing</li>\
        </ul>\
    </div>\
    \
    <div class=\"hero-text5\">\
        <h3>OUR PRODUCT</h3>\
        <ul>\
            <li>Product Tour</li>\
            <li>Pricing</li>\
            <li>Change Log</li>\
            <li>Road Map</li>\
        </ul>\
    </div>\
    \
    <div class=\"hero-text6\">\
        <h3>SUPPORT</h3>\
        <ul>\
            <li>Visit Support Forum</li>\
            <li>Documentation Wiki</li>\
            <li>Translations</li>\
            <li>FAQ</li>\
        </ul>\
    </div>\
    \
    <div class=\"hero-text7\">\
        <h3>SUPPORT</h3>\
        <ul>\
            <li>Offices</li>\
            <li>Partners</li>\
            <li>Collaborations</li>\
            <li>Resources</li>\
        </ul>\
    </div></div>";

/********************************** HTML for all users table *************************************************/
var string_usersInPlatform="\
<table id=\"usersTable\" class=\"table table-striped table-bordered\">\
    <thead>\
        <tr>\
            <th class=\"th-sm\">UserID</th>\
            <th class=\"th-sm\">Username</th>\
            <th class=\"th-sm\">Full Name</th>\
            <!-- <th class=\"th-sm\">Surname</th> -->\
            <th class=\"th-sm\">Email</th>\
            <th class=\"th-sm\">Gender</th>\
            <th class=\"th-sm\">Date of birth</th>\
            <!-- <th class=\"th-sm\">Country</th>\
            <th class=\"th-sm\">City</th> -->\
            <th class=\"th-sm\">Address, City Country</th>\
            <th class=\"th-sm\">Job</th>\
            <th class=\"th-sm\">Interests</th>\
            <th class=\"th-sm\">General Information</th>\
            <th class=\"th-sm\">Registered since</th>\
        </tr>\
    </thead>\
    <tbody id=\"usersTableBody\">\
    \
    </tbody>\
</table>";

/********************************** HTML for register form *************************************************/

var registerHeader = '<div id="register" class="modal fade" role="dialog">\
                            <div class="modal-dialog modal-lg">\
                                <div class="modal-content">\
                                    <div class="modal-header">\
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                                    <span aria-hidden="true">&times;</span> </button>\
                                        <h4 id="registerTitle" class="modal-title"><span class="glyphicon glyphicon-user" ></span>  Register</h4>\
                                    </div>\
                                    <div class="modal-body">\
                                        <p id="helpMsg">Please fill in this form to create an account.</p><hr>\
                                        <div class="row"><div class="col-25"><label class="control-label col-sm-2" for="name"><b>Name:</b></label></div>\
                    <div class="col-75">\
                        <input type="text" onkeyup="checkInput(\'name\', document.getElementById(\'name\').value,\'warning1\',patterns.namesP,\'Name must be between 3 to 15 characters\');" id="name" placeholder="Enter Name" name="name" maxlength="15" pattern="[A-Za-z]+.{2,15}" title="Name must be between 3 to 15 characters" required>\
                        <small id="warning1"></small></div></div>\
                    <div class="row"><div class="col-25"><label class="control-label col-sm-2" for="surname"><b>Surname:</b></label></div>\
                    <div class="col-75">\
                        <input type="text" onkeyup="checkInput(\'surname\',document.getElementById(\'surname\').value,\'warning2\',patterns.namesP,\'Surname must be between 3 to 15 characters\');" id="surname" maxlength="15" pattern="[A-Za-z]+.{2,15}" placeholder="Enter Surname" name="surname" title="Surname must be between 3 to 15 characters" required>\
                        <small id="warning2"></small></div></div><div class="row"><div class="col-25"><label class="control-label col-sm-2" for="username"><b>Username:</b></label></div>\
                    <div class="col-75">\
                        <input type="text" onkeyup="if(checkInput(\'username\',document.getElementById(\'username\').value,\'warning3\',patterns.usernameP,\'Username must be at least 8 characters\')) ajaxRequest(\'POST\',\'/logbook/ifExists\',responseFromIfExistsServlet,JSON.stringify({\'username\': document.getElementById(\'username\').value,\'field\': \'username\'}));"id="username" pattern="[A-Za-z]+.{8,}" placeholder="Enter Username" name="username" title="Username must be at least 8 characters" required>\
                        <small id="warning3"></small>\
                        <br><p>Do you want to set an avatar?</p>\
                        <input type="radio" name="tab" class="yes" value="yes" onclick="show(\'vidcanv\');">Yes<br>\
                        <input type="radio" name="tab" class="no" value="no" onclick="hide();"> No</div>\
                    <div class="myclass" id="vidcanv">\
                        <video id=\'video\' width=\'640\' height=\'480\'autoplay></video>\
                        <input type=\'button\' class="btn btn-info" id="snap" value =\'Take Photo\'>\
                        <input type=\'button\' class="btn btn-info" id="upload" value =\'Upload Image\'>\
                        <canvas id=\'canvas\' width=\'640\' height=\'480\'></canvas></div></div><div class="row"><div class="col-25"><label class="control-label col-sm-2" for="email"><b>Email:</b></label></div>\
                        <div class="col-75">\
                            <input type="email" onkeyup="if(checkInput(\'email\', document.getElementById(\'email\').value,\'warning4\',patterns.emailP,\'Please enter a valid email address\')) ajaxRequest(\'POST\',\'/logbook/ifExists\',responseFromIfExistsServlet,JSON.stringify({\'email\': document.getElementById(\'email\').value,\'field\': \'email\'}));" id="email" pattern="[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}" placeholder="Enter email" name="email" title="Please enter a valid email address" required><small id="warning4"></small></div></div><div class="row"><div class="col-25"><label class="control-label col-sm-2" for="pwd"><b>Password:</b></label></div>\
                    <div class="col-75">\
                        <input type="password" onkeyup="checkInput(\'pwd\', document.getElementById(\'pwd\').value,\'warning5\',patterns.passwordP,\'Password must be between 8 to 10 characters and must contain at least one digit,one letter and one symbol such as !,$,@,#,%,&,*\');" id="pwd" maxlength="10" pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!$@#%&*]).{8,10}" placeholder="Enter password" name="pwd" title="Password must be between 8 to 10 characters and must contain at least one digit,one letter and one symbol such as !,$,@,#,%,&,*" required>\
                        <small id="warning5"></small></div></div>\
                <div class="row"><div class="col-25"><label class="control-label col-sm-offset-1" for="rpt-pwd"><b>Confirm Password:</b></label></div>\
                    <div class="col-75">\
                        <input type="password" onkeyup="if(document.getElementById(\'pwd\').value == document.getElementById(\'rpt-pwd\').value){ document.getElementById(\'rpt-pwd\').setCustomValidity(\'\');document.getElementById(\'warning\').innerHTML = \'Passwords matching!\';}else{document.getElementById(\'rpt-pwd\').setCustomValidity(\'Passwords mismatch! Re-type to confirm password\');document.getElementById(\'warning\').innerHTML = \'Passwords mismatch! Re-type to confirm password\';};"\
                        id="rpt-pwd" maxlength="10" pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!$@#%&*]).{8,10}" placeholder="Confirm password" name="rpt-pwd" title="Please re-type your password" required>\
                        <small id="warning"></small></div></div><div class="row"><div class="col-25"><label class="control-label col-sm-2" for="gender">Gender:</label></div>\
                        <div id="gender" class="col-75">\
                            <input type="radio" id="male" name="gender" value="male"> Male<br>\
                            <input type="radio" id="female" name="gender" value="female"> Female<br>\
                            <input type="radio" name="gender" value="other"> Don\'t Show  \</div></div><div class="row"><div class="col-25"><label class="control-label col-sm-offset-1" for="birth"><b>Date of birth:</b></label></div>\
                <div class="col-75"><input type="date" id="birth" name="birth" value="" required/></div></div><div class="row"><div class="col-25"><label class="control-label col-sm-2" for="country"><b>Country:</b></label></div>\
   <div class="col-75">\
    <select name="country" id="country" >\
        <option value="GR" label="Greece">Greece</option>\
        <optgroup id="country-optgroup-Africa" label="Africa">\
        <option value="DZ" label="Algeria">Algeria</option>\
        <option value="AO" label="Angola">Angola</option>\
        <option value="BJ" label="Benin">Benin</option>\
        <option value="BW" label="Botswana">Botswana</option>\
        <option value="BF" label="Burkina Faso">Burkina Faso</option>\
        <option value="BI" label="Burundi">Burundi</option>\
        <option value="CM" label="Cameroon">Cameroon</option>\
        <option value="CV" label="Cape Verde">Cape Verde</option>\
        <option value="CF" label="Central African Republic">Central African Republic</option>\
        <option value="TD" label="Chad">Chad</option>\
        <option value="KM" label="Comoros">Comoros</option>\
        <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>\
        <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>\
        <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>\
        <option value="DJ" label="Djibouti">Djibouti</option>\
        <option value="EG" label="Egypt">Egypt</option>\
        <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>\
        <option value="ER" label="Eritrea">Eritrea</option>\
        <option value="ET" label="Ethiopia">Ethiopia</option>\
        <option value="GA" label="Gabon">Gabon</option>\
        <option value="GM" label="Gambia">Gambia</option>\
        <option value="GH" label="Ghana">Ghana</option>\
        <option value="GN" label="Guinea">Guinea</option>\
        <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>\
        <option value="KE" label="Kenya">Kenya</option>\
        <option value="LS" label="Lesotho">Lesotho</option>\
        <option value="LR" label="Liberia">Liberia</option>\
        <option value="LY" label="Libya">Libya</option>\
        <option value="MG" label="Madagascar">Madagascar</option>\
        <option value="MW" label="Malawi">Malawi</option>\
        <option value="ML" label="Mali">Mali</option>\
        <option value="MR" label="Mauritania">Mauritania</option>\
        <option value="MU" label="Mauritius">Mauritius</option>\
        <option value="YT" label="Mayotte">Mayotte</option>\
        <option value="MA" label="Morocco">Morocco</option>\
        <option value="MZ" label="Mozambique">Mozambique</option>\
        <option value="NA" label="Namibia">Namibia</option>\
        <option value="NE" label="Niger">Niger</option>\
        <option value="NG" label="Nigeria">Nigeria</option>\
        <option value="RW" label="Rwanda">Rwanda</option>\
        <option value="RE" label="Réunion">Réunion</option>\
        <option value="SH" label="Saint Helena">Saint Helena</option>\
        <option value="SN" label="Senegal">Senegal</option>\
        <option value="SC" label="Seychelles">Seychelles</option>\
        <option value="SL" label="Sierra Leone">Sierra Leone</option>\
        <option value="SO" label="Somalia">Somalia</option>\
        <option value="ZA" label="South Africa">South Africa</option>\
        <option value="SD" label="Sudan">Sudan</option>\
        <option value="SZ" label="Swaziland">Swaziland</option>\
        <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>\
        <option value="TZ" label="Tanzania">Tanzania</option>\
        <option value="TG" label="Togo">Togo</option>\
        <option value="TN" label="Tunisia">Tunisia</option>\
        <option value="UG" label="Uganda">Uganda</option>\
        <option value="EH" label="Western Sahara">Western Sahara</option>\
        <option value="ZM" label="Zambia">Zambia</option>\
        <option value="ZW" label="Zimbabwe">Zimbabwe</option>\
        </optgroup>\
        <optgroup id="country-optgroup-Americas" label="Americas">\
        <option value="AI" label="Anguilla">Anguilla</option>\
        <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>\
        <option value="AR" label="Argentina">Argentina</option>\
        <option value="AW" label="Aruba">Aruba</option>\
        <option value="BS" label="Bahamas">Bahamas</option>\
        <option value="BB" label="Barbados">Barbados</option>\
        <option value="BZ" label="Belize">Belize</option>\
        <option value="BM" label="Bermuda">Bermuda</option>\
        <option value="BO" label="Bolivia">Bolivia</option>\
        <option value="BR" label="Brazil">Brazil</option>\
        <option value="VG" label="British Virgin Islands">British Virgin Islands</option>\
        <option value="CA" label="Canada">Canada</option>\
        <option value="KY" label="Cayman Islands">Cayman Islands</option>\
        <option value="CL" label="Chile">Chile</option>\
        <option value="CO" label="Colombia">Colombia</option>\
        <option value="CR" label="Costa Rica">Costa Rica</option>\
        <option value="CU" label="Cuba">Cuba</option>\
        <option value="DM" label="Dominica">Dominica</option>\
        <option value="DO" label="Dominican Republic">Dominican Republic</option>\
        <option value="EC" label="Ecuador">Ecuador</option>\
        <option value="SV" label="El Salvador">El Salvador</option>\
        <option value="FK" label="Falkland Islands">Falkland Islands</option>\
        <option value="GF" label="French Guiana">French Guiana</option>\
        <option value="GL" label="Greenland">Greenland</option>\
        <option value="GD" label="Grenada">Grenada</option>\
        <option value="GP" label="Guadeloupe">Guadeloupe</option>\
        <option value="GT" label="Guatemala">Guatemala</option>\
        <option value="GY" label="Guyana">Guyana</option>\
        <option value="HT" label="Haiti">Haiti</option>\
        <option value="HN" label="Honduras">Honduras</option>\
        <option value="JM" label="Jamaica">Jamaica</option>\
        <option value="MQ" label="Martinique">Martinique</option>\
        <option value="MX" label="Mexico">Mexico</option>\
        <option value="MS" label="Montserrat">Montserrat</option>\
        <option value="AN" label="Netherlands Antilles">Netherlands Antilles</option>\
        <option value="NI" label="Nicaragua">Nicaragua</option>\
        <option value="PA" label="Panama">Panama</option>\
        <option value="PY" label="Paraguay">Paraguay</option>\
        <option value="PE" label="Peru">Peru</option>\
        <option value="PR" label="Puerto Rico">Puerto Rico</option>\
        <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>\
        <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>\
        <option value="LC" label="Saint Lucia">Saint Lucia</option>\
        <option value="MF" label="Saint Martin">Saint Martin</option>\
        <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>\
        <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>\
        <option value="SR" label="Suriname">Suriname</option>\
        <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>\
        <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>\
        <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>\
        <option value="US" label="United States">United States</option>\
        <option value="UY" label="Uruguay">Uruguay</option>\
        <option value="VE" label="Venezuela">Venezuela</option>\
        </optgroup>\
        <optgroup id="country-optgroup-Asia" label="Asia">\
        <option value="AF" label="Afghanistan">Afghanistan</option>\
        <option value="AM" label="Armenia">Armenia</option>\
        <option value="AZ" label="Azerbaijan">Azerbaijan</option>\
        <option value="BH" label="Bahrain">Bahrain</option>\
        <option value="BD" label="Bangladesh">Bangladesh</option>\
        <option value="BT" label="Bhutan">Bhutan</option>\
        <option value="BN" label="Brunei">Brunei</option>\
        <option value="KH" label="Cambodia">Cambodia</option>\
        <option value="CN" label="China">China</option>\
        <option value="CY" label="Cyprus">Cyprus</option>\
        <option value="GE" label="Georgia">Georgia</option>\
        <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>\
        <option value="IN" label="India">India</option>\
        <option value="ID" label="Indonesia">Indonesia</option>\
        <option value="IR" label="Iran">Iran</option>\
        <option value="IQ" label="Iraq">Iraq</option>\
        <option value="IL" label="Israel">Israel</option>\
        <option value="JP" label="Japan">Japan</option>\
        <option value="JO" label="Jordan">Jordan</option>\
        <option value="KZ" label="Kazakhstan">Kazakhstan</option>\
        <option value="KW" label="Kuwait">Kuwait</option>\
        <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>\
        <option value="LA" label="Laos">Laos</option>\
        <option value="LB" label="Lebanon">Lebanon</option>\
        <option value="MO" label="Macau SAR China">Macau SAR China</option>\
        <option value="MY" label="Malaysia">Malaysia</option>\
        <option value="MV" label="Maldives">Maldives</option>\
        <option value="MN" label="Mongolia">Mongolia</option>\
        <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>\
        <option value="NP" label="Nepal">Nepal</option>\
        <option value="NT" label="Neutral Zone">Neutral Zone</option>\
        <option value="KP" label="North Korea">North Korea</option>\
        <option value="OM" label="Oman">Oman</option>\
        <option value="PK" label="Pakistan">Pakistan</option>\
        <option value="PS" label="Palestinian Territories">Palestinian Territories</option>\
        <option value="YD" label="People\'s Democratic Republic of Yemen">People\'s Democratic Republic of Yemen</option>\
        <option value="PH" label="Philippines">Philippines</option>\
        <option value="QA" label="Qatar">Qatar</option>\
        <option value="SA" label="Saudi Arabia">Saudi Arabia</option>\
        <option value="SG" label="Singapore">Singapore</option>\
        <option value="KR" label="South Korea">South Korea</option>\
        <option value="LK" label="Sri Lanka">Sri Lanka</option>\
        <option value="SY" label="Syria">Syria</option>\
        <option value="TW" label="Taiwan">Taiwan</option>\
        <option value="TJ" label="Tajikistan">Tajikistan</option>\
        <option value="TH" label="Thailand">Thailand</option>\
        <option value="TL" label="Timor-Leste">Timor-Leste</option>\
        <option value="TR" label="Turkey">Turkey</option>\
        <option value="™" label="Turkmenistan">Turkmenistan</option>\
        <option value="AE" label="United Arab Emirates">United Arab Emirates</option>\
        <option value="UZ" label="Uzbekistan">Uzbekistan</option>\
        <option value="VN" label="Vietnam">Vietnam</option>\
        <option value="YE" label="Yemen">Yemen</option>\
        </optgroup>\
        <optgroup id="country-optgroup-Europe" label="Europe">\
        <option value="AL" label="Albania">Albania</option>\
        <option value="AD" label="Andorra">Andorra</option>\
        <option value="AT" label="Austria">Austria</option>\
        <option value="BY" label="Belarus">Belarus</option>\
        <option value="BE" label="Belgium">Belgium</option>\
        <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>\
        <option value="BG" label="Bulgaria">Bulgaria</option>\
        <option value="HR" label="Croatia">Croatia</option>\
        <option value="CY" label="Cyprus">Cyprus</option>\
        <option value="CZ" label="Czech Republic">Czech Republic</option>\
        <option value="DK" label="Denmark">Denmark</option>\
        <option value="DD" label="East Germany">East Germany</option>\
        <option value="EE" label="Estonia">Estonia</option>\
        <option value="FO" label="Faroe Islands">Faroe Islands</option>\
        <option value="FI" label="Finland">Finland</option>\
        <option value="FR" label="France">France</option>\
        <option value="DE" label="Germany">Germany</option>\
        <option value="GI" label="Gibraltar">Gibraltar</option>\
        <option value="GR" label="Greece">Greece</option>\
        <option value="GG" label="Guernsey">Guernsey</option>\
        <option value="HU" label="Hungary">Hungary</option>\
        <option value="IS" label="Iceland">Iceland</option>\
        <option value="IE" label="Ireland">Ireland</option>\
        <option value="IM" label="Isle of Man">Isle of Man</option>\
        <option value="IT" label="Italy">Italy</option>\
        <option value="JE" label="Jersey">Jersey</option>\
        <option value="LV" label="Latvia">Latvia</option>\
        <option value="LI" label="Liechtenstein">Liechtenstein</option>\
        <option value="LT" label="Lithuania">Lithuania</option>\
        <option value="LU" label="Luxembourg">Luxembourg</option>\
        <option value="MK" label="Macedonia">Macedonia</option>\
        <option value="MT" label="Malta">Malta</option>\
        <option value="FX" label="Metropolitan France">Metropolitan France</option>\
        <option value="MD" label="Moldova">Moldova</option>\
        <option value="MC" label="Monaco">Monaco</option>\
        <option value="ME" label="Montenegro">Montenegro</option>\
        <option value="NL" label="Netherlands">Netherlands</option>\
        <option value="NO" label="Norway">Norway</option>\
        <option value="PL" label="Poland">Poland</option>\
        <option value="PT" label="Portugal">Portugal</option>\
        <option value="RO" label="Romania">Romania</option>\
        <option value="RU" label="Russia">Russia</option>\
        <option value="SM" label="San Marino">San Marino</option>\
        <option value="RS" label="Serbia">Serbia</option>\
        <option value="CS" label="Serbia and Montenegro">Serbia and Montenegro</option>\
        <option value="SK" label="Slovakia">Slovakia</option>\
        <option value="SI" label="Slovenia">Slovenia</option>\
        <option value="ES" label="Spain">Spain</option>\
        <option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>\
        <option value="SE" label="Sweden">Sweden</option>\
        <option value="CH" label="Switzerland">Switzerland</option>\
        <option value="UA" label="Ukraine">Ukraine</option>\
        <option value="SU" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>\
        <option value="GB" label="United Kingdom">United Kingdom</option>\
        <option value="VA" label="Vatican City">Vatican City</option>\
        <option value="AX" label="Åland Islands">Åland Islands</option>\
        </optgroup>\
        <optgroup id="country-optgroup-Oceania" label="Oceania">\
        <option value="AS" label="American Samoa">American Samoa</option>\
        <option value="AQ" label="Antarctica">Antarctica</option>\
        <option value="AU" label="Australia">Australia</option>\
        <option value="BV" label="Bouvet Island">Bouvet Island</option>\
        <option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</option>\
        <option value="CX" label="Christmas Island">Christmas Island</option>\
        <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>\
        <option value="CK" label="Cook Islands">Cook Islands</option>\
        <option value="FJ" label="Fiji">Fiji</option>\
        <option value="PF" label="French Polynesia">French Polynesia</option>\
        <option value="TF" label="French Southern Territories">French Southern Territories</option>\
        <option value="GU" label="Guam">Guam</option>\
        <option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>\
        <option value="KI" label="Kiribati">Kiribati</option>\
        <option value="MH" label="Marshall Islands">Marshall Islands</option>\
        <option value="FM" label="Micronesia">Micronesia</option>\
        <option value="NR" label="Nauru">Nauru</option>\
        <option value="NC" label="New Caledonia">New Caledonia</option>\
        <option value="NZ" label="New Zealand">New Zealand</option>\
        <option value="NU" label="Niue">Niue</option>\
        <option value="NF" label="Norfolk Island">Norfolk Island</option>\
        <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>\
        <option value="PW" label="Palau">Palau</option>\
        <option value="PG" label="Papua New Guinea">Papua New Guinea</option>\
        <option value="PN" label="Pitcairn Islands">Pitcairn Islands</option>\
        <option value="WS" label="Samoa">Samoa</option>\
        <option value="SB" label="Solomon Islands">Solomon Islands</option>\
        <option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>\
        <option value="TK" label="Tokelau">Tokelau</option>\
        <option value="TO" label="Tonga">Tonga</option>\
        <option value="TV" label="Tuvalu">Tuvalu</option>\
        <option value="UM" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>\
        <option value="VU" label="Vanuatu">Vanuatu</option>\
        <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>\
        </optgroup></select></div></div><div class="row"><div class="col-25"><label class="control-label col-sm-2" for="city"><b>City:</b></label></div>\
                        <div class="col-75">\
                            <input type="text" onkeyup="checkInput(\'city\', document.getElementById(\'city\').value,\'warning6\',patterns.cityP,\'Your text must be between 2 to 20 characters\');" id="city" maxlength="20" pattern="[a-zA-Z].{2,20}" placeholder="Enter city" name="city" title="Your text must be between 2 to 20 characters" required>\
                            <small id="warning6"></small></div></div>\
                        <div class="row"><div class="col-25"><label class="control-label col-sm-2" for="address">Address:</label></div>\
                        <div class="col-75">\
                            <input type="text" onkeyup="address_exists(document.getElementById(\'address\').value);" id="address" maxlength="100" pattern="[a-zA-Z0-9].{2,100}" placeholder="Enter address" name="address" title=" ">\
                            <small id="error"></small>\
                            <div id="map" class="map" >\
                                <button class="btn btn-info" id="show_map">Show in Map</button>\
                            </div><div class="map2" id="get_loc_msg"><button class="btn btn-info" onclick="my_location();" id="get_loc1">Find my location</button><small id="error_1"></small></div></div></div>\
     <div class="row"><div class="col-25"><label class="control-label col-sm-2" for="job"><b>Job:</b></label> </div>\
                        <div class="col-75">\
                            <input  type="text" onkeyup="checkInput(\'job\',document.getElementById(\'job\').value,\'warning7\',patterns.namesP,\'Job must be between 3 to 15 characters\');" id="job" maxlength="15" pattern="[a-zA-Z].{3,15}" placeholder="Enter job" name="job" title="Your text must be between 3 to 15 characters" required />\
                            <small id="warning7"></small></div></div>\
                        <div class="row"><div class="col-25"><label class="control-label col-sm-2" for="interests">Interests:</label></div>\
                        <div class="col-75">\
                                <textarea id="interests" maxlength="100" placeholder="Enter interests" name="interests" title="Your text must be 100 characters maximum" ></textarea>\
                            </div></div>\
                        <div class="row"><div class="col-25"><label class="control-label col-sm-offset-1" for="info">General info:</label></div>\
                        <div class="col-75">\
                        <textarea id="info" maxlength="500" rows="10" placeholder="Enter info" name="info" title="Your text must be 500 characters maximum" ></textarea>\
                        </div></div><br><div id="star" class="col-sm-2">* : required fields</div><div><h4 id="warning8"></h4></div><hr>\
                <div class="row">\
                    <div id="reg_buttons" class="col-sm-offset-2 col-sm-10 text-center">\
                        <button id="submit" type="submit" onclick= "submitForm();" class="btn btn-primary">Register</button>\
                        <button id="cancel" type="submit" onclick= "closeForm();" class="btn btn-danger">Cancel</button></div> </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>' ;              
           
        
    
                                
                    
  /**************************************** HTML for login form **********************************************************/
  var loginBody = '<div id="loginModal" class="modal fade">\
    <div class="modal-content"><div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal">&times;</button>\
            <h4 id="login_title" class="modal-title"><span class="glyphicon glyphicon-log-in" ></span>  Login</h4></div>\
        <div class="modal-body"><p id="intro_msg">To login please enter the username and password you provided when you register.</p>\
            <hr><div id="login_body1" class="row">\
                <div class="col-25"><label class="control-label col-sm-2" for="username"><b>Username:</b></label></div>\
                <div class="col-75">\
                    <input type="text" id="username_log" pattern="[A-Za-z]+.{8,}" placeholder="Enter Username" name="username" title="Username must be at least 8 characters" required></div></div>\
            <div id="login_body2" class="row"><div class="col-25"><label class="control-label col-sm-2" for="pwd"><b>Password:</b></label></div>\
                <div class="col-75">\
                    <input type="password" id="pwd_log" maxlength="10" pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!$@#%&*]).{8,10}" placeholder="Enter password" name="pwd" title="Password must be between 8 to 10 characters and must contain at least one digit,one letter and one symbol such as !,$,@,#,%,&,*" required>\
                    <small id="warning5"></small></div></div><h4 id="log_status"></h4>\
            <div class="row"><div id="buttons" class="col-sm-offset-2 col-sm-10 text-center">\
                    <button id="log" type="submit" onclick= "loginForm();" class="btn btn-primary">Login</button>\
                    <button id="cancel" type="submit" onclick= "closeLoginForm();" class="btn btn-danger">Cancel</button></div></div>\
            </div></div></div>';
   

/**************************************** HTML for banner ************************************************************/

var banner = '<div id="first-page" class="hero-image"><div class="hero-text">\
    <h1>LogBook</h1>\
    <p>A Modern Social Network for Travelers</p>\
    <div id="error_log"></div></div></div>';

/****************************************** HTML for logged user menu ***************************************************/

var logged_menu = '<div id="mySidenav" class="sidenav"><h2>Logbook</h2>\
<a href="javascript:void(0)" class="closebtn" onclick="document.getElementById(\'mySidenav\').style.width = \'0\';">&times;</a>\
<a href="#" onclick="topTen();">Home</a>\
<a href="#" onclick="showProfile();">Your profile</a>\
<a href="#" onclick="editProfile();">Edit profile</a>\
<a href="#" onclick="display_users();">Other travelers</a>\
<a href="#" onclick="logout();">Log out</a>\
<a href="#" onclick="deleteAccount();">Delete account</a></div>';

/****************************************** HTML for home menu ***************************************************/

var logo = '<a id="logo" class="navbar-brand" href="index.html"><span class="glyphicon glyphicon-home"></span> LogBook </a>';
var buttons_menu = '<li id="login_menu"><a onclick="renderLogin();" data-toggle="modal" data-target="#login">\
<span class="glyphicon glyphicon-log-in"></span> Login </a></li>\
<li id="register-menu"><a onclick="renderRegister();" data-toggle="modal" data-target="#register">\
<span class="glyphicon glyphicon-user" ></span>    Register</a></li>';


/****************************************** HTML for logged menu ***************************************************/

var log_sidenav = '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\
<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>\
<a id="logged-in-menu" class="navbar-brand" href="#mySidenav"><span class="glyphicon glyphicon-menu-hamburger" onclick="openNav();"></span></a>';

var user_avatar = '<li id="user-menu"><a id="userMenu" href="#" >\
        <span class="glyphicon glyphicon-user" ></span><p id="logged-in-name"></p></a></li>';
    


/****************************************** HTML for user deletion ***************************************************/
var deleteBody = '<div id="deleteModal" class="modal fade">\
    <div class="modal-content"><div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal">&times;</button>\
            <h4 id="login_title" class="modal-title"><span class="glyphicon glyphicon-trash" ></span>  Delete Account</h4></div>\
        <div class="modal-body"><p id="intro_msg">Are you sure you want to delete your account? This action is permanent.</p>\
            <div class="row"><div id="buttons" class="col-sm-offset-2 col-sm-10 text-center">\
                    <button id="log" type="submit" onclick= "delete_user();" class="btn btn-primary">Delete</button>\
                    <button id="cancel" type="submit" class="btn btn-danger">Cancel</button></div></div>\
            </div></div></div>';

/****************************************** HTML for platoforms top-10 posts ***************************************************/
var top10 = '<div id="recent_posts"><h3>Logbook\'s Top-10 recent posts</h3>\
    <div class="gallery">\
      <a id="ref0" href="#" data-lightbox="mygallery"><img id="img0" src="images/index.jpg"></a>\
      <div id="postOne" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref1"href="#" data-lightbox="mygallery"><img id="img1" src="images/index.jpg"></a>\
      <div id="postTwo" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref2" href="#" data-lightbox="mygallery"><img  id="img2" src="images/index.jpg"></a>\
      <div id="postThree" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref3" href=# data-lightbox="mygallery"><img id="img3" src="images/index.jpg" ></a>\
      <div id="postFour" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref4" href="#" data-lightbox="mygallery"><img id="img4" src="images/index.jpg" ></a>\
      <div id="postFive" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref5" href="#" data-lightbox="mygallery"><img id="img5" src="images/index.jpg"></a>\
      <div id="postSix" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref6" href="#" data-lightbox="mygallery"><img id="img6" src="images/index.jpg"></a>\
      <div id="postSeven" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref7" href="#" data-lightbox="mygallery"><img id="img7" src="images/index.jpg" ></a>\
      <div id="postEight" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref8" href="#" data-lightbox="mygallery"><img id="img8" src="images/index.jpg" ></a>\
      <div id="postNine" class="desc"></div>\
    </div>\
    <div class="gallery">\
      <a id="ref9" href="#" data-lightbox="mygallery"><img id="img9" src="images/index.jpg" ></a>\
      <div id="postTen" class="desc"></div>\
    </div></div>';


/****************************************** HTML for post display ***************************************************/
var postTitlle = '<h3 id="post_title">Posted from:</h3><br>';
var postDiv = '<div id="displayPost"></div>';
var postBody = '<label class="control-label" for="place">Posted from:</label>\
    <input type="text" id="place" name="place" placeholder="" readonly>\
    <div id="map" class="map" ><button class="btn btn-info" id="show_in_map">Show in Map</button></div>\
    <label class="control-label" for="img">Image:</label><br>\
    <div id="renderImg"><img id="pic" src="" alt="Image" /><canvas id=\'canvasImg\' width=\'640\' height=\'480\'></canvas></div>\
    <label class="control-label" for="subject">Subject:</label>\
    <textarea id="subject" name="subject" placeholder="" style="height:200px" readonly></textarea></div>\
    <button id="cancel" type="submit" onclick="topTen();" class="btn btn-danger">Close</button>';

/****************************************** HTML for create post form display ***************************************************/
var headerForm = '<h3 id="modalTitle">Create Post</h3><br>';
var postForm = '<div id="create_post"></div>';
var postFormBody = '\<div id="postBody">\
    <label class="control-label" for="img">Image:</label><br>\
    <input type="radio" id="img_src" name="img_src" value="url" onclick="imgURL();"> Image URL<br>\
    <input type="radio" id="img_src" name="img_src" value="upload" onclick="imgUpload();"> Upload Image<br>\
    <input type="radio" id="img_src" name="img_src" value="caption" onclick="imgCaption();"> Take Photo<br>\
    <input type="hidden" id="uploadID" name="uploadID" value="3487"> \
    <div id="img_options">\
    <div class="myclass" id="vidcanv">\
        <video id=\'video\' width=\'640\' height=\'480\'autoplay></video>\
        <input type=\'button\' class="btn btn-info" id="snap" value =\'Take Photo\'>\
        <input type=\'button\' class="btn btn-info" id="upload" onclick="upload_img();" value =\'Upload Image\'>\
        <canvas id=\'canvas\' width=\'640\' height=\'480\'></canvas></div></div>\
    <label class="control-label" for="subject"><b>Subject:</b></label>\
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>\
    <div class="control-label"><b>: required fields</b></div></div>\
    <div id="error_post"></div>\
    <button id="submit" type="submit" onclick= "submitPost();" class="btn btn-primary">Post</button>\
    <button id="cancel" type="submit" class="btn btn-danger">Cancel</button>';

/****************************************** HTML for modify post form display ***************************************************/
    var modify_headerForm = '<h3 id="modalTitle">Modify Post</h3><br>';
    var modify_postForm = '<div id="mod_post"></div>';
    var modify_postFormBody = '\<div id="modBody">\
    <label class="control-label" for="img">Image:</label><br>\
    <input type="radio" id="img_src" name="img_src" value="url" onclick="imgURL();"> Image URL<br>\
    <input type="radio" id="img_src" name="img_src" value="upload" onclick="imgUpload();"> Upload Image<br>\
    <input type="radio" id="img_src" name="img_src" value="caption" onclick="imgCaption();"> Take Photo<br>\
    <input type="hidden" id="uploadID" name="uploadID" value="3487"> \
    <div id="img_options">\
    <div class="myclass" id="vidcanv">\
        <video id=\'video\' width=\'640\' height=\'480\'autoplay></video>\
        <input type=\'button\' class="btn btn-info" id="snap" value =\'Take Photo\'>\
        <input type=\'button\' class="btn btn-info" id="upload" onclick="upload_img();" value =\'Upload Image\'>\
        <canvas id=\'canvas\' width=\'640\' height=\'480\'></canvas></div></div>\
    <input type="hidden" id="id">\
    <label class="control-label" for="subject"><b>Subject:</b></label>\
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>\
    <div class="control-label"><b>: required fields</b></div></div>\
    <div id="error_post"></div>\
    <button id="submit" type="submit" onclick= "submitModifyPost();" class="btn btn-primary">Post</button>\
    <button id="cancel" type="submit" class="btn btn-danger">Cancel</button>';
    

/****************************************** HTML for edit post modal ***************************************************/
var editBody = '<div id="editModal" class="modal fade">\
    <div class="modal-content"><div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal">&times;</button>\
            <h4 id="login_title" class="modal-title"><span class="glyphicon glyphicon-pencil" ></span>  Edit Post</h4></div>\
        <div class="modal-body"><p id="intro_msg">Your post is saved</p>\
            <div class="row"><div id="buttons" class="col-sm-offset-2 col-sm-10 text-center">\
                <button id="closeM" type="submit" class="btn btn-danger">Close</button></div></div>\
            </div></div></div>';

/****************************************** HTML for delete post modal ***************************************************/
var deletePost = '<div id="deletePostModal" class="modal fade">\
<div class="modal-content"><div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal">&times;</button>\
        <h4 id="login_title" class="modal-title"><span class="glyphicon glyphicon-trash" ></span>  Delete Post</h4></div>\
    <div class="modal-body"><p id="intro_msg">Your post is deleted</p>\
        <div class="row"><div id="buttons" class="col-sm-offset-2 col-sm-10 text-center">\
            <button id="closeM" type="submit" class="btn btn-danger">Close</button></div></div>\
        </div></div></div>';

/****************************************** HTML for edit post modal ***************************************************/
var createPost = '<div id="createModal" class="modal fade">\
    <div class="modal-content"><div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal">&times;</button>\
            <h4 id="login_title" class="modal-title"><span class="glyphicon glyphicon-pencil" ></span>  Create Post</h4></div>\
        <div class="modal-body"><p id="intro_msg">Your post was created</p>\
            <div class="row"><div id="buttons" class="col-sm-offset-2 col-sm-10 text-center">\
                <button id="closeM" type="submit" class="btn btn-danger">Close</button></div></div>\
            </div></div></div>';

$(document).ready(function () {   
    $('#container').append(banner);
    $('#container').append(string_first_page_informations);
    $('#container').append(string_footer);
    $('.navbar-header').append(logo);
    $('.navbar-right').append(buttons_menu);
    ajaxRequest("POST", "/logbook/sessionServlet", responseFromSessionServlet, null);  
});