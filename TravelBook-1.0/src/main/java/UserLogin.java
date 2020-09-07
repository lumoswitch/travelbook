/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import gr.csd.uoc.cs359.winter2019.logbook.db.UserDB;
import gr.csd.uoc.cs359.winter2019.logbook.model.User;
import gr.csd.uoc.cs359.winter2019.logbook.model.User.Gender;
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
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 *
 * @author angela
 */
public class UserLogin extends HttpServlet {

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
            JSONObject jObj = (JSONObject) new JSONParser().parse(request.getReader());
            JSONObject res=new JSONObject();
            //System.out.println(j);
            String username= (String) jObj.get("username");
            
            String password= (String) jObj.get("password");
            
            User user=UserDB.getUser(username);
            if(user==null){
                res.put("err","username");
                response.setStatus(400);
            }
            else{
                String user_password=user.getPassword();
                if(!user_password.equals(password)){
                    res.put("err","password");
                    response.setStatus(400);
                }
                else{
                    String name=user.getFirstName();
                    res.put("err","the login is sucessfull");
                    res.put("Name",user.getFirstName());
                    res.put("Username", username);
                    res.put("Email",user.getEmail());
                    res.put("Surname",user.getLastName());
                    res.put("Birthday",user.getBirthDate());
                    res.put("Sex",user.getGender().toString());
                    res.put("Countries",user.getCountry());
                    res.put("City",user.getTown());
                    res.put("Address",user.getAddress());
                    res.put("Job",user.getOccupation());
                    res.put("Interests",user.getInterests());
                    res.put("Info",user.getInfo());
                    response.setStatus(200);
                    
                    HttpSession session = request.getSession();
                    session.setAttribute("username", username);
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
            Logger.getLogger(UserLogin.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(UserLogin.class.getName()).log(Level.SEVERE, null, ex);
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
