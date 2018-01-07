package facade;

import entities.GitRepo;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

public class GitRepoFacade {

    private EntityManagerFactory emf;

    public GitRepoFacade(EntityManagerFactory emf)
    {
        this.emf = emf;
    }

    private EntityManager getEntityManager()
    {
        return emf.createEntityManager();
    }

    public List<GitRepo> getAllRepos()
    {
        EntityManager em = getEntityManager();
        try
        {
            Query q = em.createQuery("SELECT g FROM GitRepo g");
            return q.getResultList();
        } finally
        {
        }

    }

}
