<%@ Page Language="C#" validateRequest="false" %>
    <%-- Release 16.0.0 --%>
        <%
            Response.ContentType = "text/plain; charset=utf-8";
            Response.Write("<Result>&lt;PAGES&gt;&lt;PAGE&gt;TEST&lt;/PAGE&gt;&lt;/PAGES&gt;</Result>");
        %>