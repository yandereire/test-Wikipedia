import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;


import java.util.concurrent.TimeUnit;

public class MainClass {
    public static void main(String[] args){
        System.setProperty("webdriver.gecko.driver", "C:\\Users\\yande\\test-selenium\\drivers\\geckodriver.exe");

        WebDriver driver = new FirefoxDriver();


        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();


        driver.get("https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna");
        driver.findElement(By.cssSelector("#searchInput")).sendKeys("Złoty polski");
        driver.findElement(By.cssSelector("#searchButton")).click();

        WebElement WebImage = driver.findElement(By.cssSelector(".thumbimage"));
        System.out.println(WebImage);

        driver.quit();
    }
}

