import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Create at least 3 Employee objects
        Employee emp1 = new Employee(1, "Mayank Sinha", 50000);
        Employee emp2 = new Employee(2, "Saurav Singh", 60000);
        Employee emp3 = new Employee(3, "Kumar Sanu", 70000);

        // Store them in a list
        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        // Display their details
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
