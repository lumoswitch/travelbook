/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import gr.csd.uoc.cs359.winter2019.logbook.db.UserDB;
import gr.csd.uoc.cs359.winter2019.logbook.model.User;
import java.io.IOException;
import java.io.PrintWriter;
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
public class findUser extends HttpServlet {

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
            throws ServletException, IOException, ClassNotFoundException, ParseException {
        
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        JSONParser jsonParser = new JSONParser();
        
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            JSONObject jsonObject = (JSONObject) jsonParser.parse(request.getReader().lines().collect(Collectors.joining()));
            System.out.println((String) jsonObject.get("username"));
            User user = new User();
            user = UserDB.getUser((String) jsonObject.get("username"));
            System.out.println(user);
            if(user == null){
                Methods.InvalidResponseJson(out,"User doesn't exist");  
            }else{
                out.append("{");
                out.append("\"Message\": \"" + "User exists" + "\",");
                out.append("\"Name\": \"" + user.getFirstName() + "\",");
                out.append("\"Surname\": \"" + user.getLastName() + "\",");
                out.append("\"Username\": \"" + user.getUserName() + "\",");
                out.append("\"Email\": \"" + user.getEmail() + "\",");
                out.append("\"Password\": \"" + user.getPassword() + "\",");
                out.append("\"Gender\": \"" + user.getGender().toString() + "\",");
                out.append("\"Birth\": \"" + user.getBirthDate() + "\",");
                out.append("\"Country\": \"" + user.getCountry() + "\",");
                out.append("\"City\": \"" + user.getTown() + "\",");
                out.append("\"Address\": \"" + user.getAddress() + "\",");
                out.append("\"Job\": \"" + user.getOccupation() + "\",");
                out.append("\"Interests\": \"" + user.getInterests() + "\",");
                out.append("\"Info\": \"" + user.getInfo() + "\"");
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
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(findUser.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(findUser.class.getName()).log(Level.SEVERE, null, ex);
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
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(findUser.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(findUser.class.getName()).log(Level.SEVERE, null, ex);
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

}
