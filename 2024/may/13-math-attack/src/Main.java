import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        while(true){
            var exercises = Stream.generate(() -> MathExercise.generate()).limit(5).collect(Collectors.toList());
            var wrongCount = 0;
            System.out.println("Solve the math exercises!\nEnter q to quit");
            for(MathExercise exercise: exercises){
                System.out.print(exercise + " = ");
                var input = scanner.nextLine();
                if(input.toLowerCase().startsWith("q")){
                    System.out.println("Exiting program");
                    return;
                } else if(exercise.isCorrect(input)){
                    System.out.println("Correct!");
                    continue;
                } else {
                    System.out.println("Incorrect!");
                    wrongCount++;
                }
            }
            System.out.println("All done!\nYou've answered " + (exercises.size()-wrongCount) + " exercises correctly");
            System.out.println("Start again?");
            String input = scanner.nextLine();
            if(input.toLowerCase().startsWith("y")) continue;
            else return;
        }
    }
}