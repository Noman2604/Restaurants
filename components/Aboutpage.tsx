import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image1 from "@/pages/imagecopy.png"
import Image2 from "@/pages/chef.jpeg"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Dubai Darbar</h1>

      <section className="mb-12">
        <Card >
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4  md:grid-cols-2">
            <div >
              <p className="text-muted-foreground">
                Dubai Darbar began its journey in 1985 as a small family-owned restaurant in the heart of Dubai. 
                Our passion for authentic Emirati cuisine and commitment to exceptional hospitality quickly made 
                us a favorite among locals and tourists alike.
              </p>
              <p className="mt-4 text-muted-foreground">
                Over the years, we've grown from a single location to multiple restaurants across the UAE, 
                each maintaining the warmth and quality that defined our humble beginnings.
              </p>
            </div>
            <Image 
              src={Image1} 
              alt="Dubai Darbar restaurant interior" 
              width={500} 
              height={200} 
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Chef's Experience</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Image 
              src={Image2} 
              alt="Chef Ahmed preparing a dish" 
              width={200} 
              height={300} 
              className="rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Chef Ahmed Al-Mansoori</h3>
              <p className="text-muted-foreground">
                With over 25 years of culinary expertise, Chef Ahmed Al-Mansoori brings a wealth of knowledge 
                and passion to Dubai Darbar. Trained in both traditional Emirati cuisine and international 
                culinary techniques, Chef Ahmed has crafted our menu to perfectly balance authentic flavors 
                with modern presentation.
              </p>
              <p className="mt-4 text-muted-foreground">
                Chef Ahmed's accolades include multiple regional culinary awards and features in prestigious 
                food publications. His dedication to quality and innovation continues to elevate Dubai Darbar's 
                dining experience.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Cuisine</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-2">Traditional Emirati Dishes</h3>
              <p className="text-muted-foreground">
                Experience the rich flavors of authentic Emirati cuisine, from aromatic machboos to tender lamb ouzi.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Modern Fusion</h3>
              <p className="text-muted-foreground">
                Enjoy innovative dishes that blend Emirati traditions with international culinary techniques.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Fresh Seafood</h3>
              <p className="text-muted-foreground">
                Savor the taste of the Arabian Gulf with our daily selection of fresh, locally-sourced seafood.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Community Involvement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              At Dubai Darbar, we believe in giving back to the community that has supported us for decades. 
              We actively participate in local food drives, sponsor culinary education programs, and support 
              sustainable farming initiatives in the UAE.
            </p>
            <Button>Learn More About Our Initiatives</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Visit Us</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Delta Woods, Shop No. 7, 8/6,Mira Road East, Mumbai  401107 </p>
              <p className="text-muted-foreground">Maharashtra, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Hours</h3>
              <p className="text-muted-foreground">Monday - Sunday: 11:00 AM - 11:00 PM</p>
              <p className="text-muted-foreground">Friday: 1:00 PM - 11:00 PM</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}