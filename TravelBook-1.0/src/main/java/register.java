/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import gr.csd.uoc.cs359.winter2019.logbook.db.UserDB;
import gr.csd.uoc.cs359.winter2019.logbook.model.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException; 
/**
 *
 * @author sofro
 */
public class register extends HttpServlet {
   
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *tring
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ParseException, ClassNotFoundException {
        
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        JSONParser jsonParser = new JSONParser();
        
        try (PrintWriter out = response.getWriter()) {
            
            /* TODO output your page here. You may use following sample code. */
            JSONObject jsonObject = (JSONObject) jsonParser.parse(request.getReader().lines().collect(Collectors.joining()));
                  
            HashMap<String,String> valuesMap = Methods.assignValues(jsonObject);
            if ("No match found".equals(Methods.fields_validation(valuesMap))) {
                response.setContentType("text/html");
                Methods.InvalidResponseJson(out,"Status code 400 – Bad Request");
            } else {
                out.append("{");
                out.append("\"Message\": \"" + "Η εγγραφή σας πραγματοποιήθηκε επιτυχώς" + "\",");
                out.append("\"Name\": \"" + valuesMap.get("name") + "\",");
                out.append("\"Surname\": \"" + valuesMap.get("surname") + "\",");
                out.append("\"Username\": \"" + valuesMap.get("username") + "\",");
                out.append("\"Email\": \"" + valuesMap.get("email") + "\",");
                out.append("\"Password\": \"" + valuesMap.get("password") + "\",");
                out.append("\"Gender\": \"" + valuesMap.get("gender") + "\",");
                out.append("\"Birth\": \"" + valuesMap.get("birth") + "\",");
                out.append("\"Country\": \"" + valuesMap.get("country") + "\",");
                out.append("\"City\": \"" + valuesMap.get("city") + "\",");
                out.append("\"Address\": \"" + valuesMap.get("address") + "\",");
                out.append("\"Job\": \"" + valuesMap.get("job") + "\",");
                out.append("\"Interests\": \"" + valuesMap.get("interests") + "\",");
                out.append("\"Info\": \"" + valuesMap.get("info") + "\"");
                out.append("}");
                add_user(valuesMap);
            }
        
        }

        
    }

    

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ParseException ex) {
            Logger.getLogger(register.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(register.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ParseException ex) {
            Logger.getLogger(register.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(register.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    

    public void add_user(HashMap<String, String> valuesMap) throws ClassNotFoundException{
        User user = new User();
        user.setUserName(valuesMap.get("username"));
        user.setEmail(valuesMap.get("email"));
        user.setPassword(valuesMap.get("password"));
        user.setFirstName(valuesMap.get("name"));
        user.setLastName(valuesMap.get("surname"));
        user.setBirthDate(valuesMap.get("birth"));
        user.setCountry(valuesMap.get("country"));
        user.setTown(valuesMap.get("city"));
        user.setAddress(valuesMap.get("address") );
        user.setOccupation(valuesMap.get("job"));
        user.setGender(valuesMap.get("gender"));
        user.setInterests(valuesMap.get("interests"));
        user.setInfo(valuesMap.get("info"));

        if (UserDB.checkValidUserName(valuesMap.get("username"))) {
            // Add turing to database
            System.out.println("==>Adding users");
            UserDB.addUser(user);
            System.out.println(user.toString());
            System.out.println("==>Added user");
        } else {
            System.out.println("User already exists.... No more Turings please!");
        }
    }

  
}
