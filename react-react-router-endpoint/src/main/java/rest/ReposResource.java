package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.GitRepo;
import facade.GitRepoFacade;
import java.util.List;
import javax.persistence.Persistence;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("repos")
public class ReposResource {

    private GitRepoFacade gf;
    private static Gson gson;

    public ReposResource()
    {
        this.gf = new GitRepoFacade(Persistence.createEntityManagerFactory("mypu"));
        if (gson == null)
        {
            gson = new GsonBuilder().setPrettyPrinting().create();
        }
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJson()
    {
        List<GitRepo> repos = gf.getAllRepos();
        return Response.status(Response.Status.CREATED)
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET")
                .entity(gson.toJson(repos))
                .build();
    }

}
