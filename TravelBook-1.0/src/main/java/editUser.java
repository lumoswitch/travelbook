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
public class editUser extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
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
            JSONObject jsonObject = (JSONObject) jsonParser.parse(request.getReader().lines().collect(Collectors.joining()));
            HashMap<String, String> vals = Methods.assignValues(jsonObject);
            if(update_user(vals) == 0){
                Methods.InvalidResponseJson(out,"Update failed");
            }else{
                out.append("{");
                out.append("\"Message\": \"" + "Οι αλλαγές σας αποθηκεύτηκαν με επιτυχία" + "\",");
                out.append("\"Name\": \"" + (String) jsonObject.get("name") + "\",");
                out.append("\"Surname\": \"" + (String) jsonObject.get("surname") + "\",");
                out.append("\"Username\": \"" + (String) jsonObject.get("username") + "\",");
                out.append("\"Email\": \"" + (String) jsonObject.get("email") + "\",");
                out.append("\"Password\": \"" + (String) jsonObject.get("password") + "\",");
                out.append("\"Gender\": \"" + (String) jsonObject.get("gender") + "\",");
                out.append("\"Birth\": \"" + (String) jsonObject.get("dateOfBirth") + "\",");
                out.append("\"Country\": \"" + (String) jsonObject.get("country") + "\",");
                out.append("\"City\": \"" + (String) jsonObject.get("city") + "\",");
                out.append("\"Address\": \"" + (String) jsonObject.get("address") + "\",");
                out.append("\"Job\": \"" + (String) jsonObject.get("job") + "\",");
                out.append("\"Interests\": \"" + (String) jsonObject.get("interests") + "\",");
                out.append("\"Info\": \"" + (String) jsonObject.get("info") + "\"");
                out.append("}");
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
            Logger.getLogger(editUser.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(editUser.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(editUser.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(editUser.class.getName()).log(Level.SEVERE, null, ex);
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

    public int update_user(HashMap<String, String> values) throws ClassNotFoundException{
        User user = new User();

        System.out.println("==>Updating");
        user = UserDB.getUser(values.get("username"));
        if (user != null) {
            System.out.println("Updating" + user.getUserName());
            user.setUserName(values.get("username"));
            user.setEmail(values.get("email"));
            user.setPassword(values.get("password"));
            user.setFirstName(values.get("name"));
            user.setLastName(values.get("surname"));
            user.setBirthDate(values.get("birth"));
            user.setCountry(values.get("country"));
            user.setTown(values.get("city"));
            user.setAddress(values.get("address"));
            user.setOccupation(values.get("job"));
            user.setGender(values.get("gender"));
            user.setInterests(values.get("interests"));
            user.setInfo(values.get("info"));
            UserDB.updateUser(user);
        }

        user = UserDB.getUser(values.get("username"));
        if (user != null) {
            System.out.println("==>Updated");
            System.out.println(UserDB.getUser(values.get("username")));
            return 1;
        }
        
        return 0;
    }
}
