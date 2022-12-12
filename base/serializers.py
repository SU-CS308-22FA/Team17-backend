from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from base.models import Profile, Post, Comment, Question, Answer, Quiz


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class ProfileOwnerSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ("__all__")

class CommentSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Comment"""

    class Meta:
        model = Comment
        fields = ['_id','name', 'body', 'published_on']


class CommentCreateSerializer(serializers.ModelSerializer):
    """DRF Serializer Fpr Creating Comments By The User"""

    class Meta:
        model = Comment
        fields = ['name', 'body', 'post', 'email']

class CommentListSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Comments"""

    post_title = serializers.CharField(source='post.title')

    class Meta:
        model = Comment
        fields = ['id', 'name', 'email', 'post_title',
                  'is_displayed', 'published_on']


class CommentDetailSerializer(serializers.ModelSerializer):
    """DRF Serializer For The Detail Of A Comment"""

    post_title = serializers.CharField(source='post.title')

    class Meta:
        model = Comment
        fields = ['id','name', 'email', 'body',
                  'post_title', 'is_displayed', 'published_on']



class PostListSerializer(serializers.ModelSerializer):
    """DRF Serializer Listing All The Blog Posts"""

    total_comments = serializers.IntegerField()
    author_full_name = serializers.CharField()

    class Meta:
        model = Post
        fields = ['slug', 'title', 'short_description','body', 'author',
                  'total_comments', 'author_full_name', 'published_on']


class PostDetailSerializer(serializers.ModelSerializer):
    """DRF Serializer For Details Of The Blog Posts"""

    comments_list = CommentSerializer(many=True)
    total_comments = serializers.IntegerField()
    author_full_name = serializers.CharField()

    class Meta:
        model = Post
        fields = ['slug', 'title', 'body', 'author_full_name',
                  'published_on', 'comments_list', 'short_description', 'total_comments']

class PostCreateSerializer(serializers.ModelSerializer):
    """Serializer For Creating A Post For Logged In Users"""

    class Meta:
        model = Post
        fields = ('title', 'body','is_published', 'short_description', 'author')


class PostListAllSerializer(serializers.ModelSerializer):
    """Serializer For Listing Only Relevant Information
    Of Posts Of A Particular User"""

    total_comments = serializers.IntegerField()

    class Meta:
        model = Post
        fields = ('title', 'is_published','body', 'slug',
                  'total_comments', 'created_on')

class PostUpdateSerializer(serializers.ModelSerializer):
    """Serializer For Creating A Post For Logged In Users"""

    class Meta:
        model = Post
        fields = ('title', 'body', 'short_description')

class QuizSerializer(serializers.ModelSerializer):
    questions = serializers.HyperlinkedRelatedField(
    many=True,
    read_only=True,
    view_name='base:question-detail'
    )

    def getFullname(self, obj):
        return obj.author.first_name + ' ' + obj.author.last_name

    def getQuestionCount(self, obj):
        return obj.question_count

    author_fullname = serializers.SerializerMethodField("getFullname")
    question_count = serializers.SerializerMethodField("getQuestionCount")

    class Meta:
        fields = [
            'id',
            'title',
            'author',
            'author_fullname',
            'question_count',
            'created_at',
            'questions'
        ]
        model = Quiz

class AnswerSerializer(serializers.ModelSerializer):
	class Meta:
		fields = [
			'id',
			'text',
			'correct',
		]
		model = Answer

class QuestionSerializer(serializers.ModelSerializer):
	answers = AnswerSerializer(
		read_only=True,
		many=True
	)

	class Meta:
		fields = [
			'id',
			'quiz',
			'prompt',
			'answers'
		]
		model = Question
