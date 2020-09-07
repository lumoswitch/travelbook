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
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;

/**
 *
 * @author angela
 */
public class SeeInfo extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     * @throws org.json.simple.parser.ParseException
     * @throws java.lang.ClassNotFoundException
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ParseException, ClassNotFoundException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            request.setCharacterEncoding("UTF-8");
            //JSONObject jObj = (JSONObject) new JSONParser().parse(request.getReader());
            JSONObject res=new JSONObject();
            
            HttpSession session = request.getSession();
                    
            String username = (String) session.getAttribute("username");
            if (username == null) {
                // user is not logged-in
                res.put("err","error you are not logged-in");
                response.setStatus(400);
            }
            else{
                User user=UserDB.getUser(username);
                if(user==null){
                    res.put("err","error couldn't find user");
                    response.setStatus(400);
                }
                else{
                    res.put("err","the login is sucessfull");
                    res.put("username", username);
                    res.put("email",user.getEmail());
                    res.put("name",user.getFirstName());
                    res.put("surname",user.getLastName());
                    res.put("birthdate", user.getBirthDate());
                    res.put("sex",user.getGender().toString());
                    res.put("countries",user.getCountry());
                    res.put("city",user.getTown());
                    res.put("address",user.getAddress());
                    res.put("job",user.getOccupation());
                    res.put("hobby",user.getInterests());
                    res.put("info",user.getInfo());
                    response.setStatus(200); 
                }
            }
            out.append(res.toJSONString());
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
        } catch (ParseException | ClassNotFoundException ex) {
            Logger.getLogger(SeeInfo.class.getName()).log(Level.SEVERE, null, ex);
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
        } catch (ParseException | ClassNotFoundException ex) {
            Logger.getLogger(SeeInfo.class.getName()).log(Level.SEVERE, null, ex);
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
