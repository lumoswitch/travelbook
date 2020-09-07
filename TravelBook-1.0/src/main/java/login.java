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
import java.util.HashMap;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
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
 * @author sofro
 */
public class login extends HttpServlet {

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
            JSONObject jObj = (JSONObject) new JSONParser().parse(request.getReader());
           HashMap<String,String> vals=new HashMap<>();
            //System.out.println(j);
            String username= (String) jObj.get("username_log");
            System.out.println("gamw to spitaki"+username);
            String password= (String) jObj.get("password_log");
            User user=UserDB.getUser(username);
            if(user==null||!user.getPassword().equals(password)){
                Methods.InvalidResponseJson(out,"Wrong username or password");
            }else{
                HttpSession session=request.getSession();
                String id=request.getSession().getId(); 
                session.setAttribute("username",username);
                String name =user.getFirstName();
                String surname= user.getLastName();
                String email=user.getEmail();
                //String rpt_password=user.getPassword();
                String gender=user.getGender().toString();
                String birth=user.getBirthDate();
                String country=user.getCountry();
                String city=user.getTown();
                String address=user.getAddress();
                String job=user.getOccupation();
                String interests=user.getInterests();
                String info=user.getInfo();
                // avatar
                vals.put("username",username);
                vals.put("name",name);
                vals.put("surname",surname);
                vals.put("email",email);
                vals.put("password",password);
                //vals.put("rpt_password",rpt_password);
                vals.put("gender",gender);
                vals.put("birth",birth);
                vals.put("country",country);
                vals.put("city",city);
                vals.put("address",address);
                vals.put("job",job);
                vals.put("interests",interests);
                vals.put("info",info);
                System.out.println(id);
                System.out.println("lol"+username+name+email);
                //System.out.println(session.getAttribute("birth"));
                Methods.validResponseJson(out, vals,"Welcome back");                
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
            Logger.getLogger(login.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(login.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(login.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(login.class.getName()).log(Level.SEVERE, null, ex);
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

    // private HashMap<String, String> authorize_user(String username,String password, PrintWriter out) throws ClassNotFoundException {

    //     List<User> users = UserDB.getUsers();

    //     System.out.println("==>Retrieving");
    //     for (User userIt : users) {
    //         if (userIt.getUserName().equals(username) && userIt.getPassword().equals(password)) {
    //             HashMap<String,String> retVals = new HashMap<>();
    //             retVals.put("name",userIt.getFirstName());
    //             retVals.put("surname",userIt.getLastName());
    //             retVals.put("username",userIt.getUserName());
    //             retVals.put("email",userIt.getEmail());
    //             retVals.put("password",userIt.getPassword());
    //             retVals.put("city",userIt.getTown());
    //             retVals.put("address",userIt.getAddress());
    //             retVals.put("job",userIt.getOccupation());
    //             retVals.put("gender",userIt.getGender().toString());
    //             retVals.put("birth",userIt.getBirthDate());
    //             retVals.put("country",userIt.getCountry());
    //             retVals.put("interests",userIt.getInterests());
    //             retVals.put("info",userIt.getInfo());
    //             return retVals;
    //         }
            
    //     }
    //     return null;
    // }

}
