
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.json.simple.JSONObject;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author sofro
 */
public class Methods {
    static int success = 0;
    static int fail = 0;
    
    public static HashMap<String, String> assignValues(JSONObject jsonObject) {
        HashMap<String,String> valuesMap = new HashMap<>();
        valuesMap.put("name",(String) jsonObject.get("name"));
        valuesMap.put("surname",(String) jsonObject.get("surname"));
        valuesMap.put("username",(String) jsonObject.get("username"));
        valuesMap.put("email",(String) jsonObject.get("email"));
        valuesMap.put("password",(String) jsonObject.get("password"));
        valuesMap.put("rpt_password",(String) jsonObject.get("rpt_password"));
        valuesMap.put("city",(String) jsonObject.get("city"));
        valuesMap.put("address",(String) jsonObject.get("address"));
        valuesMap.put("job",(String) jsonObject.get("job"));
        valuesMap.put("gender",(String) jsonObject.get("gender"));
        valuesMap.put("avatar",(String) jsonObject.get("avatar"));
        valuesMap.put("birth",(String) jsonObject.get("dateOfBirth"));
        valuesMap.put("country",(String) jsonObject.get("country"));
        valuesMap.put("interests",(String) jsonObject.get("interests"));
        valuesMap.put("info",(String) jsonObject.get("info"));
        return valuesMap;
    }

    public static void InvalidResponseJson(final PrintWriter out,String msg) {
        out.append("{");
        out.append("\"Message\": \"" + msg + "\"");
        out.append("}");
    }

    public static void validResponseJson(final PrintWriter out, HashMap<String, String> valuesMap,String msg) {
        out.append("{");
        out.append("\"Message\": \"" + msg + "\",");
        out.append("\"Name\": \"" + valuesMap.get("Name") + "\",");
        out.append("\"Surname\": \"" + valuesMap.get("Surname") + "\",");
        out.append("\"Username\": \"" + valuesMap.get("Username") + "\",");
        out.append("\"Email\": \"" + valuesMap.get("Email") + "\",");
        out.append("\"Password\": \"" + valuesMap.get("Password") + "\",");
        out.append("\"Gender\": \"" + valuesMap.get("Gender") + "\",");
        //out.append("\"Avatar\": \"" + valuesMap.get("avatar") + "\",");
        out.append("\"Birth\": \"" + valuesMap.get("Birthday") + "\",");
        out.append("\"Country\": \"" + valuesMap.get("Country") + "\",");
        out.append("\"City\": \"" + valuesMap.get("City") + "\",");
        out.append("\"Address\": \"" + valuesMap.get("Address") + "\",");
        out.append("\"Job\": \"" + valuesMap.get("Job") + "\",");
        out.append("\"Interests\": \"" + valuesMap.get("Interests") + "\",");
        out.append("\"Info\": \"" + valuesMap.get("Info") + "\"");
        out.append("}");
    }
    
    public static String fields_validation(HashMap<String, String> valuesMap){

        HashMap<String,String> patternsMap = new HashMap<>();
        patternsMap.put("names","[A-Za-z].{3,15}");
        patternsMap.put("username","[A-Za-z].{8,}");
        patternsMap.put("email","[a-zA-Z0-9._\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,4}");
        patternsMap.put("pass","^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!$@#%&*]).{8,10}");
        patternsMap.put("city","[a-zA-Z].{2,20}");
        
        
        for ( String key : valuesMap.keySet() ) {
            System.out.println(key);
            
            switch (key) {
                case "name":
                case "surname":
                case "job":
                    {
                        findMatch(patternsMap.get("names"), valuesMap, key);
                        break;
                    }
                case "username":
                    {
                        findMatch(patternsMap.get("username"), valuesMap, key);
                        break;
                    }
                case "email":
                    {
                        findMatch(patternsMap.get("email"), valuesMap, key);
                        break;
                    }
                case "password":
                case "rpt_password":
                    {
                        findMatch(patternsMap.get("pass"), valuesMap, key);
                        break;
                    }
                case "city":
                    {
                        findMatch(patternsMap.get("city"), valuesMap, key);
                        break;
                    }
                default:
                    System.out.println(key + ": Key not need to be checked");
            }
        }
        
        if (fail > 0 && fail <= 8) {
            return "No match found";
        } else {
            return "Matched";
        }
    }

    public static void findMatch(String input, HashMap<String, String> valuesMap, String key) {
        Pattern r = Pattern.compile(input);
        Matcher m = r.matcher(valuesMap.get(key));
        checkPattern(m);
    }

    public static void checkPattern(Matcher m) {
        if (m.find()) {
            success++;
        } else {
            fail++;
        }
    }
    
    public static HashMap<String, String> assignValuesPost(JSONObject jsonObject) {
        HashMap<String,String> PostMap = new HashMap<>();
        PostMap.put("username",(String) jsonObject.get("username"));
        PostMap.put("description",(String) jsonObject.get("description"));
        PostMap.put("resource_url",(String) jsonObject.get("src_img"));
        PostMap.put("image_url",(String) jsonObject.get("img_url"));
        PostMap.put("image_base64",(String) jsonObject.get("img_base64"));
        PostMap.put("lat",(String) jsonObject.get("latitude"));
        PostMap.put("lon",(String) jsonObject.get("longtitude"));
        PostMap.put("created_at",(String) jsonObject.get("creation_date"));
        return PostMap;
    }
}
