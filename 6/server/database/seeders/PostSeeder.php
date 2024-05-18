<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::query()->create([
            "title" => "Разработчики заблокировали «хардкорного» грифера Tinyviolin в WoW Classic",
            "content" => "После относительного успеха по внедрению в состав сильнейшей гильдии 'Хардкорного' WoW Classic – HC Elite и убийству основных персонажей части рейдеров во время прохождения Храма Ан'киража грифер Tinyviolin и не подумал останавливаться, а потому тотчас принялся за подготовку 'Дня правосудия 3.0'",
            "image" => Storage::url("/images/posts/image-aqua.png"),
            "user_avatar" => Storage::url("/images/avatars/daniel.jpg"),
            "votes" => rand(0, 12),
        ]);

        Post::query()->create([
            "title" => "Разработчики WoW Classic в деталях рассказали о работе системы «шардов» и «слоев»",
            "content" => "Одна из самых частых текущих жалоб от игроков 'Сезона открытий' заключается в проблемах работы системы слоев и задержках во время события Кровавой луны в Тернистой долине.",
            "image" => Storage::url("/images/posts/image-rose.png"),
            "user_avatar" => Storage::url("/images/avatars/kristy.png"),
            "votes" => rand(0, 12),
        ]);

        Post::query()->create([
            "title" => "Рейтинги бойцов, лекарей и танков в эпохальных+ подземельях после 14 недели 3 сезона Dragonflight",
            "content" => "Завершается 14 неделя 3 сезона Dragonflight, на которой отважные бойцы, танки и лекари посещали подземелья эпохального+ режима.",
            "image" => Storage::url("/images/posts/image-steel.png"),
            "user_avatar" => Storage::url("/images/avatars/molly.png"),
            "votes" => rand(0, 12),
        ]);

        Post::query()->create([
            "title" => "С выходом нового дополнения в Hearthstone будут доступны не все колоды Непревзойдённого Чудастера",
            "content" => "19 марта в Hearthstone начнётся новый игровой год и одновременно с этим выйдет дополнение 'Мастерская Чудастера'. Сам Чудастер станет одной из нейтральных легендарных карт.",
            "image" => Storage::url("/images/posts/image-yellow.png"),
            "user_avatar" => Storage::url("/images/avatars/veronika.jpg"),
            "votes" => rand(0, 12),
        ]);
    }
}
