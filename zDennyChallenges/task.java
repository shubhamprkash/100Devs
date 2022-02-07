import java.util.Scanner;

public class task {

    public static void main(String args[]) {

        System.out.println("\n\t\t\t Ordering Application");

        int iterating_pizza_bill = 0, iterating_drink_bill = 0, iterating_bread_bill = 0;
        int iterating_pizza_quant = 0, iterating_drink_quant = 0, iterating_bread_quant = 0;
        String pizza_name = " ", drink_name = " ", bread_name = " ";
        int iterate = 0;

        /* do { */
        int pizza_price = 0;
        int pizza_quantity = 0;
        String pizza_item = "";

        int drink_price = 0;
        int drink_quantity = 0;
        String drink_item = "";

        int bread_price = 0;
        int bread_quantity = 0;
        String bread_item = "";

        pizza p = new pizza();
        pizza_price = p.choice();
        pizza_quantity = p.quant();
        pizza_item = p.selected_item;

        drinks d = new drinks();
        drink_price = d.choice();
        drink_quantity = d.quant();
        drink_item = d.selected_item;

        bread b = new bread();
        bread_price = b.choice();
        bread_quantity = b.quant();
        bread_item = b.selected_item;

        int pizza_bill = pizza_price * pizza_quantity;
        int drink_bill = drink_price * drink_quantity;
        int bread_bill = bread_price * bread_quantity;

        iterating_pizza_bill = pizza_bill + iterating_pizza_bill;
        iterating_drink_bill = drink_bill + iterating_drink_bill;
        iterating_bread_bill = bread_bill + iterating_bread_bill;

        iterating_pizza_quant = pizza_quantity;
        iterating_drink_quant = drink_quantity;
        iterating_bread_quant = bread_quantity;

        pizza_name = pizza_item;
        drink_name = drink_item;
        bread_name = bread_item;

        System.out.println("You want to order more : ");
        Scanner obj = new Scanner(System.in);
        String uchoice = obj.nextLine();
        System.out.println("u choic = " + uchoice);

        if (uchoice == "y" || uchoice == "Y") {
            iterate = iterate + 0;
            System.out.println("u choic = " + uchoice);
            System.out.println("itrate = " + iterate);
        }

        else if (uchoice == "n" || uchoice == "y") {
            iterate = iterate + 1;
            System.out.println("u choic = " + uchoice);
            System.out.println("itrate = " + iterate);
        }
        obj.close();
        /* } while (iterate == 0); */

        System.out.println("\t\t----- THANK YOU FOR ORDERING -----");
        System.out.println("\nRedirecting to  bill summary....");

        billsummary total_bill = new billsummary();
        total_bill.calc(iterating_pizza_bill, iterating_drink_bill, iterating_bread_bill,
                pizza_name, drink_name, bread_name,
                iterating_pizza_quant, iterating_drink_quant, iterating_bread_quant);

    }

}

class pizza {
    String selected_item = "";

    pizza() {

        System.out.println("\nSelect pizza");
        System.out.print(" Name\t" + "  " + "Medium" + "  " + "Large\n");
        System.out.println("1." + "Pizza1" + " " + " " + "Rs.450" + " " + " " + "Rs.500");
        System.out.println("2." + "Pizza2" + " " + " " + "Rs.445" + " " + " " + "Rs.550");
        System.out.println("3." + "Pizza3" + " " + " " + "Rs.500" + " " + " " + "Rs.570");
        System.out.println("4." + "Pizza4" + " " + " " + "Rs.550" + " " + " " + "Rs.650");
        System.out.println("5." + "Pizza5" + " " + " " + "Rs.520" + " " + " " + "Rs.600\n");

    }

    int choice() {
        Scanner choice = new Scanner(System.in);
        System.out.println("Enter Your choice: ");
        String pc = choice.nextLine();
        int arr[][] = { { 450, 500 }, { 445, 550 }, { 500, 570 }, { 550, 650 }, { 520, 600 } };
        int price = 0;
        switch (pc) {
            case "1 M":
                price = arr[0][0];
                selected_item = "Pizza 1";
                break;
            case "1 L":
                price = arr[0][1];
                selected_item = "Pizza 1";
                break;
            case "2 M":
                price = arr[1][0];
                selected_item = "Pizza 2";
                break;
            case "2 L":
                price = arr[1][1];
                selected_item = "Pizza 2";
                break;
            case "3 M":
                price = arr[2][0];
                selected_item = "Pizza 3";
                break;
            case "3 L":
                price = arr[2][1];
                selected_item = "Pizza 3";
                break;
            case "4 M":
                price = arr[3][0];
                selected_item = "Pizza 4";
                break;
            case "4 L":
                price = arr[3][1];
                selected_item = "Pizza 4";
                break;
            case "5 M":
                price = arr[4][0];
                selected_item = "Pizza 5";
                break;
            case "5 L":
                price = arr[4][1];
                selected_item = "Pizza 5";
                break;
            default:
                price = 1000;
        }
        return price;
    }

    int quant() {
        Scanner quant = new Scanner(System.in);
        System.out.println("Enter Your Quantity: ");
        int quanti = quant.nextInt();
        return quanti;
    }

}

class bread {
    String selected_item = "";

    bread() {

        System.out.println("\nSelect Bread");
        System.out.print(" Name\t" + "  " + "\t\tMedium\n");
        System.out.println("1." + "Garlic Bread" + " " + " " + "\tRs.220");
        System.out.println("2." + "Stuffed Garlic Bread" + " " + " " + "Rs.250");
        System.out.println("3." + "Chocolate Cookie" + " " + " " + "\tRs.30");
        System.out.println("4." + "Chocolava" + " " + " " + "\t\tRs.95");
    }

    int choice() {

        Scanner choice = new Scanner(System.in);
        System.out.println("Enter Your choice: ");
        int pc = choice.nextInt();
        int arr[] = { 220, 250, 30, 95 };
        int price = 0;
        switch (pc) {
            case 1:
                price = arr[0];
                selected_item = "Garlic Bread";
                break;
            case 2:
                price = arr[1];
                selected_item = "Stuffed Garlic Bread";
                break;
            case 3:
                price = arr[2];
                selected_item = "Chocolate Cookie";
                break;
            case 4:
                price = arr[3];
                selected_item = "Chocolava";
                break;
            default:
                price = 1000;
        }
        return price;
    }

    int quant() {
        Scanner quant = new Scanner(System.in);
        System.out.println("Enter Your Quantity: ");
        int quanti = quant.nextInt();
        return quanti;
    }

}

class drinks {
    String selected_item = " ";

    drinks() {
        System.out.println("\nSelect Drinks");
        System.out.print(" Name\t" + " " + "Medium" + " " + "Large\n");
        System.out.println("1." + "Coke" + " " + " " + " " + "Rs.45" + " " + " " + "Rs.50");
        System.out.println("2." + "Sprit" + " " + " " + "Rs.44" + " " + " " + "Rs.55");
        System.out.println("3." + "7up" + " " + " " + " " + " " + "Rs.50" + " " + " " + "Rs.57");
        System.out.println("4." + "Pepsi" + " " + " " + "Rs.55" + " " + " " + "Rs.65");
        System.out.println("5." + "Coffee" + " " + "Rs.52" + " " + " " + "Rs.60\n");

    }

    int choice() {
        Scanner choice = new Scanner(System.in);
        System.out.println("Enter Your choice: ");
        String pc = choice.nextLine();
        int arr[][] = { { 45, 50 }, { 44, 55 }, { 50, 57 }, { 55, 65 }, { 52, 60 } };
        int price = 0;
        switch (pc) {
            case "1 M":
                price = arr[0][0];
                selected_item = "Coke";
                break;
            case "1 L":
                price = arr[0][1];
                selected_item = "Coke";
                break;
            case "2 M":
                price = arr[1][0];
                selected_item = "Sprit";
                break;
            case "2 L":
                price = arr[1][1];
                selected_item = "Sprit";
                break;
            case "3 M":
                price = arr[2][0];
                selected_item = "7up";
                break;
            case "3 L":
                price = arr[2][1];
                selected_item = "7up";
                break;
            case "4 M":
                price = arr[3][0];
                selected_item = "Pepsi";
                break;
            case "4 L":
                price = arr[3][1];
                selected_item = "Pepsi";
                break;
            case "5 M":
                price = arr[4][0];
                selected_item = "Coffee";
                break;
            case "5 L":
                price = arr[4][1];
                selected_item = "Coffee";
                break;
            default:
                price = 1000;
        }
        return price;
    }

    int quant() {
        Scanner quant = new Scanner(System.in);
        System.out.println("Enter Your Quantity: ");
        int quanti = quant.nextInt();
        return quanti;
    }

}

class billsummary {

    int pizza = 0, drink = 0, bread = 0;
    int pizzaQ = 0, drinkQ = 0, breadQ = 0;
    String pizzaN = "", breadN = "", drinkN = "";

    void calc(int pizza_price, int drink_price, int bread_price,
            String pizza_name, String drink_name, String bread_name,
            int pizza_quantity, int drink_quantity, int bread_quantity) {

        pizza = pizza_price;
        drink = drink_price;
        bread = bread_price;

        pizzaQ = pizza_quantity;
        drinkQ = drink_quantity;
        breadQ = bread_quantity;

        pizzaN = pizza_name;
        drinkN = drink_name;
        breadN = bread_name;

        int Total = pizza + drink + bread;
        double Taxes = Total * 0.09;
        double GrandTotal = Total + (Taxes * 2);

        System.out.println("\t\t\t\t=================  BILL SUMMARY  =================");
        System.out.println("\t\t\t\t**************************************************");
        System.out.println("\t\t\t\t**************************************************");
        System.out.println("");
        System.out.println("\t\t\t\tItems\t\tQuantity\tPrice");
        System.out.println("\t\t\t\t**************************************************");
        System.out.println("\t\t\t\t" + pizzaN + "\t\t" + pizzaQ + "\t\t" + pizza);
        System.out.println("\t\t\t\t" + drinkN + "\t\t" + drinkQ + "\t\t" + drink);
        System.out.println("\t\t\t\t" + breadN + "\t\t" + breadQ + "\t\t" + bread);
        System.out.println("\t\t\t\t--------------------------------------------------");
        System.out.println("\t\t\t\t" + "Total " + "\t\t" + "\t" + Total);
        System.out.println("\t\t\t\t--------------------------------------------------");
        System.out.println("\t\t\t\tTaxes :");
        System.out.println("\t\t\t\t" + "CGST " + "\t\t" + "9%" + "\t\t" + Taxes);
        System.out.println("\t\t\t\t" + "SGST " + "\t\t" + "9%" + "\t\t" + Taxes);
        System.out.println("\t\t\t\t==================================================");
        System.out.println("\t\t\t\t" + "Grand Total " + "\t\t" + "\t" + GrandTotal);
        System.out.println("\t\t\t\t--------------------------------------------------");
    }
}
