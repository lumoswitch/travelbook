/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import gr.csd.uoc.cs359.winter2019.logbook.db.PostDB;
import static gr.csd.uoc.cs359.winter2019.logbook.db.PostDB.addPost;
import static gr.csd.uoc.cs359.winter2019.logbook.db.PostDB.updatePost;
import gr.csd.uoc.cs359.winter2019.logbook.db.UserDB;
import gr.csd.uoc.cs359.winter2019.logbook.model.Post;
import gr.csd.uoc.cs359.winter2019.logbook.model.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Base64;
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
public class modifyPostsubmit extends HttpServlet {

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
            throws ServletException, IOException, ParseException, ClassNotFoundException, Exception {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            request.setCharacterEncoding("UTF-8");
            JSONObject jObj = (JSONObject) new JSONParser().parse(request.getReader());
            JSONObject res=new JSONObject();
            HttpSession session = request.getSession();
                    
            String id =(String)jObj.get("id");
            System.out.println("the hopefully parsed id");
            System.out.println(id);
            Integer int_id= Integer.parseInt(id);
            
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
                
                    String img_source = (String) jObj.get("img source");
                    String  subject =(String) jObj.get("subject");
                    String  picture =(String) jObj.get("picture");
                    System.out.println(username);
                    System.out.println(subject);
                    System.out.println(picture);
                    System.out.println(img_source);
                    
                    Post post=PostDB.getPost(int_id);
                    if(post==null){
                        res.put("err","error can't find user with this id");
                        response.setStatus(400);
                    }    
                    else{
                        post.setUserName(username);

                        post.setDescription(subject) ;


                        if(img_source!=null){
                            post.setResourceURL(img_source);
                        }
                       
                        if(img_source!=null && img_source.equals("url")&&!picture.equals("null")){
                            post.setImageURL(picture) ;
                            post.setImageBase64(null) ;
                        }
                     
                        else if(img_source!=null && !img_source.equals("url")&&!picture.equals("null")){
                            //byte[] byte_picture = picture.getBytes();
                            //String encodedfile = Base64.getEncoder().encodeToString(byte_picture);
                            //post.setImageBase64(encodedfile) ;
                            post.setImageBase64(picture) ;
                            post.setImageURL(null) ;
                        }

                        post.checkFields();
                        System.out.println("see description");
                        System.out.println(post.getDescription());
                        updatePost(post);
                        res.put("err","post was sucessfully created");
                        response.setStatus(200);
                    }
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
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(modifyPostsubmit.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(modifyPostsubmit.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(modifyPostsubmit.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(modifyPostsubmit.class.getName()).log(Level.SEVERE, null, ex);
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
