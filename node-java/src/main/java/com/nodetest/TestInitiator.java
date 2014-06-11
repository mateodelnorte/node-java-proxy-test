package main.java.com.nodetest;

import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class TestInitiator {

  public void Start() {
      final ScheduledExecutorService service = Executors.newSingleThreadScheduledExecutor();
      service.scheduleWithFixedDelay(new Runnable()
      {
          @Override
          public void run()
          {
              if (Log.isEnabled()) //Log.trace("" + Math.random());
                Log.Ping();
          }
      }, 3000, 1, TimeUnit.NANOSECONDS);
  }

}