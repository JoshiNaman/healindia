


function checkDiag(temp, oxyLevel, age)
{   
    if(oxyLevel<90)
    {
            //critical
                window.open("www.google.com");

    }
    else if (oxyLevel < 95)
    {
        if (age>55)
        {
                //critical
                window.open("www.google.com");
        }
        else if (age>25)
        {
            if(temp>100)
            {
                //critical
            }
            else
            {
                //moderate
            }

        }
        else
        {
            //moderate
        }
    }
    else 
    {
        if(age>55 && temp>100)
        {
            //critical
        }
        else if (age>25 && temp>100)
        {
            //moderate
        }
        else {
            //safe
        }
    }

}