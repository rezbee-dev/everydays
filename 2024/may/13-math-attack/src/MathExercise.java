import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class MathExercise {
    private Random random = new Random();
    private String exercise;
    private String answer;

    private MathExercise(){
        int x = this.random.nextInt(100);
        int y = this.random.nextInt(100);
        this.exercise = String.format("%d + %d", x, y);
        this.answer = Integer.toString(x + y);
    }

    public boolean isCorrect(String answer){
        return this.answer.equals(answer);
    }

    @Override
    public String toString(){
        return this.exercise;
    }

    public static MathExercise generate(){
        return new MathExercise();
    }

    public static void main(String[] args){
        var exercises = Stream.generate(() -> MathExercise.generate())
                                             .limit(5)
                                             .collect(Collectors.toList());
                                             
        exercises.forEach(System.out::println);
    }
}