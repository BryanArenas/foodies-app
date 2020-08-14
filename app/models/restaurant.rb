class Restaurant < ApplicationRecord
    has_many :reviews
    validates :name, uniqueness: true
    validates_presence_of :title, :description, :score

    before_create :slugify

    def slugify
        self.slug = name.parameterize

    end

    def avg_score
        return 0 unless reviews.size.positive?

        reviews.average(:score).to_f.round(2)
    end
end
