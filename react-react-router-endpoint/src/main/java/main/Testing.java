package main;

import javax.persistence.Persistence;

public class Testing {

    public static void main(String[] args)
    {
        Persistence.generateSchema("mypu", null);
    }

}
